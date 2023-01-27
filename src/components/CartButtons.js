import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useProductsContext } from "../context/products_context";
import { useCartContext } from "../context/cart_context";
import { useUserContext } from "../context/user_context";

const CartButtons = () => {
  const { closeSidebar } = useProductsContext();
  const { total_items, clearCart } = useCartContext();
  const { loginWithRedirect, myUser, logout } = useUserContext();
  return (
    <Wrapper className="cart-btn-wrapper">
      <Link to="/cart" className="cart-btn" onClick={closeSidebar}>
        <span className="cart-container">
          <img className="cart-icon" src="/icons/cart.svg" alt="cart" />
          <span className="cart-value">{total_items}</span>
        </span>
      </Link>
      {myUser ? (
        <button
          type="button"
          className="auth-btn"
          onClick={() => {
            clearCart();
            localStorage.removeItem("user");
            logout({ returnTo: window.location.origin });
          }}
        >
          <img className="login-icon" src="/icons/login.svg" alt="login" />
        </button>
      ) : (
        <button type="button" className="auth-btn" onClick={loginWithRedirect}>
          <img className="logout-icon" src="/icons/logout.svg" alt="logout" />
        </button>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: fit-content;
  gap: 30px;

  .cart-btn {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    font-weight: 500;
    color: var(--grey800);
    letter-spacing: var(--spacing);
  }
  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
  }
  .cart-icon {
    height: 1.6rem;
    margin-left: 5px;
  }
  .cart-value {
    position: absolute;
    top: -10px;
    right: -16px;
    background: var(--primaryColor);
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.75rem;
    color: white;
    padding: 12px;
  }
  .auth-btn {
    display: flex;
    align-items: center;
    border-color: transparent;
    font-size: 1.5rem;
    font-weight: 500;
    cursor: pointer;
    color: var(--grey800);
    background: transparent;
    letter-spacing: var(--spacing);
  }
  .login-icon,
  .logout-icon {
    height: 1.6rem;
    margin-left: 5px;
  }
`;
export default CartButtons;
