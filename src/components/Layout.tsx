import { StoreContext } from "@store"
import { Sidebar } from "./SideBar"
import { Outlet } from "react-router-dom"
import { useContext } from 'react';

export const Layout: React.FC = () => {
    const { state } = useContext(StoreContext);
    if (state.role !== "admin") throw new Error("")
    return <div className="flex  ml-80"><Sidebar /> <Outlet /></div>
}