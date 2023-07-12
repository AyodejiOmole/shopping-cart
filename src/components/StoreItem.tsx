import { increaseCartQuantity, decreaseCartQuantity, removeFromCart } from "../store/slices/shoppingCartSlice";
import { useDispatch } from "react-redux";

interface StoreItemProps {
    id: number
    name: string
    price: number
    imgUrl: string
}

export default function StoreItem( { id, name, price, imgUrl}: StoreItemProps) {
    const dispatch = useDispatch();

    return (
        <div className="shadow-lg my-3 col-span-1 rounded-md cursor-pointer pb-3">
            <img src={imgUrl} alt={name} className="h-[300px] w-full rounded-tr-md rounded-tl-md" />

            <div className="flex flex-col text-center justify-center align-center">
                <h3 className="font-bold font-mono text-lg">{name}</h3>

                <p className="text-sm font-medium">{`$${price}`}</p>

                <button 
                    onClick={() => dispatch(increaseCartQuantity(id))}
                    className=""
                >
                    Add to cart
                </button>
            </div>
        </div>
    )
}