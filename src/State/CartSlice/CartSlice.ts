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
      state.products.push(action.payload);
      localStorage.setItem(
        "listProductsInCart",
        JSON.stringify(state.products)
      );
    },
  },
});

export const { addToCart } = listProductsInCartSlice.actions;
export default listProductsInCartSlice.reducer;
export type { ListProductsInCart };
