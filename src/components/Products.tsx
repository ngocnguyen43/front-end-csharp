import { useProduct } from "@hooks";
import { ProductRow } from "./rows/ProductRow";
import { useContext } from "react";
import { StoreContext } from "@store";

export const Products = (): JSX.Element => {
    const [result, error, loading] = useProduct();
    const { state } = useContext(StoreContext);
    if (!state.role || !state.token || state.role !== "admin" || error) throw new Error("");
    return <>
        <button className="absolute top-8 right-36 text-x text-white bg-blue-400">Add Product</button>
        <table className="max-w-[900px] w-screen overflow-y-scroll  transition-all duration-200 ease-out border-collapse text-left font-sans text-xl overflow-hidden">
            <thead>
                <tr className="bg-blue-400 text-white">
                    <td>ID</td>
                    <td>Product Name</td>
                    <td>Description</td>
                    <td>Stock</td>
                    <td>Price</td>
                    <td>Action</td>
                </tr>
            </thead>
            <tbody>
                {result && result.length > 0 && result.map((items, index) => <ProductRow key={index} {...items} index={index + 1} />)}
            </tbody>
        </table></>
}