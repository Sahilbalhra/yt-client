import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Circle } from "lucide-react";

type TInfoCard = {
    variant?: string;
};

const InfoCard: React.FC<TInfoCard> = ({ variant = "vertical" }) => {
    return (
        <Card
            className={`${variant === "vertical" ? "inline-flex flex-col" : "flex"} group w-full overflow-hidden`}
        >
            <div>
                <img
                    src="data:image/jpeg;base64,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"
                    alt="Image"
                    className="rounded-md object-cover w-full h-full"
                />
            </div>
            {variant === "vertical" ? (
                <CardContent className="p-1 flex gap-2">
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div>
                        <h6 className="scroll-m-20 text-md font-semibold tracking-tight">
                            How to learn react | A React Roadmap
                        </h6>
                        <p className="text-sm mt-1 flex items-center">
                            100k Views &nbsp;&nbsp;
                            <Circle size={8} fill="" />
                            &nbsp;&nbsp; 18 hours ago
                        </p>
                        <p className="text-sm mt-1 mb-2">Yash Mittal</p>
                    </div>
                </CardContent>
            ) : (
                <CardContent className="p-1">
                    <h6 className="scroll-m-20 text-md font-semibold tracking-tight">
                        How to learn react | A React Roadmap
                    </h6>
                    <p className="text-sm mt-2 flex items-center">
                        100k Views &nbsp;&nbsp;
                        <Circle size={8} fill="" />
                        &nbsp;&nbsp; 18 hours ago
                    </p>
                    <div className="flex gap-2 items-center mt-3">
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <h6 className="text-sm mt-1 mb-2 font-medium">
                            Yash Mittal
                        </h6>
                    </div>
                </CardContent>
            )}
        </Card>
    );
};

export default InfoCard;
