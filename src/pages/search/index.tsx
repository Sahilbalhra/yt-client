import InfoCard from "@/components/Home/InfoCard";
import InfoCardSkeleton from "@/components/Home/InfoCardSkeleton";

const SearchValue = () => {
    return (
        <main>
            <InfoCard variant="horizontal" />
            <InfoCardSkeleton variant="horizontal" />
        </main>
    );
};

export default SearchValue;
