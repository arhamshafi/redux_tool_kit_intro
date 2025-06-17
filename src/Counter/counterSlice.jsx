// src/features/counter/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0
};

// Redux Toolkit ka createSlice function import karte hain — is se:
// State define hoti hai
// Actions automatic ban jaate hain
// Reducer bhi generate hota hai

////////////////////////////////////////

// Flow:
// App start hoti hai
// Redux store create hota hai
// initialState use hota hai as starting value
// Jab increment() action dispatch hota hai:
// state me already { value: 0 } hota hai
// Wo function run hota hai: state.value += 1 (to ab value 1 ho jati hai)

///////////////////////////////////////////////////////

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    }
  }
});



// So tum jab component me likhte ho:

// dispatch(increment());
// To Redux samajh jaata hai ke:

// "OK, is bande ne increment action bheja hai, ab counterSlice ke reducer ko chalao."


export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
