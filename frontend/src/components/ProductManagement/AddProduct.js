import axios from "axios"
import { Component } from "react";
import React from 'react';
import { connect } from 'react-redux';
import Test from './Test';


export class AddProduct extends Component {

    constructor(props){
        super(props)
        this.state={
            store_id:this.props.data.id,
            name : "",
            description:"",
            amount:""
        }
    }

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
        console.log("handlesubmit")
        
        if(name!="" && description!="" && amount >0){
            await axios.post(`${baseUrl}/products/${store_id}`, {store_id,name,description,amount})

            this.setState({
            //store_id:"", 
            name : "",
            description:"",
            amount:""
            })
            document.querySelector('#errormsg1').textContent="Submit Successfull";
            document.querySelector('#errormsg2').textContent="";
        }
        else if (amount < 0){
            document.querySelector('#errormsg1').textContent="Available amount must be greater than 0"
        }
        else if(name=="" || description=="" ){
            document.querySelector('#errormsg1').textContent="Please complete all the fields";

        }
        else{
            document.querySelector('#errormsg1').textContent="Please complete all the fields";
            document.querySelector('#errormsg2').textContent="Available amount must be greater than 0";
        }

    }
    render() {
        if(this.props.isSuccessfullregister||this.props.isloggedin){
    return ( 
            <div className="create">
                <h2>Add a product</h2>
                <section>
            <form onSubmit={this.handleSubmit}>
            <div>

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
            <p class="text-warning" id='errormsg1'></p>
            <p class="text-warning" id='errormsg2'></p> 
            </section>
            </div>
        );
    }
    else{
        return(
        <div><Test/></div>
        )
    }
    }
}
 

const mapStateToProps = state => ({
    isloggedin : state.products.isloggedin,
    isSuccessfullregister: state.products. isSuccessfullregister,
    data :state.products.data
  });
  
  export default connect(mapStateToProps
    )(AddProduct);