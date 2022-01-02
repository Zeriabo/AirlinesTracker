
import { useState } from 'react'
import {useAppDispatch,useAppSelector} from './app/hooks';
import {incremented,decrement,reset,amountAdded} from './features/counter/counterSlice'
import {useFetchRoutesQuery} from './features/popularRoutes/popularRoutes';
import * as ReactBootStrap from "react-bootstrap";
import './App.css'
import HomeIcon from './app/components/HomeIcon';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

function App() {
  
  const [nbRows,setNbRows] = useState(0);
  const [routes,setRoutes] = useState(new Map<String,Number>());
  const [cheapestroutes,setCheapestRoutes] = useState(new Map<String,Number>());
const count = useAppSelector((state)=> state.counter.value);
const dispatch= useAppDispatch();
 
var {data = new Map<String,Number>(), isFetching} = useFetchRoutesQuery();
//const {data = new Map<String,Number>(), isFetching} = useFetchCheapestRoutesQuery();

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
 const routesData = new Promise((resolve, reject) => {

  setTimeout(function() {
    resolve(data);
  }, 1000);

});

// const cheapestRoutesData = new Promise((resolve, reject) => {

//   setTimeout(function() {
//     resolve(data2);
//   }, 2000);

// });
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

var arr=[]



routes.forEach((key,value) =>
{var obj= new Object()
  obj.key=key;
  obj.value=value;
  arr.push(obj);
});


  return (
  
    <div className="App">
<div align='left'>
<HomeIcon  />
</div>
       
      <header className="App-header">
      
        <p>Airlines  tracker</p>
        
        <p>  count is: {count}</p>
        <p>
          <button type="button" onClick={handleIncrementClick} >
          increment
          </button>
          <br /> 
          <button type="button" onClick={handleDecrementClick} >
            decrement
          </button>
         
          <br /> 
          <button type="button" onClick={ handleAmountAdded} >
            added by 5
          </button>
          <br />
          <button type="button" onClick={handleResetClick} >
            reset
          </button>
          <button type="button" onClick={fetchData} >
         routesApi
          </button>
          
        </p>
  
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

export default App
