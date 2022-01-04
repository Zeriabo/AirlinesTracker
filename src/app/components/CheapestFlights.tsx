import { useEffect, useState } from 'react'
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
const showHideDistanceRoutes= useAppSelector((state)=>state.showHideCheapest.showHide);
const cheapestRoutesData = new Promise((resolve, reject) => {

  setTimeout(function() {
    resolve(data);
   
  // console.log(data.data.BER)
  }, 2000);

});

var arr=[];

useEffect(() => {

  fetchCheapestRoutes();
});
function fetchCheapestRoutes()
{
  
    cheapestRoutesData.then(
      function(result)
    {

     var anotherArr = [];
    if(typeof(result.data)!='undefined'){
      var obj = result.data.BER;
  
     
    
         Object.values(obj).map((e) => ( (e!=null)?
          arr.push(e):arr.push(e) ));
console.log(arr)
for(var i =0; i < arr.length; i++){
  var obju= JSON.parse(JSON.stringify(arr[i]));
  obju.departure_at=new Date(obju.departure_at);
  obju.expires_at= new Date(obju.expires_at);
  obju.return_at= new Date(obju.return_at)

  anotherArr.push(obju)
 }
 
 console.log(anotherArr)
      dispatch(fill(anotherArr))
    }
  
    }); 

 
  
  }
  
  




  return (
    
    <div className="App">
      <header className="App-header">
    

        <div className="routes">
    
    </div> 
    <div>
    <div className="ag-theme-alpine" style={{height: 400, width: 1200}}>
           <AgGridReact
               rowData={cheapestFlights}>
               <AgGridColumn field="airline"></AgGridColumn>
               <AgGridColumn field="departure_at" resizable={true}></AgGridColumn>
               <AgGridColumn field="return_at" resizable={true}></AgGridColumn>
               <AgGridColumn field="price"></AgGridColumn>
               <AgGridColumn field="expires_at" resizable={true}></AgGridColumn>
               <AgGridColumn field="flight_number"></AgGridColumn>
           </AgGridReact>
       </div>
    </div>
      
      </header>
    </div>
  )
}

export default CheapestFlights
