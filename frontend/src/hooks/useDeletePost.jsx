import api from "../api/api";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

const useDeletePost = () => {
  const navigate = useNavigate();

  const deletePost = (data) => {
    return api
      .delete(`posts/delete/${data.postId}/${data.userId}`)
      .then((response) => navigate(`/`));
  };

  return useMutation(deletePost);
};

export default useDeletePost;
