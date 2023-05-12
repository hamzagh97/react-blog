import api from "../api/api";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

const useAddPost = () => {
  const navigate = useNavigate();

  const addPost = (data) => {
    return api
      .post("posts/add", {
        title: data.title,
        content: data.content,
        userId: data.userId,
      })
      .then((response) => navigate(`/posts/${response.data.post._id}`));
  };

  return useMutation(addPost);
};

export default useAddPost;
