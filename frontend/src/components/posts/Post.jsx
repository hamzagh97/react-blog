import React from "react";
import { Link } from "react-router-dom";

const Post = (props) => {
  return (
    <Link to={`posts/${props.id}`}>
      <div
        className="relative
        -m-px flex h-80 cursor-pointer items-center justify-center border border-gray-300 bg-white p-5 transition ease-in-out hover:z-10 hover:scale-105 hover:border-gray-700 hover:drop-shadow-2xl"
      >
        <span className="absolute top-1 left-1 font-black">{props.date}</span>
        <h1
          className="
          font-poppins text-3xl font-black"
        >
          {props.title}
        </h1>
      </div>
    </Link>
  );
};

export default Post;
