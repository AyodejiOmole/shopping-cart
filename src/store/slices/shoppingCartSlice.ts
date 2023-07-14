import { createSlice } from '@reduxjs/toolkit';

export type CartItem = {
    id: number
    quantity: number
}

const gotten = localStorage.getItem("cartItems");
const items: CartItem[] | [] = gotten != null ? JSON.parse(gotten) : [];

const setLocalStorage = (items: CartItem[]) => {
    localStorage.setItem("cartItems", JSON.stringify(items));
}

export const shoppingCartSlice = createSlice({
    name: 'cart',
    initialState: items,
    reducers: {
        increaseCartQuantity: (state: CartItem[], action) => {
            const id  = action.payload; 
            if (state.find(item => item.id === id) == null) {
                setLocalStorage([...state, { id, quantity: 1 }]);
                return [...state, { id, quantity: 1 }];
            } else {
                setLocalStorage(
                    state.map(item => {
                        if (item.id === id) {
                            return { ...item, quantity: item.quantity + 1 }
                        } else {
                            return item;
                        }
                    })
                );
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
            const id = action.payload;
            if(state.find(item => item.id === id) == null) {
                setLocalStorage([...state]);
                return [...state];
            } else {
                setLocalStorage(
                    state.map(item => {
                        if(item.id === id) {
                            return {...item, quantity: item.quantity - 1}
                        } else return item;
                    })
                );
                return state.map(item => {
                    if(item.id === id) {
                        return {...item, quantity: item.quantity - 1}
                    } else return item;
                })
            }
        },
        removeFromCart: (state: CartItem[], action) => {
            const id  = action.payload;
            setLocalStorage(state.filter(item => item.id !== id));
            return state.filter(item => item.id !== id)
        }
    },
})

export const { increaseCartQuantity, decreaseCartQuantity, removeFromCart } = shoppingCartSlice.actions

// export const selectCount = (state) => state.counter.value

export default shoppingCartSlice.reducer;
