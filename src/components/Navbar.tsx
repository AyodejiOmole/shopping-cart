import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useOpenCartContext } from "../context/OpenCartContext";

const linkStyle = "text-sm font-bold hover:text-blue-600 font-mono leading-loose cursor-pointer";

export default function Navbar() {
    const cartCount = useSelector((state: any) => state.cart).reduce((sum: number, next: any) => sum + next.quantity, 0);
    const { openCart } = useOpenCartContext();

    return (
        <div className="flex justify-between justify-center shadow-sm mb-3 text-center align-center flex-col md:flex-row lg:flex-row border-2 border-gray-200 px-3 py-6 sticky lg:p-6">
            <div className="flex justify-between align-center lg:mt-2 md:mt-2 lg:w-1/3 md:w-1/3 w-full">
                <Link to="/">
                    <p className={linkStyle}>Home</p>
                </Link>
                
                <Link to="/store">
                    <p className={linkStyle}>Store</p>
                </Link>
                
                <Link to="/about">
                    <p className={linkStyle}>About</p>
                </Link>
                
            </div>

            <div onClick={() => openCart()} className="relative cursor-pointer border-2 mt-4 lg:mt-0 md:mt-0 group p-3 border-black-200 rounded mx-auto lg:mx-0 md:mx-0">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    fill="currentColor"
                    className="w-4 h-4 group-hover:fill-blue-500"
                >
                    <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
                </svg>

                <div className="bg-black absolute bottom-0 top-7 left-6 w-4 h-4 rounded-xl flex justify-center align-center">
                    <p className="text-xs text-white">{cartCount}</p>
                </div>
            </div>
        </div>
    )
}