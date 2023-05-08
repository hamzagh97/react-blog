import api from "../api/api";
import { useMutation } from "react-query";

const useEditPost = () => {
  const editPost = (data) => {
    return api
      .put(`posts/edit/${data.postId}/${data.userId}`, {
        title: data.title,
        content: data.content,
      })
      .then((response) => window.location.replace(`/`));
  };

  return useMutation(editPost);
};

export default useEditPost;
