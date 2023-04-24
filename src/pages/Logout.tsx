import { StoreContext, USER_LOG_OUT } from "@store";

import { useContext } from 'react';
import { Navigate, useNavigate } from "react-router-dom";
export const Logout = () => {
    const { dispatch } = useContext(StoreContext);
    const navigate = useNavigate();
    dispatch({ type: USER_LOG_OUT })
    return <Navigate to={"/home"} />
}