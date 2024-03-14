import React from "react";
import {
    Home,
    ThumbsUp,
    History,
    Video,
    SquareLibrary,
    UserRoundCheck,
} from "lucide-react";

export const links = [
    {
        name: "Home",
        link: "/",
        icon: React.createElement(Home),
    },
    {
        name: "Liked Videos",
        link: "/likedVideos",
        icon: React.createElement(ThumbsUp),
    },
    {
        name: "History",
        link: "/history",
        icon: React.createElement(History),
    },
    {
        name: "My Content",
        link: "/myContent",
        icon: React.createElement(Video),
    },
    {
        name: "Collection",
        link: "/collection",
        icon: React.createElement(SquareLibrary),
    },
    {
        name: "Subscribers",
        link: "/subscribers",
        icon: React.createElement(UserRoundCheck),
    },
] as const;
