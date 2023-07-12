import storeItems from "../data/goods.json";
import StoreItem from "../components/StoreItem";

export function Home() {
    return (
        <div className="flex flex-col justify-center align-center w-full px-4">
            <h1 className="text-lg font-bold">Home</h1>
            {/* <div className="flex flex-wrap shrink justify-between align-center w-full mx-auto"> */}
            <div className="lg:grid-cols-3 grid-cols-1 md:grid-cols-2 grid gap-2.5">
                {storeItems.map((items, index) => {
                    return (
                        <span key={index} >
                            <StoreItem {...items}/>
                        </span>
                    )
                })}
            </div>
        </div>
    )
}

export default Home;