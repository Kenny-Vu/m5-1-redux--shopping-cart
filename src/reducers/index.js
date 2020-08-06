const initialState = {};

export default function cartReducer(state = initialState, action) {
  console.log(action);
  console.log(state);
  const stateCopy = { ...state };
  switch (action.type) {
    case "ADD_ITEM": {
      if (stateCopy[`${action.item.id}`]) {
        const itemQuantity = stateCopy[`${action.item.id}`].quantity;
        return {
          ...state,
          [action.item.id]: {
            ...action.item,
            quantity: itemQuantity + 1,
          },
        };
      } else {
        return {
          ...state,
          [action.item.id]: {
            ...action.item,
            quantity: 1,
          },
        };
      }
    }
    case "REMOVE_ITEM": {
      delete stateCopy[`${action.item.id}`];
      return {
        ...stateCopy,
      };
    }
    case "UPDATE_QUANTITY": {
      const newPrice = action.item.price * action.quantity;
      return {
        ...state,
        [action.item.id]: {
          ...action.item,
          price: newPrice,
          quantity: action.quantity,
        },
      };
    }
    default:
      return state;
  }
}

export const getStoreItemArray = (state) => Object.values(state);

export const getCartTotal = (stateArray) => {
  let total = 0;
  stateArray.forEach((item) => (total += item.price));
  return total;
};

export const getItemTotalAmount = (stateArray) => {
  let total = 0;
  stateArray.forEach((item) => {
    total += Number(item.quantity);
  });
  return total;
};
