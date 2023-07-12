import storeItems from "../data/goods.json";
import StoreItem from "../components/StoreItem";

export function Home() {
    return (
        <div className="flex flex-col justify-center align-center w-full px-4">
            <h1 className="text-lg font-bold">Home</h1>
            <div className="flex flex-wrap shrink justify-between align-center w-full mx-auto">
                {storeItems.map((items, index) => {
                    return (
                        <div key={index} className="my-3">
                            <StoreItem {...items}/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Home;