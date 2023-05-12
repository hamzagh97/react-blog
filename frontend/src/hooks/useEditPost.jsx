import api from "../api/api";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

const useEditPost = () => {
  const navigate = useNavigate();

  const editPost = (data) => {
    return api
      .put(`posts/edit/${data.postId}/${data.userId}`, {
        title: data.title,
        content: data.content,
      })
      .then((response) => navigate(`/posts/${data.postId}`));
  };

  return useMutation(editPost);
};

export default useEditPost;
