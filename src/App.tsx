
import { useState } from 'react'
import {useAppDispatch,useAppSelector} from './app/hooks';
import {incremented,decrement,reset,amountAdded} from './features/counter/counterSlice'
import {useFetchRoutesQuery} from './features/popularRoutes/popularRoutes';
import * as ReactBootStrap from "react-bootstrap";
import './App.css'
import HomeIcon from './app/components/HomeIcon';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Box, Grid } from '@mui/material';
import Button from '@mui/material/Button';
import CheapestFlights from './app/components/CheapestFlights';
import { setFalse, setOpposite, setTrue } from './features/showHideComponents/showHideRoutesDistanceSlice';
import { useSelector } from 'react-redux';
import { empty } from './features/cheapestRoutes/cheapestSlice';

function App() {
  const showHide= useAppSelector((state)=> state.showHideCheapest.showHide);
  const[showRoutesDistance,setShowRoutesDistance]= useState(false);
  const [nbRows,setNbRows] = useState(0);
  const [routes,setRoutes] = useState(new Map<String,Number>());
  const [cheapestroutes,setCheapestRoutes] = useState(new Map<String,Number>());
const count = useAppSelector((state)=> state.counter.value);
const showHideDistanceRoutes= useAppSelector((state)=>state.showHideCheapest.showHide);
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
function fetchCheapestBeirutFlights()
{ 
  dispatch(setOpposite());

  if(showHideDistanceRoutes){
    

 
  
  //need to check the documentation again
  document.getElementById("cheapestFlights").innerHTML="show cheapest flights to berlin"
  }else{

    dispatch(empty())
  document.getElementById("cheapestFlights").innerHTML="Hide cheapest flights to berlin"
  }
 //console.log(showRoutesDistance)
}
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


// function handleIncrementClick(){

//  dispatch(incremented());
// }
// function handleDecrementClick(){
//   dispatch(decrement());
// }
// function handleResetClick(){
//   dispatch(reset());
// }
// function handleAmountAdded(){
//   dispatch(amountAdded(5));
// }

var arr=[]



routes.forEach((key,value) =>
{var obj= new Object()
  obj.key=key;
  obj.value=value;
  arr.push(obj);
});


  return (
    <Grid   container 
    direction="column"
    justifyContent="center"
    alignItems="center">
    <div className="App" >
    <Box gridColumn="span 8">
    <Item><HomeIcon  /></Item>
  </Box>

</div>
       
      <header className="App-header">
      
        <p>Airlines  tracker</p>
        
        {/* <p>  count is: {count}</p>
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
          </button> */}
          <Button variant="contained" onClick={fetchData} >
         find routes distance for Finair
          </Button>
          <Button id="cheapestFlights" variant="contained" onClick={fetchCheapestBeirutFlights} >
         show cheapest flights to Berlin
          </Button>
        
  
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
      <th>Distance</th>
      
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
     <div>
     { showHideDistanceRoutes && (<CheapestFlights />) }
     </div>
     
</Grid>
  )
}

export default App
