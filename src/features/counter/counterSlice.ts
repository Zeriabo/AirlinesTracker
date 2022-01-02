//DUCKS PATTERN
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
    value: number;
}
const initialState: CounterState ={
    value: 0,
};

const counterSlice= createSlice({
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
export const {incremented}= counterSlice.actions;
export const {decrement}= counterSlice.actions;
export const {reset}= counterSlice.actions;
export const {amountAdded}= counterSlice.actions;
export default counterSlice.reducer;