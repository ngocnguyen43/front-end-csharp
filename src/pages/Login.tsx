import { UserLogin } from "@service";
import { StoreContext, USER_LOG_IN } from "@store";
import { IResponse } from "@hooks";
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom";
import { Form } from "@components";

export const Login = (): JSX.Element => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("")
    const { dispatch } = useContext(StoreContext);


    const [test, setTest] = useState(true);
    const hanldeSubmit = () => {

    }
    const navigate = useNavigate();
    const handleOnClick = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        try {
            const res: IResponse & { body: { role: string, id: string, accessToken: string } } = await UserLogin({ email, password });
            if (res) {
                const { id, accessToken, role } = res.body;
                dispatch({ type: USER_LOG_IN, payload: { id: id, token: accessToken, role: role } })
                if (role === "user") {
                    navigate("/home")
                }
                if (role === "admin") {
                    navigate("/users")
                }
            }
        } catch (exception) {
            console.log(exception)
        }
    }
    return <>
        <form>

            <div className="w-80 h-96 bg-gray-200 shadow-md rounded-md p-6 ">
                <span className="text-xl font-semibold	">Login</span>
                <label htmlFor="email" className="block text-left mt-10 text-sm">Email</label>
                <input id="email" type="text" className="w-full h-8 leading-8 text-xl mt-2 rounded-md focus:outline-none" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} />
                <label htmlFor="password" className="block text-left mt-4 text-sm">Password</label>
                <input id="password" type="password" className="w-full h-8 leading-8 text-xl mt-2 rounded-md focus:outline-none" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} />
                <button className="w-full h-12 text-white bg-blue-400 mt-8 outline-none border-none , focus:outline-none hover:scale-105 transition-all ease-linear duration-100" onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void handleOnClick(e)}>Login</button>
            </div>
        </form>
        {/* <Form onSubmit={hanldeSubmit} setShowModal={setTest} data={{ email, password }} button={"OK"} /> */}
    </>
}