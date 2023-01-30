import React, { useContext } from "react";
import { Container } from "./CartStyle";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import AppContext from "../Context/Appcontext";

const Cart = () => {
  const { setShowCart } = useContext(AppContext);
  return (
    <Container>
      <div className="cart-wrapper">
        <div className="cart-container">
          <button
            type="button"
            className="cart-heading"
            onClick={() => setShowCart(false)}
          >
            <ArrowBackIcon />
            <span className="heading">Your Cart</span>
            <span className="cart-num-items">scsvsws</span>
          </button>

          {/* <div className="empty-cart">
            <ShoppingCartIcon className="emptyshopcart" />
            <h3>Your shopping bag is empty</h3>

            <button type="button" onClick="" className="btn">
              Continue Shopping
            </button>
          </div> */}

          <div className="product-container">
            <div className="product" key="">
              <img src="" className="cart-product-image" alt="" />
              <div className="item-desc">
                <div className="flex top">
                  <h5>Item name</h5>
                  <h4>₦ item price</h4>
                </div>
                <div className="flex bottom">
                  <div>
                    <p className="quantity-desc">
                      <span className="minus" onClick="">
                        <RemoveIcon />
                      </span>

                      <span className="num" onClick="">
                        Item Quantity
                      </span>

                      <span className="plus" onClick="">
                        <AddIcon />
                      </span>
                    </p>
                  </div>
                  <button className="remove-item" onClick="">
                    <DeleteIcon />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cart-bottom">
          <div className="total">
            <h3 className="subtotal">SubTotal:</h3>
            <h3 className="totalprice">₦ Total Price</h3>
          </div>
          <div className="btn-container">
            <button type="button" className="btn" onClick="">
              Pay with Paystack
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Cart;
