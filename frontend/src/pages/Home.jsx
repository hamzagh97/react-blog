import React from "react";
import Banner from "../components/banner/Banner";
import Posts from "../components/posts/Posts";

const Home = () => {
  return (
    <div className="mx-auto max-w-7xl bg-gray-100 px-4">
      <Banner />
      <Posts />
    </div>
  );
};

export default Home;
