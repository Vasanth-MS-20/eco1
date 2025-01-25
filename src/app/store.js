import { configureStore } from "@reduxjs/toolkit";
import { productsDataApi } from "./services/productsDataApi";

export const store = configureStore({
    reducer: {
        [productsDataApi.reducerPath]: productsDataApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(productsDataApi.middleware),
})