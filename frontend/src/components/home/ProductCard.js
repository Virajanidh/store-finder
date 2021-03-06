import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './grid.css';

export class ProductCard extends Component {
  render() {
    const { product } = this.props;
    console.log("product at moviecard: ",product)
  /*  return (
      <div className="col-md-3 mb-5">
        <div className="card card-body bg-dark text-center h-100">
          <img className="w-100 mb-2" 
          src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.pixabay.
          com%2Fphoto%2F2015%2F04%2F19%2F08%2F32%2Fmarguerite-729510__480.jpg&imgre
          furl=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fflower%2F&tbnid=X_BrNW
          U_72e_nM&vet=12ahUKEwi545usxMr1AhWoKbcAHa2KB8YQMygGegUIARDpAQ..i&docid=Vw3JNA
          q0NqCjLM&w=737&h=480&itg=1&q=flower%20images&ved=2ahUKEwi545usxMr1AhWoKbcAHa2KB8YQMygGegUIARDpAQ" 
          alt="Product Cover" />
          <h5 className="text-light card-title">
            {product.name} - {product.store_id}
          </h5>
          <Link className="btn btn-primary" to={'/product/' + product.id}>
            More Details
            <i className="fas fa-chevron-right" />
          </Link>
        </div>
      </div>
    ); */
    return(
     
        <div class="list-group">
          
          <h5>{product.name} at {product.store_name} </h5>
          <div className="card text-white bg-primary mb-3" style={{maxWidth: '60rem'}}>
          <a href="#" class="list-group-item list-group-item-action active">
          <h6> Address : {product.address}</h6> </a>
          <a href="#" class="list-group-item list-group-item-action">
          <h6> Description : {product.description}</h6> </a>
          <a href="#" class="list-group-item list-group-item-action disabled">
          <h6>  Amount : {product.amount}</h6> </a>
        </div>
      </div>
    
    );
  }
}

export default ProductCard;

/*
  <div className="col-md-3 mb-5">
        <div className="card card-body bg-dark text-center h-100">
        
            <h5 className="text-light card-title">
              {product.name} at - 
              
            </h5>
            <h5>{product.store_name}</h5>
            <h6>{product.address}</h6>
            <h6>description - {product.description}</h6>
            <h6> amount - {product.amount}</h6>
            <Link className="btn btn-primary" to={'/products/' + product.store_id}>
              More Details
              <i className="fas fa-chevron-right" />
            </Link>
          </div>
        </div>

*/
