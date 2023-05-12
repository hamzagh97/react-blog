import { useState } from "react";
import profilImage from "../assets/images/profil image.webp";
import { useParams } from "react-router-dom";
import useSingleComment from "../hooks/useSingleComment";
import useEditComment from "../hooks/useEditComment";

const EditCommentPage = () => {
  const params = useParams();
  const commentId = params.commentId;
  const postId = params.postId;
  const { data: comment, isLoading } = useSingleComment({ commentId, postId });

  const [content, setContent] = useState(comment?.data?.comment?.content);

  console.log(content);

  const { mutate: editComment, isLoading: isEditCommentLoading } =
    useEditComment();

  const handleOnChangeText = (e) => {
    setContent(e.target.value);
  };

  const handleEditComment = (e) => {
    e.preventDefault();
    const data = { postId, commentId, content };
    if (content !== "") {
      editComment(data);
    }
  };

  return (
    <div className="mx-auto mb-10 mt-10 max-w-3xl rounded-lg bg-white p-8">
      <h1 className="mb-6 font-poppins text-xl font-black">Editing comment</h1>

      <form action="" onSubmit={handleEditComment}>
        <div className="flex w-full justify-between space-x-4">
          <img
            src={profilImage}
            alt=""
            className="h-9 w-9 rounded-full border hover:border-zinc-600"
          />
          <textarea
            className="w-full rounded-lg border border-gray-200 p-4 outline-none"
            name=""
            id=""
            rows={10}
            defaultValue={comment?.data?.comment?.content}
            onChange={handleOnChangeText}
          ></textarea>
        </div>
        <div className="mt-5 flex justify-center md:justify-end">
          <button
            type="submit"
            className="rounded border border-violet-900 bg-violet-600 px-5 py-3 font-black capitalize text-white outline-none hover:bg-violet-900"
            onClick={handleEditComment}
          >
            {/* {isEditPostLoading ? "loading..." : "edit"} */}
            edit
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditCommentPage;
