/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useCreateOrder } from "@hooks"
import { REMOVE_PRODUCTS, StoreContext, USER_LOG_OUT } from "@store"
import { useContext, useState } from "react"
import { IoSearchSharp, IoBagHandleSharp, IoCloseSharp } from "react-icons/io5"
import { useNavigate } from "react-router-dom"
export const Header = (): JSX.Element => {
    const { state, dispatch } = useContext(StoreContext)
    const [isShowCard, setIsShowCard] = useState<boolean>(false);
    const navigate = useNavigate();
    const { execute } = useCreateOrder();
    const handleOnclick = () => {
        dispatch({ type: USER_LOG_OUT })
        navigate("/")
    }
    const handleOpenCard = () => {
        console.log(this);
        setIsShowCard(true);
    }
    const handleOrder = async () => {
        const products = state.products.map((items) => ({ productId: items.productId, quantity: items.quantity }));
        await execute({ Id: "123", userId: state.id, orderProducts: products })
        dispatch({ type: REMOVE_PRODUCTS })
    }
    return <>
        <header className="fixed w-full top-0 bg-slate-800 h-32 left-0 flex p-8 justify-around items-center">
            <a href="/" className="font-sans text-3xl text-white">LOGO</a>
            <div className="h-13 w-96 bg-slate-50 rounded-full flex overflow-hidden px-4 py-2 justify-between">
                <input type="text" placeholder="Search for products" className="bg-slate-50 text-black text-xl outline-none align-middle leading-10" />
                <span className="w-9 h-9 flex justify-center align-middle bg-blue-500 rounded-full items-center cursor-pointer"><IoSearchSharp style={{ fontSize: "1.5rem", color: "white", display: "flex" }} /></span>
            </div>
            <main className="flex">
                <div className="mr-0 w-80">
                    {
                        !state.role &&
                        <span className="text-x border-none ml-8 py-3 px-4 transition-all ease-linear duration-200 text-white cursor-pointer"><a href="/login">JOIN</a></span>
                    }
                    {
                        state.role &&
                        <div className="flex w-full justify-end ">
                            <span className="text-x border-none ml-2 py-2 px-2 transition-all ease-linear duration-200 text-white flex items-center justify-center cursor-pointer" onClick={handleOpenCard}><IoBagHandleSharp style={{ fontSize: "2.5rem" }} />
                                <div className="relative rounded-full bg-red-500 w-4 h-4 -top-2 right-3 text-xs flex items-center justify-center p-1" ><span className="text-center justify-center flex items-center">{state.products.length}</span></div>
                            </span>
                            <span className="border-none ml-2 py-2 px-2 transition-all ease-linear duration-200 text-white cursor-pointer flex items-center justify-center" onClick={handleOnclick}><button className="bg-blue-500 text-x">LOG OUT</button></span>
                        </div>
                    }
                </div>
            </main>
        </header>
        {
            isShowCard &&
            <>
                <div className={"bg-slate-700 w-96 h-full p-2  right-0 top-0  px-4 fixed  duration-300 transform  transition-all ease-linear " + (isShowCard ? "translate-x-0 animate-fade-left animate-duration-300 animate-linear-in " : "translate-x-full ")}>
                    <IoCloseSharp className="absolute left-0 text-4xl text-white cursor-pointer" onClick={() => setIsShowCard(false)} />
                    <span className='block relative top-10  -ml-10 text-4xl text-white'>Card</span>
                    <div className="mt-20">

                        {
                            state.products.length > 0 &&
                            state.products.map((items, index) => {
                                return <div key={index} className=" mt-10 flex items-center">
                                    <div id='' className="flex items-center w-24 h-24 bg-gray-300 shadow-md rounded-md cursor-pointer group  overflow-hidden transition-all ease-linear duration-75 hover:scale-105" style={{ backgroundImage: `url("${items.image}")` }}>
                                    </div>
                                    <div className="ml-4">
                                        <span className="block mt-2 mb-0 text-left text-blue-400 text-lg"> <b>name:     {items.productName}</b></span>
                                        <span className="block mt-2 text-left text-blue-400">price:     {items.price} &#36;</span>
                                        <span className="block mt-2 text-left text-blue-400">quantity: {items.quantity}</span>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                    <span className='bottom-48 fixed text-xl text-white left-1/2 -ml-10'>Total: {(state.products && state.products.length > 0) ? state.products.reduce((items, object) => { return items + object.price }, 0) : "0"} &#x24;</span>
                    <button className='h-12 absolute bottom-32 w-1/2 left-1/2 -ml-20 bg-gray-500 text-white' onClick={() => void handleOrder()}>Check out</button>
                </div>
            </>
        }
    </>
}