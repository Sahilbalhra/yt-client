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
                    <form className="max-w-md w-[20rem] mx-auto">
                        <label
                            htmlFor="default-search"
                            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                        >
                            Search
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg
                                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                    />
                                </svg>
                            </div>
                            <input
                                type="search"
                                id="default-search"
                                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-background dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Search ..."
                            />
                        </div>
                    </form>
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
