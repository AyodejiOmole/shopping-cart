import { useSelector } from "react-redux";

const linkStyle = "text-sm font-bold hover:text-blue-600 font-mono leading-loose cursor-pointer";

export default function Navbar() {
    const cartCount = useSelector((state: any) => state.cart).reduce((sum: number, next: any) => sum + next.quantity, 0);
    // console.log(cartCount);

    return (
        <div className="flex justify-between justify-center text-center align-center flex-col md:flex-row lg:flex-row border-2 border-gray-200 px-3 py-6 sticky lg:p-6">
            <div className="flex justify-between align-center lg:w-1/3 md:w-1/3 w-full">
                <p className={linkStyle}>Home</p>
                <p className={linkStyle}>Store</p>
                <p className={linkStyle}>About</p>
            </div>

            <p className="mt-4 md:mt-0 lg:mt-0">{cartCount}</p>
        </div>
    )
}