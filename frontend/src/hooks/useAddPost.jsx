import api from "../api/api";
import { useMutation } from "react-query";

const useAddPost = () => {
  const addPost = (data) => {
    return api
      .post("posts/add", {
        title: data.title,
        content: data.content,
        userId: data.userId,
      })
      .then((response) =>
        window.location.replace(`posts/${response.data.post._id}`)
      );
  };

  return useMutation(addPost);
};

export default useAddPost;
