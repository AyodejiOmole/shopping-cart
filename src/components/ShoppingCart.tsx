import { increaseCartQuantity, decreaseCartQuantity, removeFromCart } from "../store/slices/shoppingCartSlice";
import { useDispatch, useSelector } from "react-redux";
import { CartItem } from "../store/slices/shoppingCartSlice";
import { useState } from "react";
import { useOpenCartContext } from "../context/OpenCartContext";

export default function ShoppingCart() {
    const { isOpen, closeCart } = useOpenCartContext();
    
    return (
        <div className={`w-full top-0 h-auto rounded-sm bottom-0 flex right-0 top-0 z-10 ${isOpen === true ? "absolute" : "-translate-x-full hidden"}`}>
            <div className="lg:w-2/3 h-full bg-transparent" onClick={() => closeCart()}></div>
            <div className="lg:w-1/3 w-full h-full bg-white p-3 shadow-2xl border-2 border-gray-200 rounded-lg">
                <div className="flex justify-between align-center">
                    <h3 className="text-xl font-bold">Cart</h3>
                    <h3 className="text-xl font-semibold cursor-pointer" onClick={() => closeCart()}>x</h3>
                </div>
            </div>
        </div>
    )
}