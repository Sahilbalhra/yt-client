import { links } from "@/constants/menu";
import { NavLink } from "react-router-dom";

const SideBar = () => {
    return (
        <aside
            id="logo-sidebar"
            className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-background  border-r sm:translate-x-0 "
            aria-label="Sidebar"
        >
            <div className="h-full px-3 pb-4 overflow-y-auto bg-background">
                <ul className="space-y-2 font-medium">
                    {links.map((menuItem) => (
                        <li key={menuItem.link}>
                            <NavLink
                                to={menuItem.link}
                                className={({ isActive }) =>
                                    `flex items-center p-2 text-gray-900 rounded-lg dark:text-white ${isActive ? "bg-gray-100 dark:bg-gray-700" : ""} hover:bg-gray-100 dark:hover:bg-gray-700 group`
                                }
                            >
                                {menuItem.icon}
                                <span className="ms-3">{menuItem.name}</span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    );
};

export default SideBar;
