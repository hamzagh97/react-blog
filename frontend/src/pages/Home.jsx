import Banner from "../components/layouts/banner/Banner";
import Posts from "../components/home/Posts";

const Home = () => {
  return (
    <div className="mx-auto max-w-7xl bg-gray-100 px-4">
      <Banner />
      <Posts />
    </div>
  );
};

export default Home;
