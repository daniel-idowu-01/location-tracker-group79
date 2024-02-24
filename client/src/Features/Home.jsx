import LinkButton from "../ui/LinkButton";

const Home = () => {
  return (
    <div className=" mb-auto mt-28 flex max-w-[800px] flex-col lg:mt-36">
      <h1 className="space-y-3 text-center text-2xl  font-semibold text-zinc-100 md:text-3xl ">
        <span className="block">
          {" "}
          Wherever you roam, PawPrints keeps you in the loop.
        </span>{" "}
        <span className="block text-lg font-medium text-zinc-200">
          Track your adventures, big or small, and never miss a beat. Let&apos;s
          journey together! Start your journey with PawPrints today and unlock a
          world of unforgettable experiences.
        </span>
      </h1>
      <div className="mx-auto mt-8">
        {" "}
        <LinkButton
          label="Start Tracking Now"
          to="dashboard"
          className="text-base font-semibold"
        />
      </div>
    </div>
  );
};

export default Home;
