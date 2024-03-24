import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

type TInfoCardSkeleton = {
    variant?: string;
};

const InfoCardSkeleton: React.FC<TInfoCardSkeleton> = ({
    variant = "vertical",
}) => {
    console.log("variant", variant);
    return (
        <Card
            className={`${variant === "vertical" ? "inline-flex flex-col" : "flex"}  w-full mt-1 overflow-hidden`}
        >
            <div
                className={`${variant === "vertical" ? "h-[11rem]" : "h-[11rem] w-[26rem]"}`}
            >
                <Skeleton className="w-full h-full rounded-md" />
            </div>
            {variant === "vertical" ? (
                <CardContent className={`flex gap-2 p-1 w-full`}>
                    <div>
                        <Skeleton className="h-[2.5rem] w-[2.5rem] rounded-full" />
                    </div>
                    <div className="w-full">
                        <Skeleton className="h-8 mt-1 mb-2 w-full" />
                        <Skeleton className="h-4 my-2 w-full" />
                        <Skeleton className="h-4 my-1 w-1/2" />
                    </div>
                </CardContent>
            ) : (
                <CardContent className={`p-1 w-full h-full`}>
                    <div className="w-full">
                        <Skeleton className="h-8 mt-1 mb-2 w-full" />
                        <div className="flex gap-2">
                            <Skeleton className="h-4 my-2 w-1/2" />
                            <Skeleton className="h-4 my-2 w-1/2" />
                        </div>
                        <div className="flex gap-2 items-center">
                            <Skeleton className="h-[3rem] w-[3rem] rounded-full" />
                            <Skeleton className="h-9 my-1 w-1/2" />
                        </div>
                    </div>
                </CardContent>
            )}
        </Card>
    );
};

export default InfoCardSkeleton;
