import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const productsDataApi = createApi({
    reducerPath : 'cloth products',
    baseQuery : fetchBaseQuery({ baseUrl : 'https://fakestoreapi.com/'}),
    endpoints : (builder) => ({

        getAllProducts : builder.query({
            query : ()=> `products`
        }),

        getProduct : builder.query({
            query : (id)=> `products/${id}`
        })

    })
})

export const { useGetAllProductsQuery, useGetProductQuery } = productsDataApi