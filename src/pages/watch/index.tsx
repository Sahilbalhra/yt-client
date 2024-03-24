import InfoCard from "@/components/Home/InfoCard";
import InfoCardSkeleton from "@/components/Home/InfoCardSkeleton";
import { Button } from "@/components/ui/button";
import ReactPlayer from "react-player/lazy";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    FolderPlus,
    ThumbsUp,
    ThumbsDown,
    Circle,
    UserRoundPlus,
    SendHorizontal,
} from "lucide-react";

const Watch = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="w-full md:col-span-2">
                <ReactPlayer
                    url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                    controls
                    pip
                    stopOnUnmount={false}
                    height={"360px"}
                    width={"auto"}
                    style={{ borderRadius: "0.25rem", overflow: "hidden" }}
                />
                <div className="border rounded py-1 px-2 my-2">
                    <div className="flex items-center justify-between">
                        <h6>Lex Fridman plays Red Dead Redemption 2</h6>
                        <div className="flex items-center gap-2">
                            <span className="border rounded-md flex p-2 text-sm text-center items-center">
                                <ThumbsUp size={15} />
                                &nbsp;&nbsp;0&nbsp;&nbsp;|&nbsp;&nbsp;
                                <ThumbsDown size={15} />
                                &nbsp;&nbsp;0
                            </span>
                            <Button variant={"outline"} className="text-sm">
                                <FolderPlus size={14} /> &nbsp;&nbsp;Save
                            </Button>
                        </div>
                    </div>
                    <p className="text-sm mt-1 flex items-center">
                        100k Views &nbsp;&nbsp;
                        <Circle size={8} fill="" />
                        &nbsp;&nbsp; 18 hours ago
                    </p>
                    <div className="my-2 flex justify-between ">
                        <div className="flex gap-2">
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <div>
                                <h6 className="text-md font-semibold">
                                    Lex Fridman
                                </h6>
                                <p className="text-xs">500k Followers</p>
                            </div>
                        </div>
                        <div>
                            <Button variant={"outline"} className="text-sm">
                                <UserRoundPlus size={14} /> &nbsp;&nbsp;Follow
                            </Button>
                        </div>
                    </div>
                    <hr />
                    <div className="my-2">
                        <p className="text-xs">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Nesciunt provident iusto in ratione maiores
                            culpa aperiam sequi quae eos nostrum soluta minus
                            rerum sint aliquam possimus, voluptates quis
                            voluptatum illo tempore doloremque accusantium
                            itaque fuga. Enim soluta eveniet provident deleniti!
                        </p>
                    </div>
                </div>
                <div className="border rounded py-1 px-2 my-2">
                    <h5 className="text-md font-semibold">5000 Comments</h5>
                    <form>
                        <label
                            htmlFor="comment"
                            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                        >
                            Comment
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                id="comment"
                                className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Add Comment"
                            />
                            <div className="absolute end-0 bottom-0">
                                <Button type="submit" variant={"link"}>
                                    <SendHorizontal />
                                </Button>
                            </div>
                        </div>
                    </form>
                    <hr className="my-2" />
                    <div className="flex gap-2">
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div>
                            <h6 className="text-sm font-semibold flex items-center">
                                Lex Fridman &nbsp;&nbsp;&nbsp;<p className="text-xs font-light">Just Now</p>
                            </h6>
                            <p className="text-[10px]">@asdaf</p>
                            <p className="text-xs">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum deserunt eveniet necessitatibus illo aliquam minima iure ipsa dolorem !</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full">
                <InfoCard variant="horizontal" />
                <InfoCardSkeleton variant="horizontal" />
                <InfoCard variant="horizontal" />
                <InfoCardSkeleton variant="horizontal" />
                <InfoCard variant="horizontal" />
                <InfoCardSkeleton variant="horizontal" />
                <InfoCard variant="horizontal" />
                <InfoCardSkeleton variant="horizontal" />
            </div>
        </div>
    );
};

export default Watch;
