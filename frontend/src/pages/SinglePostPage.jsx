import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import Modal from "../components/UI/Modal";
import axios from "axios";
import { Link } from "react-router-dom";
import useSinglePost from "../hooks/useSinglePost";

const SinglePostPage = () => {
  const [showModal, setShowModal] = useState(false);
  const params = useParams();
  const { postId } = params;

  const { data: post, isLoading } = useSinglePost(postId);

  const handleDelete = async (id) => {
    await axios
      .delete(`http://localhost:3009/posts/${id}`)
      .then((response) => console.log(response));
    window.location.replace(`/`);
  };

  const showModalHandle = () => {
    setShowModal(true);
  };

  const closeModalHandle = () => {
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <Modal
          delete={handleDelete}
          close={closeModalHandle}
          id={post.data.id}
        />
      )}
      {isLoading ? (
        <div>loading...</div>
      ) : (
        <>
          <div className="px-4">
            <div className="mx-auto mt-10 flex max-w-3xl items-center justify-between">
              <div className="flex items-center space-x-5">
                <span
                  className="
                cursor-pointer rounded-full border border-violet-400 p-1.5 uppercase hover:border-violet-900"
                >
                  ad
                </span>
                <div className="flex flex-col">
                  <span className="text-xl font-black capitalize text-black">
                    name
                  </span>
                  <span className="text-sm">
                    posted on{" "}
                    <span className="font-black">{post.data.createdAt}</span>{" "}
                  </span>
                </div>
              </div>
              <div className="flex space-x-4">
                <Link to={`/create?edit=${params.postId}`}>
                  <button className="rounded border border-none px-2 py-1.5 font-bold capitalize text-black hover:bg-blue-600 hover:text-white">
                    edit
                  </button>
                </Link>
                <button
                  className="rounded border border-none px-2 py-1.5 font-bold capitalize text-black hover:bg-red-600 hover:text-white"
                  onClick={showModalHandle}
                >
                  delete
                </button>
              </div>
            </div>
            <div className="mx-auto mt-10 flex max-w-3xl items-center justify-center font-poppins text-5xl font-black text-black sm:justify-start">
              {post.data.title}
            </div>

            <div
              className="
            mx-auto mb-10 mt-20 h-full max-w-3xl border border-gray-300 bg-white p-10"
            >
              <div className="font-black text-black outline-none">
                {post.data.content}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default SinglePostPage;
