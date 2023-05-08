import { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import Modal from "../components/layouts/UI/Modal";
import { Link } from "react-router-dom";
import useSinglePost from "../hooks/useSinglePost";
import AuthContext from "../context/Auth-Context";
import useDeletePost from "../hooks/useDeletePost";
import Comments from "../components/singlepostpage/Comments";

const SinglePostPage = () => {
  const [showModal, setShowModal] = useState(false);
  const params = useParams();
  const { postId } = params;
  const context = useContext(AuthContext);
  const userId = context.user._id;

  const { data: post, isLoading } = useSinglePost(postId);
  const showActions = !isLoading ? userId === post.data.userId : null;

  const { mutate: deletePost, isLoading: isDeletePostLoading } =
    useDeletePost();

  const showModalHandle = () => {
    setShowModal(true);
  };

  const closeModalHandle = () => {
    setShowModal(false);
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    const data = { postId, userId };
    deletePost(data);
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
          <div className="mb-10 px-4">
            <div className="mx-auto mt-10 flex max-w-3xl items-center justify-between">
              <div className="flex items-center space-x-5">
                <span className="cursor-pointer rounded-full border border-violet-400 p-1.5 uppercase hover:border-violet-900">
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
                {showActions && (
                  <>
                    <Link to={`/edit/${params.postId}`}>
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
                  </>
                )}
              </div>
            </div>
            <div className="mx-auto mt-10 flex max-w-3xl items-center justify-center font-poppins text-5xl font-black text-black sm:justify-start">
              {post.data.title}
            </div>

            <div className="h-100 mx-auto mt-20 max-w-3xl border border-gray-300 bg-white p-10">
              <div
                className="font-black text-black outline-none"
                dangerouslySetInnerHTML={{ __html: post.data.content }}
              ></div>
            </div>
            <Comments />
          </div>
        </>
      )}
    </>
  );
};

export default SinglePostPage;
