import React, { Component } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

class EachItem extends Component {
  state = {
    product: null,
  };

  componentDidMount() {
    const { location, params } = this.props;

    if (location && location.state && location.state.item) {
      this.setState({ product: location.state.item });
    } else {
      const { id } = params;

      fetch(`https://fakestoreapi.com/products/${id}`)
        .then((response) => response.json())
        .then((productData) => {
          console.log(productData);
          this.setState({ product: productData });
        })
        .catch((error) => {
          console.error("Error fetching product:", error);
        });
    }
  }

  render() {
    const { navigate, children } = this.props;
    const { product } = this.state;

    if (!product)
      return <div className="product-details-container">No product found.</div>;

    return (
      <div className="product-details-container">
        <button onClick={() => navigate(-1)} className="back-button">
          Back
        </button>
        <h1 className="product-details-title">{product.title}</h1>
        <img
          src={product.image}
          alt={product.title}
          className="product-details-image"
        />
        <p className="product-details-category">
          <strong>Category:</strong> {product.category}
        </p>
        <p className="product-details-description">{product.description}</p>
        <p className="product-details-price">
          {/* <strong>Price:</strong> ${product.price.toFixed(2)} */}
        </p>
      </div>
    );
  }
}

function EachItemHooks(props) {
  const locate = useLocation();
  const navigate = useNavigate();
  const para = useParams();

  return (
    <EachItem {...props} location={locate} navigate={navigate} params={para} />
  );
}

export default EachItemHooks;
