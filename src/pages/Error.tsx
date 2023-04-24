/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { StoreContext, USER_LOG_OUT } from "@store";
import { useContext } from 'react';
import { useNavigate } from "react-router-dom";
export const Error = (): JSX.Element => {
    const { dispatch } = useContext(StoreContext)
    const navigate = useNavigate();
    const HandleOnClick = () => {
        dispatch({ type: USER_LOG_OUT })
        navigate("/home")
    }
    return <>
        <div className="text-2xl">There was an Error <a onClick={HandleOnClick} className="text-2xl cursor-pointer font-semibold"> Click Here </a>to To Back</div>
    </>
}