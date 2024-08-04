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

interface ListProducts {
  products: Product[];
  product: Product;
}

type Action = {
  payload: Product;
  type: string;
};

const getStoredProduct: string | null = localStorage?.getItem("product");
const storedProduct: Product | null = getStoredProduct
  ? JSON.parse(getStoredProduct)
  : null;

const initialState: ListProducts = {
  products: [],
  product: {
    id: storedProduct?.id || 0,
    title: storedProduct?.title || "",
    price: storedProduct?.price || 0,
    description: storedProduct?.description || "",
    category: storedProduct?.category || "",
    image: storedProduct?.image || "",
    rating: storedProduct?.rating || {
      rate: 0,
      count: 0,
    },
  },
};

const listProductsSlice = createSlice({
  name: "listProducts",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setSingleProduct: (state, action: Action) => {
      localStorage.setItem("product", JSON.stringify(action.payload));
      state.product = action.payload;
    },
  },
});

export const { setProducts, setSingleProduct } = listProductsSlice.actions;
export default listProductsSlice.reducer;
export type { ListProducts };
