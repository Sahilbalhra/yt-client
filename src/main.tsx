import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./layout";
import { ThemeProvider } from "@/context/theme-provider";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/home";
import LikedVideos from "./pages/likedVideos";
import History from "./pages/history";
import MyContent from "./pages/myContent";
import Collection from "./pages/collection";
import Subscribers from "./pages/subscribers";
import Support from "./pages/support";
import Settings from "./pages/settings";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/likedVideos",
                element: <LikedVideos />,
            },
            {
                path: "/history",
                element: <History />,
            },
            {
                path: "/myContent",
                element: <MyContent />,
            },
            {
                path: "/collection",
                element: <Collection />,
            },
            {
                path: "/subscribers",
                element: <Subscribers />,
            },
            {
                path: "/support",
                element: <Support />,
            },
            {
                path: "/setting",
                element: <Settings />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ThemeProvider storageKey="vite-ui-theme">
            <RouterProvider router={router}></RouterProvider>
        </ThemeProvider>
    </React.StrictMode>
);
