import { ModeToggle } from "@/components/modeToggle";
import { Link } from "react-router-dom";
import Account from "@/components/account";
import Logo from "/MiniLogo.svg";

const TopBar = () => {
    return (
        <nav className="fixed top-0 z-50 w-full border-b  bg-background">
            <div className="px-3 py-3 lg:px-5 lg:pl-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-start rtl:justify-end">
                        <Link to="/" className="flex ms-2 md:me-24">
                            <img
                                src={Logo}
                                className="h-8 me-3"
                                alt="Play Logo"
                            />
                            <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                                Play
                            </span>
                        </Link>
                    </div>
                    <div className="flex items-center gap-3">
                        <ModeToggle />
                        <Account />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default TopBar;
