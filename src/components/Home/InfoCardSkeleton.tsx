import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

import { Skeleton } from "@/components/ui/skeleton";

const InfoCardSkeleton = () => {
    return (
        <Card className="inline-flex flex-col group w-full">
            <AspectRatio ratio={16 / 9}>
                <Skeleton className="w-full h-full rounded-md object-cover" />
            </AspectRatio>
            <CardContent className="p-1 flex gap-2">
                <Skeleton className="h-9 w-11 rounded-full" />

                <div className="w-full">
                    <Skeleton className="h-8 mt-1 mb-2 w-full" />
                    <Skeleton className="h-4 my-2 w-full" />
                    <Skeleton className="h-4 my-1 w-1/2" />
                </div>
            </CardContent>
        </Card>
    );
};

export default InfoCardSkeleton;
