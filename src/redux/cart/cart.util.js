export const addItemToCart = (cartItems = [], itemsToAdd) => {
  const existingItem = cartItems.find(item => item.id === itemsToAdd.id);
  if (!existingItem) return [...cartItems, { ...itemsToAdd, quantity: 1 }];
  return cartItems.map(item =>
    item.id === itemsToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
  );
};

export const removeItemFromCart = (cartItems = [], itemToRemove) => {
  const item = cartItems.find(item => item.id === itemToRemove.id);
  if (item.quantity === 1)
    return cartItems.filter(item => item.id !== itemToRemove.id);
  return cartItems.map(item =>
    item.id === itemToRemove.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};
