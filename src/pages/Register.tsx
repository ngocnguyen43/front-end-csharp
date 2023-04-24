import { UserRegister } from "@service";
import { IResponse } from "@hooks";
import { useState } from "react"
import { useNavigate } from "react-router-dom";

export const Register = (): JSX.Element => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("")
    const [fullName, setFullName] = useState<string>("")
    const navigate = useNavigate();
    const handleOnClick = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        try {
            const res: IResponse = await UserRegister({ email, password, fullName });

            navigate("/home")

        } catch (exception) {
            console.log(exception)
        }
    }
    return <>
        <form>
            <div className="w-80 h-96 bg-gray-200 shadow-md rounded-md p-6 ">
                <span className="text-xl font-semibold	">Register</span>
                <label htmlFor="password" className="block text-left mt-8 text-sm">Full Name</label>
                <input id="password" type="password" className="w-full h-8 leading-8 text-xl mt-2 rounded-md focus:outline-none" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFullName(e.target.value)} />
                <label htmlFor="email" className="block text-left mt-4 text-sm">Email</label>
                <input id="email" type="text" className="w-full h-8 leading-8 text-xl mt-2 rounded-md focus:outline-none" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} />
                <label htmlFor="password" className="block text-left mt-4 text-sm">Password</label>
                <input id="password" type="password" className="w-full h-8 leading-8 text-xl mt-2 rounded-md focus:outline-none" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} />
                <button className="w-full h-12 text-white bg-blue-400 mt-4 outline-none border-none , focus:outline-none hover:scale-105 transition-all ease-linear duration-100" onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void handleOnClick(e)}>Register</button>
            </div>
        </form>
    </>
}