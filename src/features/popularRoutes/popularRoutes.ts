import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const POPULAR_ROUTES_API='3ccae3d365edad3e37550fd4e9ccf723';

interface routes{
    data:String;
    distance:Number;

}

export const routesApi=  createApi({
    reducerPath:'api',
    baseQuery: fetchBaseQuery({
        baseUrl:'https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v1/',
        prepareHeaders(headers){
            headers.set("x-rapidapi-key", "2ae24f89d4msh8fe55883d381789p137364jsn056ab45850ac");
            headers.set("X-Access-Token","3ccae3d365edad3e37550fd4e9ccf723");
            return headers;
        }
    }),
    endpoints(builder){
        return{
        fetchRoutes: builder.query<routes[], number|void> ({
            query(limit=100){

                return `/airline-directions?airline_code=ME`;
            },
        }),
    }
}
});
export const cheapestTickets=  createApi({
    reducerPath:'cheapestapi',
    baseQuery: fetchBaseQuery({
        baseUrl:'https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com',
        prepareHeaders(headers){
            headers.set("x-rapidapi-key", "2ae24f89d4msh8fe55883d381789p137364jsn056ab45850ac");
            headers.set("X-Access-Token","3ccae3d365edad3e37550fd4e9ccf723");
            headers.set("x-rapidapi-host","travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com")
          
            return headers;
        }
    }),
    endpoints(builder){
        return{
        fetchCheapestRoutes: builder.query<routes[], number|void> ({
            query(limit=100){
                return `/v1/prices/cheap?origin=HEL&page=None&currency=EUR&destination=BER`;
            },
        }),
    }
}
});


export const { useFetchRoutesQuery } = routesApi;
export const { useFetchCheapestRoutesQuery } = cheapestTickets;