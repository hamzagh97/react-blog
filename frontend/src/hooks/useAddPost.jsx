import api from "../api/api";
import { useMutation } from "react-query";

const addPost = (data) => {
  return api
    .post("post", {
      title: data.title,
      content: data.content,
    })
    .then((response) => {
      window.location.replace(`posts/${response.data.post._id}`);
    });
};

const useAddPost = () => {
  return useMutation(addPost);
};

export default useAddPost;
