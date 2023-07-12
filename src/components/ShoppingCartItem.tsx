import { CartItem } from "../store/slices/shoppingCartSlice";
import storeItems from "../data/goods.json";
import { removeFromCart } from "../store/slices/shoppingCartSlice";
import { useDispatch } from "react-redux";

// interface CartItemProps {
//     id: number,
//     quantity: number
// }

export default function({ id, quantity}: CartItem) {
    const dispatch = useDispatch();

    const item = storeItems.find(item => item.id === id);
    if(item == null) return null;

    return (
        <div className="flex justify-between align-center w-full my-3 h-[80px]">
            <div className="flex align-center">
                <img src={item?.imgUrl} alt={item?.name} className="w-1/2"/>
                <div className="my-auto mx-2">
                    <div className="flex">
                        <p className="font-semibold text-md font-mono mx-2">{item?.name}</p>
                        <p className="text-xs text-gray-400 my-auto">{`x${quantity}`}</p>
                    </div>
                    
                    <p className="font-mono text-sm text-gray-400 mx-2 my-auto">{`$${item?.price}`}</p>
                </div>
            </div>
            
            <div className="flex align-center">
                <p className="font-mono text-sm text-gray-400 mx-2 my-auto">{`$${item?.price * quantity}`}</p>
                <div className="border-2 border-gray-200 hover:border-blue-500 group text-center rounded h-1/2 text-center my-auto px-3 cursor-pointer" onClick={() => dispatch(removeFromCart(id))}>
                    <p className="flex align-center justify-center group-hover:text-blue-500 font-semibold">&times;</p>
                </div>
            </div>
        </div>
    )
}