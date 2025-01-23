import { createSlice } from "@reduxjs/toolkit";

// Load cart from localStorage
const loadCartFromStorage = () => {
  try {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  } catch (error) {
    console.error("Failed to load cart from storage:", error);
    return [];
  }
};

const initialState = {
  items: loadCartFromStorage(),
};

const saveCartToStorage = (cartItems) => {
  try {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  } catch (error) {
    console.error("Failed to save cart:", error);
  }
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const { productId, quantity } = action.payload;

      if (isNaN(quantity) || quantity <= 0) {
        console.error("Invalid quantity: Must be a positive number");
        return;
      }

      const productIndex = state.items.findIndex(
        (item) => item.productId === productId
      );

      if (productIndex >= 0) {
        state.items[productIndex].quantity += quantity;
      } else {
        state.items.push({ productId, quantity });
      }

      saveCartToStorage(state.items); // Save to localStorage
    },
    changeQuantity(state, action) {
      const { productId, quantity } = action.payload;
      const index = state.items.findIndex((item) => item.productId === productId);

      if (index >= 0) {
        if (quantity > 0) {
          state.items[index].quantity = quantity;
        } else {
          state.items.splice(index, 1); // Remove item if quantity is 0
        }
      }

      saveCartToStorage(state.items); // Save to localStorage
    },
  },
});

export const { addToCart, changeQuantity } = cartSlice.actions;
export default cartSlice.reducer;
