import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { MdRemoveCircleOutline } from "react-icons/md";
import { removeItem, updateQuantity } from "../../action";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <ItemInfo>
      <li>
        <div>
          <h3>{item.title}</h3>
          <Remove
            onClick={() =>
              dispatch(
                removeItem({
                  id: item.id,
                  title: item.title,
                  price: item.price,
                })
              )
            }
          >
            <MdRemoveCircleOutline />
          </Remove>
        </div>
        <div>
          <label>Quantity</label>
          <Quantity
            type="number"
            value={item.quantity}
            onChange={(event) =>
              dispatch(updateQuantity(item, event.target.value))
            }
          />
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
