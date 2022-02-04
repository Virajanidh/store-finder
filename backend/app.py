from distutils.log import info
from datetime import date
from urllib import response
from flask import Flask , request ,session, redirect, url_for, render_template, flash
from flask_sqlalchemy import SQLAlchemy
import psycopg2 #pip install psycopg2 
import psycopg2.extras
import re 
#from werkzeug.security import generate_password_hash, check_password_hash
from passlib.hash import pbkdf2_sha256
from flask_cors import *
from stores import *
from validate import *

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://storeFinderAdmin@store-finder-db:Intern123@store-finder-db.postgres.database.azure.com:5432/storefinder'
#localt
#app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:virajani@localhost/nodelogin'
db = SQLAlchemy(app)
CORS(app)

def format_product(product):
    return{
        "id": product.id,
        "store_id": product.store_id,
        "name": product.name,
        "description": product.description,
        "amount": product.amount
    }

def format_prefer(prefer):
    return{
        "id": prefer.id,
        "preference": prefer.preference,
        "district": prefer.district,
        "created-at": prefer.created_at
    }

def format_store(store):
    return{
        "id": store.id,
        "name": store.name,
        "email": store.email,
        "address": store.address,
        "city": store.city,
        "district": store.district,
        "password": store.password
    }

def filtered_products(information):
    return{
        "id":format(information[0].id),
        "name": format(information[0].name),
        "description": format(information[0].description),
        "amount": format(information[0].amount),
        "store_id": format(information[0].store_id),
        "store_name":format(information[1].name),
        "address": format(information[1].address)

    }

def filtered_pref(prefere):
    return{
        "preference":format(prefere[0].preference),
        "district": format(prefere[0].district),
        "created_at": format(prefere[0].created_at)
    }

@app.route('/')
def hello():
    return 'Hello'

#newly added
#adding a user preference
@app.route('/preferences', methods = ['POST'])
def add_preference():
    preference = request.json['preference']
    district = request.json['district']
    created_at = date.today().strftime("%Y/%m/%d")
    #created_at = request.json['created_at']
    prefer = Preferences(preference,district,created_at)
    db.session.add(prefer)
    db.session.commit()
    return format_prefer(prefer)

#newly added
#getting user preferences filtered with area and matching it with store located district
@app.route('/preferences/<store_id>', methods =['GET'])
def get_preferences(store_id):
    store_pref = db.session.query(Preferences, Stores).outerjoin(Stores, Preferences.district == Stores.district).filter(Stores.id==store_id).all()
    pref_list = []
    for pref in store_pref:
        pref_list.append(filtered_pref(pref))
    return{'products': pref_list}

#register a new store
@app.route('/register', methods = ['POST'])
def register_store():
    name = request.json['name']
    email = request.json['email']
    address = request.json['address']
    city = request.json['city']
    district = request.json['district']
    password = request.json['password']
    post_data = [name,email,address,city,district,password]
    status = validate_reg_data(data_object=post_data)
    if (status == 'valid'):
        #Hashed Passowrd
        hashed_password = pbkdf2_sha256.hash(password)
        store_object = Stores.query.filter_by(email=email).first()
        if store_object:
            return "The email already registered!!!"
        store = Stores(name,email,address,city,district,hashed_password)
        db.session.add(store)
        db.session.commit()
        return format_store(store)
    else:
        return status

		

#newly added
#login store
@app.route('/login', methods = ['POST'])
def login_store():
    email = request.json['email']
    password = request.json['password']
    store_object = Stores.query.filter_by(email=email).first()
    if store_object is None:
        return "Email or password is incorrect!"
    elif not pbkdf2_sha256.verify(password, store_object.password):
        return "Email or password is incorrect!"
    return format_store(store_object)

#create a product
@app.route('/products/<store_id>', methods = ['POST'])
def create_product(store_id):
    store_id = store_id
    name = request.json['name']
    description = request.json['description']
    amount = request.json['amount']
    post_data = [store_id,name,description,amount]
    status = validate_pro_data(data_object=post_data)
    if (status == 'valid'):
        product = Products(store_id,name.lower(),description,amount)
        db.session.add(product)
        db.session.commit()
        return format_product(product)
    else:
	    return status

        

#get all products of a particular store
@app.route('/products/<store_id>', methods =['GET'])
def get_products(store_id):
    products = Products.query.filter_by(store_id=store_id).all()
    product_list = []
    for product in products:
        product_list.append(format_product(product))
    return{'products': product_list}

#should add product name in lower case for searching
#get products using a name
@app.route('/users/products/<name>/<district>', methods =['GET'])
def filter_products(name, district):
    products = db.session.query(Products, Stores).outerjoin(Stores, Products.store_id == Stores.id).filter(Products.name==name,Stores.district==district).all()
    product_list = []
    for product in products:
        product_list.append(filtered_products(product))
    return{'information': product_list}



#get an information of a particular product
@app.route('/products/<store_id>/<id>', methods = ['GET'])
def get_product(id, store_id):
    product = Products.query.filter_by(id=id, store_id=store_id).one()
    formatted_product = format_product(product)
    db.session.commit()
    return {'product': formatted_product}

#modified
#delete information of a particular product
@app.route('/products/<store_id>/<id>', methods = ['DELETE'])
def delete_product(id, store_id):
    product = db.session.query(Products).filter_by(id=id, store_id=store_id).one()
    db.session.delete(product)
    db.session.commit()
    return f'Product (id: {id}) deleted!'

#update information of a particular product
@app.route('/products/<store_id>/<id>', methods = ['PUT'])
def update_product(id, store_id):
    product = db.session.query(Products).filter_by(id=id, store_id=store_id)
    # name =request.json['name']
    description =request.json['description']
    amount =request.json['amount']
    product.update(dict(description=description,amount=amount))
    db.session.commit()
    return {'product': format_product(product.one())}
	
#get all products in a particular district
@app.route('/product/<district>', methods =['GET'])
def get_products_by_district(district):
    products = db.session.query(Products, Stores).outerjoin(Stores, Products.store_id == Stores.id).filter(Stores.district==district).all()
    product_list = []
    for product in products:
        product_list.append(filtered_products(product))
    return{'information': product_list}
	
#delete information of a particular store
@app.route('/store/<id>', methods = ['DELETE'])
def delete_store(id):
    store = db.session.query(Stores).filter_by(id=id).one()
    products =db.session.query(Products).filter_by(store_id=id).all()
    db.session.query(Products).filter(Products.store_id==id).delete()
    db.session.commit()
    db.session.delete(store)
    db.session.commit()
    return f'Store (id: {id}) deleted! and products are deleted'
	
#update information of a particular store
@app.route('/stores/<id>', methods = ['PUT'])
def update_store(id):
    store = db.session.query(Stores).filter_by(id=id)
    # name =request.json['name']
    name =request.json['name']
    email=request.json['email']
    address =request.json['address']
    city=request.json['city']
    district=request.json['district']
    password=request.json['password']
    post_data = [name, email,address,city,district,password]
    status = validate_reg_data(data_object=post_data)
    if (status == 'valid'):
        #hashed password
        hashed_password = pbkdf2_sha256.hash(password)
        store_object = db.session.query(Stores).filter(email==email,id!=id).first()
        if store_object:
            return "The email already registered!!!"
        store.update(dict(name=name,email=email,address=address,city=city,district=district,password=hashed_password))
        db.session.commit()
        #return {'store': format_store(store.one())}
        return "Modification Successfull !!!!"
    else:
        return status

#to remove unused connections
@app.teardown_appcontext
def shutdown_session(exception=None):
    db.session.remove()

if __name__ == '__main__':
    app.run()
