import React, { Component } from 'react';

import { connect } from 'react-redux';

import ProductCard from './ProductCard';

export class ProductsContainer extends Component {
  render() {
    const { products } = this.props;
    console.log("products: ",products["products"]);
    console.log("product length: ", products);
   // let content = '';

/*

    content = products.Response === true
        ? products.Search.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))
        : null; */

      const content = [];
      if (products["products"] !== undefined)
        for (let item of products["products"]) {
          const row = (
            <ProductCard  product={item} />
          );
          content.push(row);
        }

    return <div className="row"><h1>{content}</h1></div>;

  }
}

const mapStateToProps = state => ({
  products: state.products.products
});

export default connect(mapStateToProps)(ProductsContainer);
