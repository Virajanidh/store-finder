import React, { Component } from 'react';
import './grid.css'
import { connect } from 'react-redux';

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
      
    return ( <div>
      
    
    <div className="alert alert-dismissible alert-light">{content}</div>
    </div>
    );

  }
}

const mapStateToProps = state => ({
  products: state.products.products
});

export default connect(mapStateToProps)(ProductsContainer);
