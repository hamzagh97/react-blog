import api from "../api/api";
import { useMutation, useQueryClient } from "react-query";

const useAddComment = (postId) => {
  const addComment = async (data) => {
    return await api.post(`posts/${data.postId}/comments`, {
      userId: data.userId,
      content: data.content,
    });
  };

  const queryClient = useQueryClient();

  return useMutation(addComment, {
    onSuccess: () => {
      queryClient.invalidateQueries(["posts", postId]);
    },
  });
};

export default useAddComment;
