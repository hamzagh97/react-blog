import api from "../api/api";
import { useQuery } from "react-query";
import { useQueryClient } from "react-query";

const getPost = ({ queryKey }) => {
  const postId = queryKey[1];
  return api.get(`post/${postId}`);
};

const useSinglePost = (id, onSuccess, onError) => {
  const queryClient = useQueryClient();

  return useQuery(["posts", id], getPost, {
    initialData: () => {
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
