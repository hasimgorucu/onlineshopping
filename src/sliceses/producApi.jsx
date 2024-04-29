import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productApi = createApi({ // export etmeyi unutmuyoruz
    reducerPath: "productApi",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:5000"}),
    endpoints: (builder)=>({
        getAllProducts: builder.query({
            query: ()=>"products"
        })
    })
});

export const {useGetAllProductsQuery} = productApi;