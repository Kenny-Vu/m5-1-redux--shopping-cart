import React from "react";
import styled from "styled-components";
import { MdRemoveCircleOutline } from "react-icons/md";

const CartItem = ({ item }) => {
  console.log(item);
  return (
    <ItemInfo>
      <li>
        <div>
          <h3>{item.title}</h3>
          <Remove>
            <MdRemoveCircleOutline />
          </Remove>
        </div>
        <div>
          <label>Quantity</label>
          <Quantity type="number" />
        </div>
      </li>
    </ItemInfo>
  );
};

export default CartItem;

const ItemInfo = styled.ul`
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
const Remove = styled.button`
  background: transparent;
  color: white;
  padding: 0.5rem;
  font-size: 1.25rem;
  border: none;
  margin-right: 1rem;
`;
