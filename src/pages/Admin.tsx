import { StoreContext } from "@store"
import { useContext } from "react"

export const Admin = (): JSX.Element => {
    const { state } = useContext(StoreContext);
    // if (!state.role) throw new Error("Invalid")
    return <>ADMIN</>
}