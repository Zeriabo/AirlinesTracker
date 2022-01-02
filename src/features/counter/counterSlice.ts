//DUCKS PATTERN
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
    value: number;
}
const initialState: CounterState ={
    value: 0,
};

const counteSlice= createSlice({
    name : 'counter',
    initialState,
    reducers:{
        //increment
        incremented(state){
          state.value++;
        },
        //decrement
        decrement(state){
            state.value--;
          },
        //reset
        reset(state){
            state.value=0;
          },

          amountAdded(state, action : PayloadAction<number>)
          {
              state.value+= action.payload;
          }
    }

});
export const {incremented}= counteSlice.actions;
export const {decrement}= counteSlice.actions;
export const {reset}= counteSlice.actions;
export const {amountAdded}= counteSlice.actions;
export default counteSlice.reducer;