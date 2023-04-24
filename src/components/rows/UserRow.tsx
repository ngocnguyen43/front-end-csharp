/* eslint-disable @typescript-eslint/no-misused-promises */
import { Form } from "@components";
import { IUser } from "@hooks"
import { DeleteUser, UpdateUser } from "@service";
import { StoreContext } from "@store";
import { useState } from 'react';
import { useContext } from 'react';

export const UserRow = (props: IUser & { index: number }): JSX.Element => {
    const { id, fullName, email, role, index } = props;
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
    const { state } = useContext(StoreContext);
    const handleSubmit = async (user: IUser & { password: string }) => {
        try {
            await UpdateUser(user, state.token)
        } catch (error) {
            console.log(error);
        }
    }
    const hanldeDelete = async (id: string) => {
        try {
            await DeleteUser(id, state.token)
        } catch (error) {
            console.log(error);

        }
    }
    return <>
        {
            isOpenModal &&
            <>
                <div className="z-20 fixed h-[500px] w-[450px] bg-white top-1/2 left-1/2 p-20 -ml-[225px] -mt-[250px]" >
                    <Form<IUser & { password: string }>
                        setData={() => { }}
                        onSubmit={handleSubmit}
                        setShowModal={setIsOpenModal}
                        inactive={false}
                        data={{
                            id: id,
                            fullName: fullName,
                            email: email,
                            password: "123456",
                            role: role,
                        }}
                        // ignoredFields={["id"]}
                        // includeIgnoredFields={true}
                        button={"Save Changes"}
                    />
                </div>
                <div className="mt-0 w-screen h-screen fixed bg-gray-300 opacity-75 top-0 z-10 justify-center items-center left-0">
                </div>
            </>
        }
        <tr>
            <td>{index}</td>
            <td>{fullName}</td>
            <td>{email}</td>
            <td>{role}</td>
            <td >
                <button className="text-xs bg-blue-400 text-white mr-4" onClick={() => setIsOpenModal(true)}>Update</button>
                <button className="text-xs bg-blue-400 text-white mr-4" onClick={() => hanldeDelete(id)}>Delete</button>
            </td>
        </tr>
    </>
}