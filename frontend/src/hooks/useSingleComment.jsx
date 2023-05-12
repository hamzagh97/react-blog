import { useQuery } from "react-query";
import api from "../api/api";
import { useQueryClient } from "react-query";

const useSingleComment = (ids) => {
  const queryClient = useQueryClient();

  const getComment = () => {
    return api.get(`${ids.postId}/comments/${ids.commentId}`);
  };

  return useQuery(["comment", ids.commentId], getComment, {
    initialData: () => {
      // if (Array.isArray(id)) {
      //   const posts = queryClient.getQueryData("posts")?.filter((post) => {
      //     for (let i = 0; i < id.length; i++) {
      //       if (post._id === id[i]) {
      //         return true;
      //       }
      //     }
      //   });
      //   return posts;
      // }

      const post = queryClient
        .getQueryData("posts")
        ?.find((post) => post._id === ids.postId);
      if (post) {
        return {
          data: {
            comment: post.comments.find((comment) => {
              return comment._id === ids.commentId;
            }),
          },
        };
      } else {
        return undefined;
      }
    },
  });
};

export default useSingleComment;
