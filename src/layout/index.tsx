import TopBar from "./topbar";
import SideBar from "./sidebar";
import { Outlet } from "react-router-dom";
import BottomBar from "./bottombar";

const Layout = () => {
    return (
        <>
            <TopBar />
            <SideBar />
            <div className="p-4 mt-14 sm:ml-64  mb-10 sm:mb-0">
                {<Outlet />}
            </div>
            <BottomBar />
        </>
    );
};

export default Layout;
