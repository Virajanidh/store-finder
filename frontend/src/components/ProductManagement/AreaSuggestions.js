import axios from "axios"
import React, { Component } from "react";
import { connect } from 'react-redux';
import Test from './Test';

export class AreaSuggestions extends Component{
     
    constructor(props){
        super(props)
        this.state = { productsList:[] }
      }

    fetchPreferences = async () =>{
        const baseUrl ="http://localhost:5000"
        const store_id_id = this.props.data.id
        console.log(store_id_id)
        const data = await axios.get(`${baseUrl}/preferences/${store_id_id}`)
        console.log(data);
        const {products} = data.data
        console.log({products});
        this.setState({productsList:products})
    }

    componentDidMount() {
        this.fetchPreferences()
    }

    render(){
        if(this.props.isSuccessfullregister||this.props.isloggedin){
        return ( 
            <div className="home" >
            <div className="product-list">
                <h5>User prefences of the area!</h5>

                <table class="table table-hover"  style={{maxWidth:"40rem"}}>
                    <thead>
                    <tr className="table-success">
                    <th scope="row">Preffered Product</th>
                    <td>Area</td>
                    <td>Date</td>
                    </tr></thead>
                
                {this.state.productsList.map(product => (
                    


                   <tbody>
                    <tr class="table-primary">
                    <th scope="row">{ product.preference }</th>
                    <td>{ product.district }</td>
                    <td> { product.created_at }</td>
                    
                    </tr>
                    </tbody>
                    
                                
                    
                ))}
                </table> 
                
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
    )(AreaSuggestions);