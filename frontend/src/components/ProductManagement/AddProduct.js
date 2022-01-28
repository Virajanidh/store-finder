import axios from "axios"
import { Component, useState } from "react";
import React from 'react';


export class AddProduct extends Component {

    constructor(props){
        super(props)
        this.state={
            store_id:"",
            name : "",
            description:"",
            amount:""
        }
    }


  /* const [store_id, setStore_id] = useState("");
   const [name, setName] = useState("");
   const [description, setDescription] = useState("");
   const [amount, setAmount] = useState("");

   handleChange1 = e =>{
       setStore_id(e.target.value);
   }
   handleChange2 = e =>{
       setName(e.target.value);
   }
   handleChange3 = e =>{
       setDescription(e.target.value);
   }
   handleChange4 = e =>{
       setAmount(e.target.value);
   }*/
   handleChange=(e)=>{
    this.setState({
      [e.target.name] : e.target.value
    })
  }

    handleSubmit = async (e) =>{
        const baseUrl ="http://127.0.0.1:5000"
        e.preventDefault();
        let store_id=this.state.store_id
        let name =this.state.name
        let description = this.state.description
        let amount =this.state.amount
        
        await axios.post(`${baseUrl}/products/${store_id}`, {store_id,name,description,amount})
        console.log (store_id,name,description,amount)

        this.setState({
        store_id:"",
        name : "",
        description:"",
        amount:""
        })
    /*       setStore_id('');
       setName('');
       setDescription('');
       setAmount('');*/
    }
    render() {
    return ( 
            <div className="create">
                <h2>Add a product</h2>
                <section>
            <form onSubmit={this.handleSubmit}>
            <div>
            <label htmlFor='store_id'>Store ID</label>
                <br/>
            <input
            onChange={this.handleChange}
            type="number"
            name="store_id"
            id="store_id"
            value={this.state.store_id}
            />
            </div>
            <div>
                <label htmlFor='name'>Name</label>
                <br/>
            <input
            onChange={this.handleChange}
            type="text"
            name="name"
            id="name"
            value={this.state.name}
            />
            </div>
            <div>
                <label htmlFor='description'>Description</label>
                <br/>
            <input
            onChange={this.handleChange}
            type="text"
            name="description"
            id="description"
            value={this.state.description}
            />
            </div>
            <div>
                <label htmlFor='amount'>Amount</label>
                <br/>
            <input
            onChange={this.handleChange}
            type="number"
            name="amount"
            id="amount"
            value={this.state.amount}
            />
            </div>
            <br/>
            <button type='submit'>
            Submit
            </button>
            </form>
            </section>
            </div>
        );
    }
}
 
export default AddProduct;