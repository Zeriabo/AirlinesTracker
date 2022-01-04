import { useState } from 'react'
import {useAppDispatch,useAppSelector} from '../../app/hooks';
import {incremented,decrement,reset,amountAdded} from '../../features/counter/counterSlice'
import {useFetchRoutesQuery} from '../../features/popularRoutes/popularRoutes';
import {useFetchCheapestRoutesQuery} from '../../features/popularRoutes/popularRoutes';
import * as ReactBootStrap from "react-bootstrap";
import {empty, fill} from '../../features/cheapestRoutes/cheapestSlice';
//import cheapestFlightsSlice from '../../features/cheapestRoutes/cheapestSlice';


export function CheapestFlights() {
  const cheapestArray = useAppSelector((state)=> state.cheapestFlights.cheapest);

const dispatch= useAppDispatch();
 
const {data = new Array(), isFetching} = useFetchCheapestRoutesQuery();


var entry = {};


const cheapestRoutesData = new Promise((resolve, reject) => {

  setTimeout(function() {
    resolve(data);
   
  // console.log(data.data.BER)
  }, 2000);

});



var arr=[]
function fetchCheapestRoutes()
{
  
  cheapestRoutesData.then(
    function(result)
  {
    arr=result.data.BER;
console.log
    dispatch(fill(arr))


  }); 
  
}



  return (
    
    <div className="App">
      <header className="App-header">
    
        <p>Airlines  tracker</p>
       
        <p>
  
          <button type="button" onClick={fetchCheapestRoutes} >
         cheapestroutesApi
          </button>
        </p>
  
        <p>
      
        </p>
        <div className="routes">
    
    </div> 
    
      <div>
        <ReactBootStrap.Table  striped bordered hover>
      <thead>
        <tr>
      <th>airline</th>
      <th>DepartureAt </th>
      <th>ReturnAt</th>
      <th>price</th>
      <th>expiresAt</th>
      <th>flightnumber</th>
      
        </tr>
      </thead>
      <tbody>
      {
    <>
    {/* <td>{cheapestArray.BER[0].airline}</td>
    <td>{cheapestArray.BER[0].departure_at}</td>
    <td>{cheapestArray.BER[0].return_at}</td>
    <td>{cheapestArray.BER[0].price}</td>
    <td>{cheapestArray.BER[0].expires_at}</td>
    <td>{cheapestArray.BER[0].flight_number}</td>
   */}
    </>
  
   }
      
      </tbody>
        </ReactBootStrap.Table>
      </div>
      </header>
    </div>
  )
}

export default CheapestFlights
