import { useSelector } from "react-redux";

export default function Navbar() {
    const cartCount = useSelector((state: any) => state.cart).reduce((sum: number, next: any) => sum + next.quantity, 0);
    console.log(cartCount);
    return (
        <div>
            {cartCount}
        </div>
    )
}