import TopBar from "./topbar";
import SideBar from "./sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <TopBar />
            <SideBar />
            <div className="p-4 sm:ml-64">
                <div className="p-4 mt-14">{<Outlet />}</div>
            </div>
        </>
    );
};

export default Layout;
