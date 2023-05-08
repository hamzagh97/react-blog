import api from "../api/api";
import { useMutation } from "react-query";

const useDeletePost = () => {
  const deletePost = (data) => {
    return api
      .delete(`posts/delete/${data.postId}/${data.userId}`)
      .then((response) => window.location.replace(`/`));
  };

  return useMutation(deletePost);
};

export default useDeletePost;
