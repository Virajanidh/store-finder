import axios from "axios"
import React, { Component } from "react";

export class AreaSuggestions extends Component{
     
    constructor(props){
        super(props)
        this.state = { productsList:[] }
      }
    //const [productsList ,SetPreList] = useState([]);

    fetchPreferences = async () =>{
        const baseUrl ="http://localhost:5000"
        const store_id_id = 6
        const data = await axios.get(`${baseUrl}/preferences/${store_id_id}`)
        console.log(data);
        const {products} = data.data
        console.log({products});
        this.setState({productsList:products})
        //SetPreList(products);
    }

    componentDidMount() {
        this.fetchPreferences()
    }

    render(){

        return ( 
            <div className="home">
            <div className="product-list">
                <h2>User prefences of the area!</h2>
                {this.state.productsList.map(product => (
                    <div className="product-preview" key={product.id}>
                        <h2>{ product.preference }</h2>
                        <p>Area : { product.district }</p>
                        <p>Date : { product.created_at }</p>
                    </div>
                ))}
            </div>
            </div>
        );
     }
}
 
export default AreaSuggestions;