import { Sidebar } from "./SideBar"
import { Outlet } from "react-router-dom"

export const Layout: React.FC = () => {
    return <div className="flex  ml-80"><Sidebar /> <Outlet /></div>
}