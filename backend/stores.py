from datetime import date, datetime
import email
from email.policy import default
from enum import unique
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Products(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    store_id = db.Column(db.Integer, nullable=False)
    name = db.Column(db.String(50), nullable=False)
    description = db.Column(db.String(100), nullable=False)
    amount = db.Column(db.Integer, nullable=False, default=date.today)

    def __repr__(self):
        return f"Products: {self.store_id, self.name,self.description, self.amount}"

    def __init__(self,store_id, name, description, amount):
        self.store_id = store_id
        self.name = name
        self.description = description
        self.amount = amount

class Stores(db.Model):
    __tablename__ ="stores"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(200), nullable=False)
    email = db.Column(db.String(200), unique=True, nullable=False)
    address = db.Column(db.String(200), nullable=False)
    city = db.Column(db.String(200), nullable=False)
    district = db.Column(db.String(200), nullable=False)
    password = db.Column(db.String(100), nullable=False)

    def __repr__(self):
        return f"Stores: {self.name, self.email,self.address, self.city, self.district, self.password}"

    def __init__(self,name, email, address, city, district, password):
        self.name = name
        self.email = email
        self.address = address
        self.city = city
        self.district = district
        self.password = password

class Preferences(db.Model):
    __tablename__ ="preferences"
    id = db.Column(db.Integer, primary_key=True)
    preference = db.Column(db.String(200), nullable=False)
    district = db.Column(db.String(200), unique=True, nullable=False)
    created_at = db.Column(db.Date, nullable=False)

    def __repr__(self):
        return f"Preferences: {self.preference, self.district, self.created_at}"

    def __init__(self,preference,district,created_at):
        self.preference = preference
        self.district = district
        self.created_at = created_at