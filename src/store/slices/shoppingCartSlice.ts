import { createSlice } from '@reduxjs/toolkit';

export type CartItem = {
    id: number
    quantity: number
}

export const shoppingCartSlice = createSlice({
    name: 'cart',
    initialState: [ ] as CartItem[],
    reducers: {
        increaseCartQuantity: (state: CartItem[], action) => {
            const { id }  = action.payload; 
            if (state.find(item => item.id === id) == null) {
                return [...state, { id, quantity: 1 }]
            } else {
                return state.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity + 1 }
                    } else {
                        return item;
                    }
                })
            }
        },
        decreaseCartQuantity: (state: CartItem[], action) => {
            const { id } = action.payload;
            if(state.find(item => item.id === id) == null) {
                return [...state];
            } else {
                return state.map(item => {
                    if(item.id === id) {
                        return {...item, quantity: item.quantity - 1}
                    } else return item;
                })
            }
        },
        removeFromCart: (state: CartItem[], action) => {
            const { id } = action.payload;
            return state.filter(item => item.id !== id)
        }
    },
})

export const { increaseCartQuantity, decreaseCartQuantity, removeFromCart } = shoppingCartSlice.actions

// export const selectCount = (state) => state.counter.value

export default shoppingCartSlice.reducer;
