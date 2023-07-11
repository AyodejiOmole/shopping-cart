import { createSlice } from '@reduxjs/toolkit'

export const shoppingCartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        // increment: (state) => {
        // //   state.value += 1
        //     state.push(23)
        // },
        // decrement: (state: {value: number}) => {
        //     state.value -= 1
        // },
        // incrementByAmount: (state: {value: number}, action) => {
        //     state.value += action.payload
        // },
    },
})

// export const { increment, decrement, incrementByAmount } = shoppingCartSlice.actions

// export const selectCount = (state) => state.counter.value

export default shoppingCartSlice.reducer;
