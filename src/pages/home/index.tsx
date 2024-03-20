import InfoCard from "@/components/Home/InfoCard";
import InfoCardSkeleton from "@/components/Home/InfoCardSkeleton";

const Home = () => {
    return (
        <section className="grid w-full gap-2 grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <InfoCard />
            <InfoCardSkeleton />
        </section>
    );
};

export default Home;
