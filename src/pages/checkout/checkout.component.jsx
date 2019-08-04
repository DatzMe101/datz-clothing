import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectedCartItemsTotal
} from "../../redux/cart/cart.selectors";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import "./checkout.styles.scss";
import StripeCheckoutButton from "./../../components/stripe-button/stripe-button.component";

const CheckoutPage = ({ cartItems, cartItemsTotal }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map(item => (
        <CheckoutItem cartItem={item} />
      ))}
      <div className="total">
        <span>TOTAL: ${cartItemsTotal}</span>
      </div>
      <div className="test-warning">
        <div>*Please use the following test credit card for payments*</div>
        <div>Account Number : 4242 4242 4242 4242</div>
        <div>Exp : 01/20</div>
        <div>CVV : 123</div>
      </div>
      <StripeCheckoutButton price={cartItemsTotal} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartItemsTotal: selectedCartItemsTotal
});

export default connect(mapStateToProps)(CheckoutPage);
