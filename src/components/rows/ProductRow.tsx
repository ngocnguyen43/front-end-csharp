/* eslint-disable @typescript-eslint/no-misused-promises */
import { Form, IProduct } from "@components"
import { DeleteProduct, UpdateProduct } from "@service";
import { StoreContext } from "@store";
import { useContext, useState } from "react";

export const ProductRow = (props: IProduct & { index: number }): JSX.Element => {
    const { id, index, description, name, price, stock } = props;
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
    const { state } = useContext(StoreContext);
    const [data, setData] = useState<IProduct>()
    if (!state.role || !state.token || state.role !== 'admin') throw new Error('');
    const handleSubmit = async (data: IProduct) => {
        console.log(data);
        try {
            if (data) {
                await UpdateProduct(data, state.token);
            }
        } catch (error) {
            console.log(error);
        }
    }
    const handleDelete = async (id: string) => {
        try {
            await DeleteProduct(id, state.token);
        } catch (error) {
            console.log(error);
        }
    }
    return <>
        {
            isOpenModal &&
            <>
                <div className="z-20 fixed h-[500px] w-[450px] bg-white top-1/2 left-1/2 p-20 -ml-[225px] -mt-[250px]" >
                    <Form<IProduct>
                        setData={() => setData}
                        onSubmit={handleSubmit}
                        setShowModal={setIsOpenModal}
                        inactive={false}
                        data={{
                            id,
                            name,
                            description,
                            price,
                            stock
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
        <tr>
            <td>{index}</td>
            <td>{name}</td>
            <td>{description}</td>
            <td>{stock}</td>
            <td>{price}</td>
            <td >
                <button className="text-xs bg-blue-400 text-white mr-4" onClick={() => setIsOpenModal(true)}>Update</button>
                <button className="text-xs bg-blue-400 text-white mr-4" onClick={() => handleDelete(id)}>Delete</button>
            </td>
        </tr>
    </>
}