import api from "../api/api";
import { useQuery } from "react-query";

const usePosts = (onSuccess, onError) => {
  const getPosts = () => {
    return api.get("posts").then((res) => res.data);
  };

  return useQuery("posts", getPosts, {
    onSuccess,
    onError,
  });
};

export default usePosts;
