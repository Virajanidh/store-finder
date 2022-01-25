import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchProduct, setLoading } from '../../actions/searchActions';

import Spinner from '../layout/Spinner';

export class Product extends Component {
  componentDidMount() {
    this.props.fetchProduct(this.props.match.params.id);
    this.props.setLoading();
  }
  render() {
    const { loading, product } = this.props;
    let newitem =''
    if (product["products"] !== undefined)
        for (let item of product["products"]) {
          newitem =item
        }    
    console.log("1 item:", product["products"]);
    let productInfo = (
      <div className="container">
        <div className="row">
          <div className="col-md-4 card card-body">
            <img src={product.Poster} className="thumbnail" alt="Poster" />
          </div>
          <div className="col-md-8">

            <ul className="list-group">
              <li className="list-group-item">
                <strong>name:</strong> {newitem.name}
              </li>
              <li className="list-group-item">
                <strong>Description:</strong> {newitem.description}
              </li>
              <li className="list-group-item">
                <strong>Available amount:</strong> {newitem.amount}
              </li>
              
            </ul>
          </div>
        </div>

        <div className="row">
          <div className="card card-body bg-dark my-5 text-light">
            <div className="col-md-12">
              <Link to="/" className="btn btn-secondary">
                Go Back To Search
              </Link>
            </div>
          </div>
        </div>

      </div>
    );

    let content = loading ? <Spinner /> : productInfo;
    return <div>{content}</div>;
  }
}

const mapStateToProps = state => ({
  loading: state.products.loading,
  product: state.products.product
});

export default connect(
  mapStateToProps,
  { fetchProduct, setLoading }
)(Product);
