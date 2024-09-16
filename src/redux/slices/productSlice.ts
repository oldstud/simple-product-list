import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface Product {
  id: number;
  name: string;
  price: number;
}

interface ProductState {
  products: Product[];
}

const initialState: ProductState = {
  products: [],
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload);
    },
    deleteProduct: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter(
        product => product.id !== action.payload,
      );
    },
  },
});

export const {addProduct, deleteProduct} = productSlice.actions;
export default productSlice.reducer;
