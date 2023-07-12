import { useSelector } from "react-redux";
import { CartItem } from "../store/slices/shoppingCartSlice";
import { useOpenCartContext } from "../context/OpenCartContext";
import ShoppingCartItem from "./ShoppingCartItem";
import storeItems from "../data/goods.json";

export default function ShoppingCart() {
    const { isOpen, closeCart } = useOpenCartContext();
    const cartItems = useSelector((state: any) => state.cart);
    
    return (
        <div className={`w-full top-0 h-auto rounded-sm bottom-0 flex right-0 top-0 z-10 ${isOpen === true ? "absolute" : "-translate-x-full hidden"}`}>
            <div className="lg:w-2/3 md:w-1/2 h-full bg-transparent" onClick={() => closeCart()}></div>
            <div className="lg:w-1/3 md:w-1/2 w-full h-full bg-white p-3 shadow-2xl border-2 border-gray-200 rounded-lg">
                <div className="flex justify-between align-center">
                    <h3 className="text-xl font-bold">Cart</h3>
                    <h3 className="text-xl font-semibold cursor-pointer" onClick={() => closeCart()}>&times;</h3>
                </div>

                <div>
                    {cartItems.count === 0 ? <p className="text-center text-black text-lg font-bold my-auto">You have no cart items!</p> : ""}
                    {cartItems.map((item: CartItem) => (
                        <ShoppingCartItem key={item.id} {...item}/>
                    ))}
                </div>

                <div className="my-auto font-bold font-mono text-lg">
                    Total{" "}
                    {`$${
                            cartItems.reduce((total: number, cartItem: CartItem) => {
                                const item = storeItems.find(i => i.id === cartItem.id)
                                return total + (item?.price || 0) * cartItem.quantity
                            }, 0)
                        }
                    `}
                </div>
            </div>
        </div>
    )
}