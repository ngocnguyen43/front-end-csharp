import { IUser } from "@hooks"

export const UserRow = (props: IUser & { index: number }): JSX.Element => {
    const { id, fullname, email, role, index } = props;
    return <tr>
        <td>{index}</td>
        <td>{fullname}</td>
        <td>{email}</td>
        <td>{role}</td>
        <td >
            <button className="text-xs bg-blue-400 text-white mr-4">Update</button>
            <button className="text-xs bg-blue-400 text-white mr-4">Delete</button>
        </td>
    </tr>
}