//DUCKS PATTERN
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FlightState {
    value: number;
}
const initialState: FlightState ={
    value: 0,
};

const counteSlice= createSlice({
    name : 'flightNumbers',
    initialState,
    reducers:{
        //increment
        setTotalNumber(num){
          num.value=100;
        }
    
    }

});
export const {setTotalNumber}= counteSlice.actions;

export default counteSlice.reducer;