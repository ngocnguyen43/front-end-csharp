import { useFetchOrders } from "@hooks"
import { OrderRow } from "./rows/OrderRow";

export const Orders = (): JSX.Element => {
    const { result, error, loading } = useFetchOrders();
    console.log(result);
    return <>
        <div className="">
            <table className="max-w-[900px] w-screen overflow-y-scroll relative transition-all duration-200 ease-out border-collapse text-left font-sans text-xl overflow-hidden">
                <thead>
                    <tr className="bg-blue-400 text-white">
                        <td>ID</td>
                        <td>UserID</td>
                        <td>Date</td>
                        <td>Total</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {/* <tr> */}
                    {result && result.length > 0 && result.map((items, index) => <OrderRow key={index} {...items} index={index + 1} />)}
                    {/* </tr> */}
                </tbody>
            </table>
            <br />
            <span className="text-4xl text-right">Total: {(result && result.length > 0) ? result.reduce((count, item) => { return count + item.total }, 0) : "0"} &#36;</span>
        </div>
    </>
}