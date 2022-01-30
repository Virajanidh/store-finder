import React, { Component } from 'react';
import './grid.css'
import { connect } from 'react-redux';
import {
 fetchOnDistrict
} from '../../actions/searchActions';
import ProductCard from './ProductCard';

export class ProductsContainer extends Component {
  render() {
    const { products } = this.props;
    console.log("products: ",products["information"]);
    console.log("product : ", products);
   // let content = '';

/*

    content = products.Response === true
        ? products.Search.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))
        : null; */

      const content = [];
      if (products["information"] !== undefined)
        for (let item of products["information"]) {
          const row = (
            <ProductCard  product={item} />
          );
          content.push(row);
        }
      if(content.length===0 && this.props.text !='' && this.props.isUserIn){
        this.props.fetchOnDistrict(this.props.searchdistrict,this.props.searchname)
        return(
          <div>
          <div class="alert alert-dismissible alert-success" style={{maxWidth:'40rem'}}>
          <strong>Ooops Sorry!...  </strong>No match found. <p >See you next time!!</p>
          </div>
          </div>
        )
      }
      
    return ( <div>
          <p class="text-warning" id='errormsg'></p> 
    <div className="alert alert-dismissible alert-light">{content}</div>
    </div>
    );

  }
}

const mapStateToProps = state => ({
  products: state.products.products,
  text : state.products.text,
  isUserIn :state.products.isUserIn,
  searchdistrict : state.products.searchdistrict,
  searchname : state.products.searchname
});

export default connect(mapStateToProps,
  {fetchOnDistrict})(ProductsContainer);
