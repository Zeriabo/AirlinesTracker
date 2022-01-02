import { useState } from 'react'
import {useAppDispatch,useAppSelector} from './app/hooks';
import {incremented,decrement,reset,amountAdded} from  './features/counter/counterSlice'
import {useFetchRoutesQuery} from './features/popularRoutes';
import {useFetchCheapestRoutesQuery} from './features/popularRoutes';
import * as ReactBootStrap from "react-bootstrap";
import './App.css'
import { render } from '@testing-library/react';

function cheapesRoutes() {
  const [nbRows,setNbRows] = useState(0);
  const [routes,setRoutes] = useState(new Map<String,Number>());
  const [cheapestroutes,setCheapestRoutes] = useState(new Map<String,Number>());
const count = useAppSelector((state)=> state.counter.value);
const dispatch= useAppDispatch();
 
const {data = new Map<String,Number>(), isFetching} = useFetchRoutesQuery();
//const {data = new Map<String,Number>(), isFetching} = useFetchCheapestRoutesQuery();

 const routesData = new Promise((resolve, reject) => {

  setTimeout(function() {
    resolve(data);
  }, 2000);

});

const cheapestRoutesData = new Promise((resolve, reject) => {

  setTimeout(function() {
    resolve(data);
  }, 2000);

});
const routesSet = new Map<String,Number>();

const cheapestRoutesSet = new Map<String,Number>();

function fetchData()
{
  routesData.then( function(result)
  {

    for (const [key, value] of Object.entries(result.data)) {
  
      routesSet.set(key,value);
   //   routesSet.add(`${key}: ${value}`);
  
      
    }
    setRoutes(routesSet);
     setNbRows(routesSet.size);
    
  });
}

function fetchCheapestRoutes()
{
  cheapestRoutesData.then(
    function(result)
  {
console.log(result)
    for (const [key, value] of Object.entries(result.data)) {
     console.log(key)
      cheapestRoutesSet.set(key,value);
   //   routesSet.add(`${key}: ${value}`);
  
    }
   setCheapestRoutes(cheapestRoutesSet);
   console.log(cheapestroutes)
  }); 
  
}
function handleIncrementClick(){

 dispatch(incremented());
}
function handleDecrementClick(){
  dispatch(decrement());
}
function handleResetClick(){
  dispatch(reset());
}
function handleAmountAdded(){
  dispatch(amountAdded(5));
}

let iterator= routes.keys();
let iterator1= routes.values();
var arr=[]



routes.forEach((key,value) =>
{var obj= new Object()
  obj.key=key;
  obj.value=value;
  arr.push(obj);
});


  return (
    <div className="App">
      <header className="App-header">
    
        <p>cheapesRoutes</p>
      
        <p>
     
          <button type="button" onClick={fetchData} >
         routesApi
          </button>
        </p>
        <button type="button" onClick={fetchCheapestRoutes} >
         cheapestroutesApi
          </button>
        <p>
        Airlines Routes number : {nbRows} 
        </p>
        <div className="routes">
    
    </div> 
        
      <div>
        <ReactBootStrap.Table  striped bordered hover>
      <thead>
        <tr>
      <th>Route</th>
      <th>Distence</th>
      
        </tr>
      </thead>
      <tbody>
        {
       
       arr.map((item)=> (

        <tr>
          <td>{item.value}</td>
          <td>{item.key}</td>
        </tr>
       ))
        
      
        }
        
      </tbody>
        </ReactBootStrap.Table>
      </div>
      </header>
    </div>
  )
}

export default chea
