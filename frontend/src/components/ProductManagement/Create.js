import React, { Component } from 'react';
import { useEffect, useState } from "react";
import axios from "axios"

export class Create extends Component{
    constructor(props){
        super(props)
            this.state ={productsList:[],productID:null, editDescription:"",editAmount:""}

        
    }
    handleChange(event){
        this.setState({
          [event.target.name] : event.target.value
        })
      }
  
    
    //const baseUrl ="http://127.0.0.1:5000"

    //const store_id_id = 1

    //const [productsList, setProductsList] = useState([]);
    //const [productID, setProductId] = useState(null);
    //const [editDescription, setEditDescription] = useState("");
    //const [editAmount, setEditAmount] = useState("");

    handleDelete = async (id) =>{
        let baseUrl ="http://127.0.0.1:5000"
      let store_id_id =1
        const updatedList = this.state.productsList.filter(product => product.id !== id);
        //setProductsList(updatedList);
        this.setState({productsList:updatedList})
        await axios.delete(`${baseUrl}/products/${store_id_id}/${id}`)
    }

    handleEdit = (product) =>{
     // setProductId(product.id);
      //setEditDescription(product.description);
      //setEditAmount(product.amount);
      this.setState({
        productID :product.id,
        editDescription:product.description,
        editAmount:product.amount 
      })
    }

    handleChange3 = e =>{
      // setEditDescription(e.target.value);
      this.setState({editDescription:e.target.value})
   }
   handleChange4 = e =>{
      // setEditAmount(e.target.value);
      this.setState({editAmount:e.target.value})
   }
   test(){
       console.log("hii")
   }

    handleEditSubmit = async (e) =>{
      e.preventDefault();
      // if(editDescription || editAmount)
      let baseUrl ="http://127.0.0.1:5000"
      let store_id_id =1
      let productID =this.state.productID
      let editDescription =this.state.editDescription
      let editAmount =this.state.editAmount
      const data = await axios.put(`${baseUrl}/products/${store_id_id}/${productID}`,{description: editDescription,amount :editAmount});
      console.log(data)
      const updatedProduct = data.data.product;
      const updatedList = this.state.productsList.map(product =>{
        if (product.id === productID){
          return product= updatedProduct
        }
        return product
      })
/*setProductsList(updatedList)
      setEditDescription('');
      setEditAmount('');
      setProductId(null);*/
      this.setState({productsList:[],productID:null, editDescription:"",editAmount})
   }

    fetchProducts = async () => {
        let baseUrl ="http://127.0.0.1:5000"
        let store_id_id =1
        const data = await axios.get(`${baseUrl}/products/${store_id_id}`)
        console.log(data);
        const {products} = data.data
        //console.log({products});
        //setProductsList(products);
        this.setState({productsList : products})
    }

    
    componentDidMount(){
        this.fetchProducts();
    }

    render(){
      //  this.fetchProducts();
    return ( 
        
        <div className="home">
        <div className="product-list">
          <h2>All products of the store!</h2>
          {this.state.productsList.map(product => {
            if(this.state.productID === product.id){
              return(
                <form onSubmit={this.handleEditSubmit} key={product.id}>
                <div>
                    <input
                  onChange={this.handleChange3}
                  type="text"
                  name="editDescription"
                  id="editDescription"
                  value={this.state.editDescription}
                  />
                </div>
                <div>
                  <input
                  onChange={this.handleChange4}
                  type="number"
                  name="editAmount"
                  id="editAmount"
                  value={this.editAmount}
                  />
                </div>
                <button type="submit">Submit</button>
              </form>
              )
            }else{
              return(
                <div className="product-preview" key={product.id}>
                  <h2>{ product.name }</h2>
                  <p>Description : { product.description }</p>
                  <p>Amount : { product.amount }</p>
                  <button onClick={() => this.handleEdit(product)}>Edit</button>
                  <button onClick={() => this.handleDelete(product.id)}>Delete</button>
                </div>
              )
            }
                
          })}
        </div>
      </div>
      
        
     );
     }
}
export default Create;

