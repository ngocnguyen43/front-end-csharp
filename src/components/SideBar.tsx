/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { IoShirtOutline, IoBagCheckOutline, IoLogOutOutline, IoPeopleOutline } from "react-icons/io5";
import { IconType } from "react-icons/lib";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
// import './Sidebar.scss';
interface menuItem {
    path: string,
    name: string,
    icon: IconType
}
const menuItems: menuItem[] = [
    {
        path: "users",
        name: "USERS",
        icon: IoPeopleOutline
    },
    {
        path: "products",
        name: "PRODUCTS",
        icon: IoShirtOutline
    },
    {
        path: "orders",
        name: "ORDERS",
        icon: IoBagCheckOutline
    },
    {
        path: "logout",
        name: "LOG OUT",
        icon: IoLogOutOutline,
    },
]
export const Sidebar = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [stepHeight, setStepHeight] = useState(0);
    const sidebarRef = useRef<HTMLDivElement>(null);
    const indicatorRef = useRef<HTMLDivElement>(null);
    const location = useLocation();
    useEffect(() => {
        setTimeout(() => {
            const sidebarItem = sidebarRef.current?.querySelector('.sidebar-menu-item');
            if (indicatorRef.current && sidebarItem) {
                indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`
            }
            if (typeof (sidebarItem?.clientHeight) === 'number')
                setStepHeight(sidebarItem.clientHeight);
        }, 50);
    }, []);

    // change active index
    useEffect(() => {
        const curPath = window.location.pathname.split('/')[1];
        const activeItem = menuItems.findIndex(item => item.path === curPath);
        setActiveIndex(curPath.length === 0 ? 0 : activeItem);
    }, [location]);

    return <div className='fixed top-0 left-0 h-full w-80 bg-slate-100'>
        <div className="grid place-items-center	h-32 text-2xl font-bold font-sans">
            <a href="/users"> Management</a>
        </div>
        <div ref={sidebarRef} className="relative">
            {/* <div
                ref={indicatorRef}
                className="absolute top-0 left-1/2 w-[calc(100%-40px)] bg-blue-400 rounded-lg transform -translate-x-1/2 transition-all duration-300 ease-in-out  -z-10"
                style={{
                    transform: `translateX(-50%) translateY(${activeIndex * stepHeight}px)`
                }}
            >

            </div> */}
            {
                menuItems.map((item, index) => (
                    <Link to={item.path} key={index}>
                        <div className={`flex items-center py-4 px-12 font-medium transform transition-colors duration-300 ease-in-out` /**${activeIndex === index ? ' text-white' : ''}**/} style={activeIndex === index ? { color: "#4c4fff" } : {}}>
                            <div className="mr-4" style={{ display: "flex" }}>
                                {<item.icon style={{ fontWeight: "bolder", fontSize: "1.5rem" }} />}
                            </div>
                            <div className="sidebar-menu-item-text">
                                {item.name}
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
    </div>;
};

