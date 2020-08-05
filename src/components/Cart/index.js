import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

//import from local files
import { getStoreItemArray } from "../../reducers";
import CartItem from "./CartItem";

const Cart = () => {
  const storeItems = useSelector(getStoreItemArray);

  return (
    <Sidebar>
      <h2>Your Cart</h2>
      <span>1 item</span>
      {storeItems.map((item) => {
        return <CartItem item={item} />;
      })}
      <Total>Total: 0$</Total>
      <Purchase>Purchase</Purchase>
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

const Total = styled.span`
  margin: 0.5rem 0;
`;

export default Cart;
