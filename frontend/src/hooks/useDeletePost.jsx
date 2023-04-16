import { useMutation } from "react-query";
import api from "../api/api";

const deletePost = () => {
  return api.delete(`posts/${id}`).then((response) => console.log(response));
};

const useDeletePost = () => {
  return <div>useDeletePost</div>;
};

export default useDeletePost;
