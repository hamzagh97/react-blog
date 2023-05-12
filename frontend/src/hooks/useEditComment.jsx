import api from "../api/api";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

const useEditComment = () => {
  const navigate = useNavigate();

  const editComment = (data) => {
    return api
      .put(`/${data.postId}/comments/${data.commentId}`, {
        content: data.content,
      })
      .then((response) =>
        navigate(`/${data.postId}/comments/${data.commentId}`)
      );
  };

  return useMutation(editComment);
};

export default useEditComment;
