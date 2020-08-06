export const addItem = (item) => ({
  type: "ADD_ITEM",
  item,
});

export const removeItem = (item) => {
  return {
    type: "REMOVE_ITEM",
    item,
  };
};

export const updateQuantity = (item, quantity) => {
  return {
    type: "UPDATE_QUANTITY",
    item,
    quantity,
  };
};
