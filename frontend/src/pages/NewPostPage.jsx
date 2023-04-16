import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import useAddPost from "../hooks/useAddPost";

const NewPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const queryParams = new URLSearchParams(window.location.search);
  const postId = queryParams.get("edit");
  const titleRef = useRef();
  const contentRef = useRef();

  const { mutate: addPost, isLoading } = useAddPost();

  useEffect(() => {
    if (postId) {
      try {
        // const titleInput = document.getElementById("title");
        // const tagsInput = document.getElementById("tags");
        const getPostToUpdate = async () => {
          const post = await axios.get(`http://localhost:5000/post/${postId}`);
          titleRef.current.value = post.data.title;
          contentRef.current.value = post.data.content;
        };
        getPostToUpdate();
      } catch (err) {
        console.log(err);
      }
    }
  }, [postId]);

  const handleOnChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleOnChangeText = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { content, title };
    addPost(data);
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await axios
      .put(`http://localhost:5000/posts/${postId}`, {
        id: postId,
        title: titleRef.current.value,
        content: contentRef.current.value,
        date: new Date(Date.now()).toLocaleDateString(),
      })
      .then((response) => {
        console.log(response);
        setIsLoading(false);
        window.location.replace(`post/${postId}`);
      });
  };

  return (
    <>
      <div className="px-4">
        <p className="mx-auto mt-10 flex max-w-3xl justify-center font-poppins font-black capitalize text-black md:justify-start">
          create post
        </p>

        <div
          className="
        mx-auto mb-10 mt-5 h-full max-w-3xl rounded-xl border border-gray-300 bg-white px-14 pt-14"
        >
          <form action="" onSubmit={postId ? handleEdit : handleSubmit}>
            <input
              name="title"
              type="text"
              placeholder="New post title here..."
              className="rounded-mde w-full p-3 font-poppins text-4xl font-black outline-none"
              onChange={handleOnChangeTitle}
              ref={titleRef}
            />
            <textarea
              name="body"
              id=""
              cols="30"
              rows="17"
              placeholder="Write your post here..."
              className="outline-non my-10 h-full  w-full animate-fadeIn font-black text-black outline-none"
              onChange={handleOnChangeText}
              ref={contentRef}
            />
            <hr />
            <div className="flex justify-center py-5 md:justify-start">
              <button
                type="submit"
                className="
            rounded border border-violet-900 bg-violet-600 px-5 py-3 font-black capitalize text-white outline-none hover:bg-violet-900"
              >
                {isLoading ? "loading..." : postId ? "edit" : "publish"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default NewPost;
