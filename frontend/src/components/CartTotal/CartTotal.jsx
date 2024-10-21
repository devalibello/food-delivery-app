import React, { useContext } from "react";
import './CartTotal.css'
import { StoreContext } from "../../context/StoreContext";

const CartTotal = ({payment, goToPayment}) => {
    const { getTotalAmount } = useContext(StoreContext)

  return (
    <div className="cart-buttom">
      <h2>Cart Total</h2>
      <div className="cart-total-section">
        <div className="cart-total-cal">
          <p>Subtotal:</p>
          <p className="grand-total">${getTotalAmount()}</p>
        </div>
        <hr />
        <div className="cart-total-cal">
          <p>Delivery Fee:</p>
          <p className="grand-total">${getTotalAmount() ? 50 : 0}</p>
        </div>
        <hr />
        <div className="cart-total-cal">
          <p>Grand Total:</p>
          <p className="grand-total">
            ${getTotalAmount() ? getTotalAmount() + 50 : 0}
          </p>
        </div>
      </div>
      <button onClick={() => goToPayment()} className="checkout-btn">
        {payment}
      </button>
    </div>

  );
};

export default CartTotal;
