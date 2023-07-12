import { increaseCartQuantity, decreaseCartQuantity, removeFromCart } from "../store/slices/shoppingCartSlice";
import { useDispatch, useSelector } from "react-redux";
import { CartItem } from "../store/slices/shoppingCartSlice";

interface StoreItemProps {
    id: number
    name: string
    price: number
    imgUrl: string
}

export default function StoreItem( { id, name, price, imgUrl}: StoreItemProps) {
    const dispatch = useDispatch();

    const getItemQuantity = (id: number) => {
        const value: undefined | number = useSelector((state: any) => state.cart).find((item: CartItem) => item.id === id)?.quantity;
        if(value === undefined) {
            return 0
        } else { return value }
    }

    const quantity = getItemQuantity(id);

    return (
        <div className="shadow-lg my-3 col-span-1 rounded-md cursor-pointer pb-3 h-auto">
            <img src={imgUrl} alt={name} className="h-[300px] w-full rounded-tr-md rounded-tl-md" />

            <div className="flex flex-col text-center justify-center align-center px-4">
                <h3 className="font-bold font-mono text-lg">{name}</h3>

                <p className="text-sm font-medium mt-3">{`$${price}`}</p>

                <div>
                    {
                        quantity !== 0
                            ? (
                                <div className="flex flex-col align-center justify-center">
                                    <div className="flex justify-center align-center">
                                        <button className="text-lg text-white bg-blue-500 py-2 px-3" onClick={() => dispatch(decreaseCartQuantity(id))}>-</button>
                                        <p className="text-lg border-2 border-gray-200 py-2 px-3">{`${quantity} in Cart`}</p>
                                        <button className="text-lg text-white bg-blue-500 py-2 px-3" onClick={() => dispatch(increaseCartQuantity(id))}>+</button>
                                    </div>

                                    <button className="bg-red-600 rounded p-3 mt-3 w-full" onClick={() => dispatch(removeFromCart(id))}> - Remove from Cart</button>
                                </div>
                            ) 
                            : (<button 
                                onClick={() => dispatch(increaseCartQuantity(id))}
                                className="w-full bg-blue-500 rounded p-3 mt-3"
                            >
                               + Add to cart
                            </button>)
                    } 
                </div>
            </div>
        </div>
    )
}