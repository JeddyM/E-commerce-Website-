import React from "react";
import "./Product.css";


function Product({ title, price, rating, image, id }) {
  //const [{ basket }, dispatch] = useStateValue();

  /*const addToBasket = () => {
    //console.log('you clicked the basket')
    //dispatch item to data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };*/
  return (
    <div className="product">
      <div className="product_info">
        <p>{title} </p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button >Add to Basket</button>
    </div>
  );
}

export default Product;
