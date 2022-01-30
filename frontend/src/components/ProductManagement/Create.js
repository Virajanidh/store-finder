import React, { Component } from 'react';
import axios from "axios"
import { connect } from 'react-redux';
import Test from './Test';

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
  

    handleDelete = async (id) =>{
        let baseUrl ="http://127.0.0.1:5000"
      let store_id_id =this.props.data.id
        const updatedList = this.state.productsList.filter(product => product.id !== id);
        this.setState({productsList:updatedList})
        await axios.delete(`${baseUrl}/products/${store_id_id}/${id}`)
    }

    handleEdit = (product) =>{
      this.setState({
        productID :product.id,
        editDescription:product.description,
        editAmount:product.amount 
      })
    }

    handleChange3 = e =>{
      this.setState({editDescription:e.target.value})
   }
   handleChange4 = e =>{
      this.setState({editAmount:e.target.value})
   }

    handleEditSubmit = async (e) =>{
      e.preventDefault();
      let baseUrl ="http://127.0.0.1:5000"
      let store_id_id =this.props.data.id
      let productID =this.state.productID
      let editDescription =this.state.editDescription
      let editAmount =this.state.editAmount
      if(editAmount>0 && editDescription !=""){
      const data = await axios.put(`${baseUrl}/products/${store_id_id}/${productID}`,{description: editDescription,amount :editAmount});

      console.log(data)
      const updatedProduct = data.data.product;
      const updatedList = this.state.productsList.map(product =>{
        if (product.id === productID){
          return product= updatedProduct
        }
        return product
      })
      
      this.setState({productsList:updatedList,productID:null, editDescription:"",editAmount})
    }
    else{
      document.querySelector('#errormsg').textContent="Please complete all the fields and available amount must be greater than 0";
    }
    }

    fetchProducts = async () => {
        let baseUrl ="http://127.0.0.1:5000"
        let store_id_id =this.props.data.id
        const data = await axios.get(`${baseUrl}/products/${store_id_id}`)
        console.log(data);
        const {products} = data.data
        this.setState({productsList : products})
    }

    
    componentDidMount(){
        this.fetchProducts();
    }

    render(){
      if(this.props.isSuccessfullregister||this.props.isloggedin){
    return ( 
        
        <div className="home">
        <div className="product-list">
          <div className='center'>
            <h2>All products of the store!</h2>
          </div>
          {this.state.productsList.map(product => {
            if(this.state.productID === product.id){
              return(
                <div className="product-preview">
                  <h3>{ product.name }</h3>
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
                  value={this.state.editAmount}
                  />
                </div>
                <button type="submit">Submit</button>
              </form>
              <p class="text-warning" id='errormsg'></p> 
              </div>
              )
            }else{
              return(
                 
                <div className="product-preview" key={product.id}>
                  <h3>{ product.name }</h3>
                  <h6>Description : { product.description }</h6>
                  <p>Amount : { product.amount }</p>
                  <div className='flex-box-2'>
                  <button onClick={() => this.handleEdit(product)}>Edit</button>
                  <button onClick={() => this.handleDelete(product.id)}>Delete</button>
                  </div>
                </div>
              )
            }
                
          })}
        </div>
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
  )(Create);

