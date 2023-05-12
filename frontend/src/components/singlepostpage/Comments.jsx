import profilImage from "../../assets/images/profil image.webp";
import { useContext } from "react";
import AuthContext from "../../context/Auth-Context";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const Comments = ({ comments }) => {
  const context = useContext(AuthContext);
  const userId = context.user._id;
  const navigate = useNavigate();
  const params = useParams();
  const postId = params.postId;

  return comments.map((comment, i) => {
    return (
      <div className="flex w-full space-x-4" key={i}>
        <img
          src={profilImage}
          alt=""
          className="h-9 w-9 rounded-full border hover:border-zinc-600"
        />
        <div className="w-full rounded-lg border border-gray-200 p-4">
          <div className="mb-4 space-x-4">
            <span className="font-black">Ben Halpern</span>
            <span>May 4</span>
          </div>
          <div>{comment.content}</div>
          {comment.userId === userId && (
            <div className="mt-4 flex justify-end space-x-4">
              <button
                className="rounded border border-none px-2 py-1.5 font-bold capitalize text-black hover:bg-blue-600 hover:text-white"
                onClick={() => {
                  navigate(`/${postId}/comments/edit/${comment._id}`);
                }}
              >
                edit
              </button>
              <button
                className="rounded border border-none px-2 py-1.5 font-bold capitalize text-black hover:bg-red-600 hover:text-white"
                // onClick={showModalHandle}
              >
                delete
              </button>
            </div>
          )}
        </div>
      </div>
    );
  });
};

export default Comments;
