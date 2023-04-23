import { useContext, useState } from 'react';
import { StoreContext } from "@store";
import { IoCloseSharp } from "react-icons/io5"

interface ICard {
    setIsShowCard: (value: boolean) => void
}
export const Card = (props: ICard): JSX.Element => {
    const { state, dispatch } = useContext(StoreContext)
    const [isShowUp, setIsShowUp] = useState(false)
    const { setIsShowCard } = props;
    const hanldeOnClick = () => {
        setIsShowCard(false)
    }
    return <>
        <>
            <div className={"bg-slate-700 w-96 h-full  right-0 top-0  px-4 fixed flex  duration-300 transform  transition-all ease-linear " + (isShowUp ? "translate-x-0 animate-fade-left animate-duration-300 animate-linear-in " : "translate-x-full ")}>
                <IoCloseSharp className="absolute left-0 text-4xl text-white cursor-pointer" onClick={hanldeOnClick} />
                <span className='relative top-10 left-1/2 -ml-10 text-4xl text-white'>Card</span>
                {
                    state.products.length > 0 &&
                    state.products.map((items, index) => {
                        return <div key={index}>{JSON.stringify(items)}</div>
                    })
                }
                <span className='absolute bottom-48 text-2xl text-white'>Total: {(state.products && state.products.length > 0) ? state.products.reduce((items, object) => { return items + object.price }, 0) : "0"} &#x24;</span>
                <button className='h-12 absolute bottom-32 w-1/2 left-1/2 -ml-20 bg-gray-500'>Check out</button>
            </div>
        </>


    </>
}