import React from "react";
import styled from "styled-components";
import { MdRemoveCircleOutline } from "react-icons/md";

const Cart = () => {
  return (
    <Sidebar>
      <h2>Your Cart</h2>
      <span>1 item</span>
      <ShoppingCart>
        <li>
          <div>
            <h3>Quack!</h3>
            <Remove>
              <MdRemoveCircleOutline />
            </Remove>
          </div>
          <div>
            <label>Quantity</label>
            <Quantity type="number" />
          </div>
        </li>
      </ShoppingCart>
      <Total>Total: $12.34</Total>
      <Purchase onClick={() => console.log("quack!")}>Purchase</Purchase>
    </Sidebar>
  );
};

const Sidebar = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: purple;
  color: white;
  padding: 2rem;
`;
const Purchase = styled.button`
  height: 40px;
  width: 120px;
  padding: 0.5rem;
  font-size: 1rem;
  color: white;
  background-color: red;
  border-radius: 10px;
  border: none;
`;
const ShoppingCart = styled.ul`
  padding: 0;
  li {
    list-style: none;
    background: transparent;
    border: dashed grey;
  }
  li h3 {
    padding-left: 0.5rem;
  }
  li div:first-child {
    display: flex;
    justify-content: space-between;
    padding: 0;
  }
  li div:last-child {
    display: flex;
    background-color: #431c53;
    height: 60px;
    align-items: center;
    padding-left: 0.5rem;
  }
  li label {
    margin-right: 0.5rem;
  }
`;
const Quantity = styled.input`
  width: 50px;
  height: 30px;
`;
const Total = styled.span`
  margin: 0.5rem 0;
`;
const Remove = styled.button`
  background: transparent;
  color: white;
  padding: 0.5rem;
  font-size: 1.25rem;
  border: none;
  margin-right: 1rem;
`;
export default Cart;
