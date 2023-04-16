import api from "../api/api";
import { useQuery } from "react-query";

const getPosts = () => {
  return api.get("posts").then((res) => res.data);
};

const usePosts = (onSuccess, onError) => {
  return useQuery("posts", getPosts, {
    onSuccess,
    onError,
  });
};

export default usePosts;
