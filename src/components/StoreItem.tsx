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

    return (
        <div className="shadow-lg my-3 col-span-1 rounded-md cursor-pointer pb-3 h-[450px]">
            <img src={imgUrl} alt={name} className="h-[300px] w-full rounded-tr-md rounded-tl-md" />

            <div className="flex flex-col text-center justify-center align-center px-4">
                <h3 className="font-bold font-mono text-lg">{name}</h3>

                <p className="text-sm font-medium mt-3">{`$${price}`}</p>

                <div>
                    {
                        getItemQuantity(id) !== 0
                            ? (
                                <p>added</p>
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