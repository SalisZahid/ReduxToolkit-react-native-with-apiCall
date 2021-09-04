import { createSlice } from "@reduxjs/toolkit"

const counterSlice = createSlice({
    name: "counter",
  initialState: {
    counter: 0
  },
  reducers: {

    increment(state,actions){
        state.counter+=1
    },
    decrement(state,actions){
        if(state.counter>0){
            state.counter-=1
        }
    },
    incrementBy(state,actions){
        state.counter+=actions.payload
    },
    decrementBy(state,actions){
        state.counter-=actions.payload
    }

  }
})


export const { increment,decrement,incrementBy,decrementBy } = counterSlice.actions
export default counterSlice.reducer