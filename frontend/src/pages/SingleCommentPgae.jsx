import profilImage from "../assets/images/profil image.webp";
import { Link, useParams } from "react-router-dom";
import useSingleComment from "../hooks/useSingleComment";
import useSinglePost from "../hooks/useSinglePost";

const SingleCommentPgae = () => {
  const params = useParams();
  const commentId = params.commentId;
  const postId = params.postId;
  const refetchOnWindowFocus = false;

  const { data: comment, isLoading } = useSingleComment({ commentId, postId });
  const { data: post, isLoading: isSinglePostLoading } = useSinglePost(
    postId,
    refetchOnWindowFocus
  );

  return (
    <>
      <div>
        <div className="mx-auto mb-4 mt-10 max-w-2xl rounded-lg bg-gray-200 p-8 text-center">
          <h1>
            Discussion on:{" "}
            <span className="font-poppins font-black">{post?.data?.title}</span>
          </h1>
          <Link to={`/posts/${postId}`}>
            <button className="mt-4 border border-gray-600 bg-gray-100 p-2">
              View post
            </button>
          </Link>
        </div>
      </div>
      <div className="mx-auto mb-10 max-w-3xl rounded-lg bg-white p-8">
        <div className="flex w-full justify-between space-x-4">
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
            <div>{comment?.data?.comment?.content}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleCommentPgae;
