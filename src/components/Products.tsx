/* eslint-disable @typescript-eslint/no-misused-promises */
import { Form } from "./Form";
import { useProduct } from "@hooks";
import { StoreContext } from "@store";
import { IProduct } from "./Product";
import { CreateProduct } from "@service";
import { ProductRow } from "./rows/ProductRow";
import { useContext, useState } from "react";
export const Products = (): JSX.Element => {
    const [result, error, loading] = useProduct();
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
    const { state } = useContext(StoreContext);
    if (!state.role || !state.token || state.role !== "admin" || error) throw new Error("");
    const handleSubmit = async (data: IProduct) => {
        console.log(data);
        try {
            if (data) {
                await CreateProduct(data, state.token);
            }
        } catch (error) {
            console.log(error);
        }
    }

    return <>
        <button className="absolute top-8 right-36 text-x text-white bg-blue-400" onClick={() => setIsOpenModal(true)}>Add Product</button>
        {
            isOpenModal &&
            <>
                <div className="z-20 fixed h-[500px] w-[450px] bg-white top-1/2 left-1/2 p-20 -ml-[225px] -mt-[250px]" >
                    <Form<IProduct>
                        setData={() => { }}
                        onSubmit={handleSubmit}
                        setShowModal={setIsOpenModal}
                        inactive={false}
                        data={{
                            id: "123",
                            name: "",
                            description: "",
                            price: 0,
                            stock: 0,
                        }}
                        ignoredFields={["id"]}
                        includeIgnoredFields={true}
                        button={"Save Changes"}
                    />
                </div>
                <div className="mt-0 w-screen h-screen fixed bg-gray-300 opacity-75 top-0 z-10 justify-center items-center left-0">
                </div>
            </>
        }
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