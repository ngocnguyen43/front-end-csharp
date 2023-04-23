import { Form } from "@components";
import { IOrderResponse } from "@service"
import { ConvertDate } from "@utils";
import { useFetchOneOrder } from "@hooks";
import { useState } from "react";

export const OrderRow = (props: IOrderResponse & { index: number }): JSX.Element => {
    const { userId, orderId, total, date, index } = props;
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
    const { result, error, loading } = useFetchOneOrder(orderId);
    // console.log(result ? result[0].product.map((items,index)=>{name:items.name, }));

    const hanldeSubmit = () => {
    }
    return (
        <>
            {
                isOpenModal &&
                <>
                    <div className="z-20 fixed h-[500px] w-[450px] bg-white top-1/2 left-1/2 p-20 -ml-[225px] -mt-[250px]" >
                        <Form
                            setData={() => { }}
                            onSubmit={hanldeSubmit}
                            setShowModal={setIsOpenModal}
                            inactive={true}
                            data={{
                                userId: result ? result[0].userId : "",
                                orderId: result ? result[0].orderId : "",
                                products: result ? result[0].product.length : 0,
                                total: result ? result[0].total : 0,
                                date: result ? ConvertDate(result[0].date) : ""
                            }}
                            ignoredFields={["userId"]}
                            button={"OK"}
                        />
                    </div>
                    <div className="mt-0 w-screen h-screen fixed bg-gray-300 opacity-75 top-0 z-10 justify-center items-center left-0">
                    </div>
                </>
            }
            <tr>
                <td>{index}</td>
                <td>{userId}</td>
                <td>{ConvertDate(date)}</td>
                <td>{total}</td>
                <td>
                    <button className="text-xs bg-blue-400 text-white mr-4" onClick={() => setIsOpenModal(true)}>Details</button>
                </td>
            </tr>
        </>
    )
}