import SideBar from "../components/settings/SideBar";
import Content from "../components/settings/Content";
import useSinglePost from "../hooks/useSinglePost";
import { useContext } from "react";
import AuthContext from "../context/Auth-Context";

const Settings = () => {
  const { user } = useContext(AuthContext);
  const { data: post, isLoading } = useSinglePost(user.posts);

  return (
    <div className="mx-auto max-w-5xl bg-gray-100 px-4">
      <h1 className="py-5 font-poppins text-3xl font-semibold">
        Settings for @hamzagh97
      </h1>
      <div className="flex space-x-4">
        <SideBar />
        <Content />
      </div>
    </div>
  );
};

export default Settings;
