import { useContext, useMemo } from 'react';
import { ADD_PRODUCT_TO_CARD, StoreContext } from "@store";
import { ImageURL } from '@utils';
export interface IProduct {
    name: string,
    description: string,
    id: string,
    price: number,
    stock: number
}

export const Product = (props: Partial<IProduct>) => {
    const { state, dispatch } = useContext(StoreContext)
    const { name, description, id, price, stock } = props;
    const memoUrl = useMemo(() => ImageURL(), [])
    const product = {
        image: memoUrl,
        productId: id,
        productName: name,
        price: price,
        quantity: 1
    };
    const handleOnClick = () => {
        dispatch({ type: ADD_PRODUCT_TO_CARD, payload: { token: "", role: "", id: "", product: product } })
    }
    return <div>
        <div id='' className=" w-48 h-48 bg-gray-300 shadow-md rounded-md cursor-pointer group  overflow-hidden transition-all ease-linear duration-75 hover:scale-105">
            <div style={{ backgroundImage: `url("${memoUrl}")`, width: "100%", height: "100%" }}></div>
            {
                state.role === "user" &&
                <div className="z-20 absolute hidden w-48 h-48 opacity-70 bg-gray-600 group-hover:block  overflow-hidden">
                    <button className="z-20 fixed top-1/2 right-1/2 w-32 h-10 -mt-5 -mr-16  transition-all ease-linear duration-75 text-white text-xs outline-none border-none" onClick={handleOnClick}>Add To Card</button>
                </div>
            }
        </div>
        <span className="block mt-2 mb-0 text-left text-blue-400 text-lg"> <b>{name}</b></span>
        <span className="block mt-2 text-left text-blue-400">{price} &#36;</span>
    </div>
}