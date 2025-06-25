import React, { Component } from "react";
import "../components/components.css";
import { Outlet, useNavigate } from "react-router-dom";

class ProductsList extends Component {
  state = {
    products: [],
    loading : true,
    error: null,
  };

  componentDidMount() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        if (!res) {
          throw new Error("Failed to fetch products");
        }
        return res.json();
      })
      .then((data) => this.setState({ products: data,loading : false }))
      .catch((error) => this.setState({ error: error.message,loading : false }));
  }

  handleNavigation = (item) => {
    console.log("ell - product details ", item);
    this.props.navigate(`/product/${item.id}`, { state: { item } });
    // this.props.navigate("/")
  };

  render() {
    const { products, loading, error } = this.state;

    if (loading)
      return <h1> Loding.... </h1>

    if (error) return <p className="products-error">Error: {error}</p>;

    return (
      <div className="products-container">
        <h1 className="products-heading">Product List</h1>
        <div className="products-grid">
          {products.map((product) => (
            <div
              key={product.id}
              className="products-card"
              onClick={() => this.handleNavigation(product)}
              style={{ cursor: "pointer" }}
            >
              <img
                src={product.image}
                alt={product.title}
                className="products-image"
              />
              <h3 className="products-title">{product.title}</h3>
              <p className="products-category">{product.category}</p>
              <p className="products-description">{product.description}</p>
              <p className="products-price">${product.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
        <Outlet />
      </div>
    );
  }
}

function ProductsListHooks(props) {
  const navigate = useNavigate();

  return <ProductsList {...props} navigate={navigate} />;
}

export default ProductsListHooks;
