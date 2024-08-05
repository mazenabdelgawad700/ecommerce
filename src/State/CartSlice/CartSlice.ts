import { createSlice } from "@reduxjs/toolkit";

interface Rating {
  rate: number;
  count: number;
}

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
  quantity: number;
}

interface ListProductsInCart {
  products: Product[];
}

const cartProductsFromLocalStorage = localStorage.getItem("listProductsInCart");
const parsedCartProductsFromLocalStorage = cartProductsFromLocalStorage
  ? JSON.parse(cartProductsFromLocalStorage)
  : null;
const initialState: ListProductsInCart = {
  products: parsedCartProductsFromLocalStorage || [],
};

const listProductsInCartSlice = createSlice({
  name: "ListProductsInCart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const findedProduct = state.products.find(
        (product) => action.payload.id === product.id
      );

      if (findedProduct) {
        findedProduct.quantity++;
        localStorage.setItem(
          "listProductsInCart",
          JSON.stringify(state.products)
        );
      } else {
        const productClone = { ...action.payload, quantity: 1 };
        state.products.push(productClone);
        localStorage.setItem(
          "listProductsInCart",
          JSON.stringify(state.products)
        );
      }
    },
    removeFromCart: (state, action) => {
      const findedProduct = state.products.find(
        (product) => action.payload.id === product.id
      );

      if (findedProduct && findedProduct.quantity > 1) {
        findedProduct.quantity--;
        return;
      }

      state.products.splice(state.products.indexOf(action.payload), 1);
    },
    clearCart: (state) => {
      state.products = [];
      localStorage.removeItem("listProductsInCart");
    },
  },
});

export const { addToCart, removeFromCart, clearCart } =
  listProductsInCartSlice.actions;
export default listProductsInCartSlice.reducer;
export type { ListProductsInCart };
