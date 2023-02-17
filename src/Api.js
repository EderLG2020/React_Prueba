import React, { Component } from "react";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
  }

  render() {
    const productList = this.state.products.map((product) => (
      <li key={product.id}>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <p>Category: {product.category}</p>
        <img src={product.image} alt={product.title} height={300} />
      </li>
    ));

    return (
      <div>
        <h1>Product List</h1>
        <ul>{productList}</ul>
      </div>
    );
  }
}

export default ProductList;
