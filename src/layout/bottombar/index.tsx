import { links } from "@/constants/menu";
import { NavLink } from "react-router-dom";

const BottomBar = () => {
    return (
        <div className="fixed bottom-0 left-0 z-50 w-full h-16 border-t bg-background sm:hidden">
            <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
                {links
                    .filter(
                        (menuItem) =>
                            menuItem.name !== "Liked Videos" &&
                            menuItem.name !== "My Content"
                    )
                    .map((menuItem) => (
                        <NavLink
                            to={menuItem.link}
                            className={({ isActive }) =>
                                `inline-flex flex-col items-center justify-center px-5 hover:bg-gray-100 dark:hover:bg-gray-800 group ${isActive ? "bg-gray-100 dark:bg-gray-800" : ""}`
                            }
                            key={menuItem.link}
                        >
                            {menuItem.icon}
                            <span className="text-sm ">{menuItem.name}</span>
                        </NavLink>
                    ))}
            </div>
        </div>
    );

};

export default BottomBar;
