import { useFetchUsers } from "@hooks"
import { UserRow } from "./rows/UserRow";

export const Users = () => {
    const { result, error, loading } = useFetchUsers();
    return <>
        <button className="absolute top-8 right-36 text-x text-white bg-blue-400">Add user</button>
        <table className="max-w-[900px] w-screen overflow-y-scroll  transition-all duration-200 ease-out border-collapse text-left font-sans text-xl overflow-hidden">
            <thead>
                <tr className="bg-blue-400 text-white">
                    <td>ID</td>
                    <td>fullname</td>
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