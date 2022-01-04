import { useState } from 'react'
import {useAppDispatch,useAppSelector} from '../../app/hooks';
import {incremented,decrement,reset,amountAdded} from '../../features/counter/counterSlice'
import {useFetchRoutesQuery} from '../../features/popularRoutes/popularRoutes';
import {useFetchCheapestRoutesQuery} from '../../features/popularRoutes/popularRoutes';
import * as ReactBootStrap from "react-bootstrap";
import {empty, fill} from '../../features/cheapestRoutes/cheapestSlice';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
//import cheapestFlightsSlice from '../../features/cheapestRoutes/cheapestSlice';


export function CheapestFlights() {
  const cheapestArray = useAppSelector((state)=> state.cheapestFlights.cheapest);

const dispatch= useAppDispatch();
 
const {data = new Array(), isFetching} = useFetchCheapestRoutesQuery();


var entry = {};
const cheapestFlights = useAppSelector((state)=> state.cheapestFlights.cheapest);

const cheapestRoutesData = new Promise((resolve, reject) => {

  setTimeout(function() {
    resolve(data);
   
  // console.log(data.data.BER)
  }, 2000);

});


const rowData = [
  {airline: "U2",
  departure_at: Date("2022-02-04T20:55:00+02:00"),
  expires_at: "2022-01-04T16:21:52Z",
  flight_number: 5734,
  price: 53,
  return_at: "2022-02-06T08:00:00+01:00"},
  {airline: "Ford", model: "Mondeo", price: 32000},
  {airline: "Porsche", model: "Boxter", price: 72000}
];
var arr=[]
function fetchCheapestRoutes()
{
  
  cheapestRoutesData.then(
    function(result)
  {
    var arr=[];
    var obj = result.data.BER;
    console.log(obj)
   // const arrayOFCheapest = Object.entries(obj).map((e) => ( arr.push(e) ));
   'use strict';

       Object.values(obj).map((e) => (
        arr.push(e) ));
console.log(arr)
    dispatch(fill(arr))


  }); 
  
}



  return (
    
    <div className="App">
      <header className="App-header">
    
      
       
        <p>
  
          <button type="button" onClick={fetchCheapestRoutes} >
         Get the cheapest flights
          </button>
        </p>
  
        <p>
      
        </p>
        <div className="routes">
    
    </div> 
    <div>
    <div className="ag-theme-alpine" style={{height: 400, width: 1200}}>
           <AgGridReact
               rowData={cheapestFlights}>
               <AgGridColumn field="airline"></AgGridColumn>
               <AgGridColumn field="departure_at"></AgGridColumn>
               <AgGridColumn field="return_at"></AgGridColumn>
               <AgGridColumn field="price"></AgGridColumn>
               <AgGridColumn field="expires_at"></AgGridColumn>
               <AgGridColumn field="flight_number"></AgGridColumn>
           </AgGridReact>
       </div>
    </div>
      
      </header>
    </div>
  )
}

export default CheapestFlights
