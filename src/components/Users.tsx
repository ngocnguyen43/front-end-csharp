/* eslint-disable @typescript-eslint/no-misused-promises */
import { IUser, useFetchUsers } from "@hooks"
import { UserRow } from "./rows/UserRow";
import { useState } from "react";
import { Form } from "./Form";
import { CreateUser } from "@service";
import { useContext } from 'react';
import { StoreContext } from "@store";

export const Users = () => {
    const { result, error, loading } = useFetchUsers();
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const { state } = useContext(StoreContext);
    console.log(result);

    const hanldeSubmit = async (user: IUser & { password: string }) => {
        try {
            await CreateUser(user, state.token)
        } catch (error) {
            console.log(error);
        }
    }
    return <>
        {
            isModalOpen && <>
                <div className="z-20 fixed h-[500px] w-[450px] bg-white top-1/2 left-1/2 p-20 -ml-[225px] -mt-[250px]" >
                    <Form<IUser & { password: string }>
                        setData={() => { }}
                        onSubmit={hanldeSubmit}
                        setShowModal={setIsModalOpen}
                        inactive={false}
                        data={{
                            id: "123",
                            email: "",
                            fullName: "",
                            password: "",
                            role: "ABC"
                        }}
                        ignoredFields={["id"]}
                        includeIgnoredFields={true}
                        button={"Add"}
                    />
                </div>
                <div className="mt-0 w-screen h-screen fixed bg-gray-300 opacity-75 top-0 z-10 justify-center items-center left-0">
                </div>
            </>
        }
        <button className="absolute top-8 right-36 text-x text-white bg-blue-400" onClick={() => setIsModalOpen(true)}>Add user</button>
        <table className="max-w-[900px] w-screen overflow-y-scroll  transition-all duration-200 ease-out border-collapse text-left font-sans text-xl overflow-hidden">
            <thead>
                <tr className="bg-blue-400 text-white">
                    <td>ID</td>
                    <td>full name</td>
                    <td>email</td>
                    <td>role</td>
                    <td>aaction</td>
                </tr>
            </thead>
            <tbody>
                {/* <tr> */}
                {result && result.length > 0 && result.map((items, index) => <UserRow key={index} {...items} index={index + 1} />)}
                {/* </tr> */}
            </tbody>
        </table>
    </>
}