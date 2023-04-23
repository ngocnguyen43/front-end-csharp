import { StoreContext } from "@store"
import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom";
interface IRequired {
    roles: string[]
}
export const RequiredAuth = (props: IRequired) => {
    const { roles } = props;
    const { state } = useContext(StoreContext);
    if (roles.includes(state.role)) {
        return <Outlet />
    } else {
        return <Navigate to="/error" />
    }
}