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
        <div className="shadow-lg w-full lg:w-auto rounded-md pb-3">
            <img src={imgUrl} alt={name} className="lg:h-[200px] lg:w-[200px] w-full rounded-tr-md rounded-tl-md"/>

            <div className="flex flex-col text-center justify-center align-center">
                <h3>{name}</h3>

                <p>{price}</p>

                <button onClick={() => dispatch(increaseCartQuantity(id))}>Add to cart</button>
            </div>
        </div>
    )
}