import api from "../api/api";
import { useQuery } from "react-query";
import { useQueryClient } from "react-query";

const useSinglePost = (id, refetchOnWindowFocus, onSuccess, onError) => {
  const queryClient = useQueryClient();

  const getPost = ({ queryKey }) => {
    const postId = queryKey[1];
    return api.get(`posts/${postId}`);
  };

  return useQuery(["posts", id], getPost, {
    refetchOnWindowFocus: refetchOnWindowFocus,
    initialData: () => {
      if (Array.isArray(id)) {
        const posts = queryClient.getQueryData("posts")?.filter((post) => {
          for (let i = 0; i < id.length; i++) {
            if (post._id === id[i]) {
              return true;
            }
          }
        });
        return posts;
      }

      const post = queryClient
        .getQueryData("posts")
        ?.find((post) => post._id === id);
      if (post) {
        return { data: post };
      } else {
        return undefined;
      }
    },
  });
};

export default useSinglePost;
