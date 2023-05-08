import { useState, useContext } from "react";
import AuthContext from "../context/Auth-Context";
import useSinglePost from "../hooks/useSinglePost";
import useEditPost from "../hooks/useEditPost";
import { useParams } from "react-router-dom";
import Editor from "../components/layouts/editor/Editor";

const EditPostPage = () => {
  const params = useParams();
  const { data: post, isLoading: isSinglePostLoading } = useSinglePost(
    params.postId
  );
  const context = useContext(AuthContext);
  const [title, setTitle] = useState(post?.data?.title);
  const [content, setContent] = useState(post?.data?.content);
  const { postId } = params;
  const userId = context.user._id;

  console.log(title, content);

  const { mutate: editPost, isLoading: isEditPostLoading } = useEditPost();

  const handleOnChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleOnChangeText = (content) => {
    setContent(content);
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    const data = { postId, userId, title, content };
    if (title !== "") {
      editPost(data);
    }
  };

  return (
    <>
      <div className="px-4">
        <p className="mx-auto mt-10 flex max-w-3xl justify-center font-poppins font-black capitalize text-black md:justify-start">
          edit post
        </p>

        <div
          className="
        mx-auto mb-10 mt-5 h-full max-w-3xl rounded-xl border border-gray-300 bg-white"
        >
          <form action="" onSubmit={handleEdit}>
            <div className="px-14 py-14">
              <input
                name="title"
                type="text"
                placeholder="Edit your post title here..."
                className="w-full font-poppins text-4xl font-black outline-none placeholder:text-black"
                onChange={handleOnChangeTitle}
                defaultValue={post?.data?.title}
              />
            </div>

            {!isSinglePostLoading && (
              <Editor
                handleOnChangeText={handleOnChangeText}
                defaultValue={post?.data?.content}
              />
            )}

            <div className="flex justify-center px-14 py-5 md:justify-start">
              <button
                type="submit"
                className="
            rounded border border-violet-900 bg-violet-600 px-5 py-3 font-black capitalize text-white outline-none hover:bg-violet-900"
              >
                {isEditPostLoading ? "loading..." : "edit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditPostPage;
