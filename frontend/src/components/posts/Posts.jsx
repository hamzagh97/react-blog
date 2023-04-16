import Post from "./Post";
import usePosts from "../../hooks/usePosts";

const Posts = () => {
  const { data: posts, isLoading } = usePosts();

  return (
    <section className="my-10">
      <p className="flex justify-center font-poppins text-lg font-black capitalize text-black md:justify-start">
        recent posts
      </p>
      <div className="my-3 mt-5 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {isLoading ? (
          <div>...loading</div>
        ) : (
          posts?.map((post, index) => (
            <Post
              key={post._id}
              id={post._id}
              title={post.title}
              content={post.content}
              date={post.createdAt}
            />
          ))
        )}
      </div>
      <div className="flex justify-center">
        <button
          className="
        mt-10 place-content-center rounded-lg border bg-violet-600 px-10 py-5 text-xl font-black capitalize text-white outline-none hover:bg-violet-900"
        >
          read more
        </button>
      </div>
    </section>
  );
};

export default Posts;
