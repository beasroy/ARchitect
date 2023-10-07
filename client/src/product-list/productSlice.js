import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchAllProducts,fetchProductsByFilters,fetchLocations, fetchProductById, fetchPriceRanges, fetchBhk, fetchSqft } from './productAPI.js';

const initialState = {
  products: [],
   priceranges:[],
   locations:[],
   bhk:[],
   sqft:[],
   status: 'idle',
   
  // totalItems:0,
  selectedProduct:null
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const fetchAllProductsAsync = createAsyncThunk(
  'product/fetchAllProducts',
  async () => {
    const response = await fetchAllProducts();
    console.log("FROM THUNK", response.products);
    // The value we return becomes the `fulfilled` action payload
    return response.products;
  }
);

export const fetchProductByIdAsync = createAsyncThunk(
  'product/fetchProductById',
  async (id) => {
  
    const response = await fetchProductById(id);
    // The value we return becomes the `fulfilled` action payload
    console.log("Getting Clicked Product", response.data.product)
    return response.data.product;
  }
);

export const fetchProductsByFiltersAsync = createAsyncThunk(
  'product/fetchProductsByFilters',
  async (filter) => {
    const response = await fetchProductsByFilters(filter);
    // The value we return becomes the `fulfilled` action payload
    console.log("FROM THUNK FILTER", response.data)
    return response.data.products;
  }
);

export const fetchPriceRangesAsync = createAsyncThunk(
  'product/fetchPriceRanges',
  async () => {
    const response = await fetchPriceRanges();
    console.log(response.data)
    // The value we return becomes the `fulfilled` action payload
    return response.data.priceranges;
  }
);

export const fetchLocationsAsync = createAsyncThunk(
  'product/fetchLocations',
  async () => {
    const response = await fetchLocations();
    console.log(response.data)
    // The value we return becomes the `fulfilled` action payload
    return response.data.locations;
  }
);
export const fetchBhksAsync = createAsyncThunk(
  'product/fetchBhk',
  async () => {
    const response = await fetchBhk();
    console.log(response.data)
    // The value we return becomes the `fulfilled` action payload
    return response.data.bhk;
  }
);
export const fetchSqftAsync = createAsyncThunk(
  'product/fetchSqft',
  async () => {
    const response = await fetchSqft();
    console.log(response.data)
    // The value we return becomes the `fulfilled` action payload
    return response.data.sqft;
  }
);

// export const incrementAsync = createAsyncThunk(
//   'product/fetchCount',
//   async (amount) => {
//     const response = await fetchCount(amount);
//     // The value we return becomes the `fulfilled` action payload
//     return response.data;
//   }
// );




export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProductsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllProductsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        console.log("FROM REDUCERS", action.payload);
        state.products = action.payload;
        console.log(state.products)
      })
      .addCase(fetchProductsByFiltersAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductsByFiltersAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.products = action.payload;
      })
      .addCase(fetchPriceRangesAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPriceRangesAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.priceranges = action.payload;
      })
      .addCase(fetchLocationsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchLocationsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.locations = action.payload;
      })
      .addCase(fetchBhksAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBhksAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.bhk = action.payload;
      })
      .addCase(fetchSqftAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSqftAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.sqft = action.payload;
      })
      .addCase(fetchProductByIdAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductByIdAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.selectedProduct = action.payload;
        
      })
      // .addCase(incrementAsync.pending, (state) => {
      //   state.status = 'loading';
      // })
      // .addCase(incrementAsync.fulfilled, (state, action) => {
      //   state.status = 'idle';
      //   state.value += action.payload;
      // });
  },
});

export const { incrementByAmount } = productSlice.actions;

export const selectAllProducts = (state) => state.product.products;

// export const selectTotalItems = (state) => state.product.totalItems;

 export const selectPriceRanges = (state) => state.product.priceranges;

 export const selectLocations = (state) => state.product.locations;

 export const selectBhk = (state) => state.product.bhk;

 export const selectSqft = (state) => state.product.sqft;

 export const selectProductById = (state) => state.product.selectedProduct;




export default productSlice.reducer;
