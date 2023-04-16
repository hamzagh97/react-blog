import React from "react";
import profilImage from "../assets/images/profil image.webp";
import { FaBirthdayCake } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { RiArticleLine } from "react-icons/ri";
import { AiOutlineComment } from "react-icons/ai";
import { FaHashtag } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const ProfilePage = () => {
  const params = useParams();

  return (
    <>
      <div className="h-40 bg-zinc-900"></div>
      <div className="mx-auto max-w-5xl">
        <div className="relative -top-14 rounded-lg bg-white pb-10">
          <img
            src={profilImage}
            alt=""
            className="relative -top-16 left-1/4 h-32 w-32 -translate-x-2/4 rounded-full border-8 border-zinc-900 sm:left-2/4 sm:-translate-x-2/4"
          />
          <Link to={"/settings"}>
            <button className="absolute right-6 top-6 rounded bg-violet-600 p-2.5 capitalize text-white hover:bg-violet-900">
              edit profile
            </button>
          </Link>
          <div className="flex flex-col items-center">
            <span className="font-poppins text-3xl font-black capitalize">
              hamza ghazouani
            </span>
            <span className="mt-5">404 bio not found</span>
            <div className="mt-5 flex space-x-4">
              <FaBirthdayCake />
              <span>Joined on Aug 16, 2022</span>
              <FaGithub />
            </div>
          </div>
        </div>
        <div className="relative -top-8 flex w-full flex-col space-y-2 rounded-lg border border-gray-300 bg-white p-5 md:w-2/4 lg:w-1/4">
          <div className="flex items-center space-x-3">
            <RiArticleLine />
            <p>0 posts published</p>
          </div>
          <div className="flex items-center space-x-3">
            <AiOutlineComment />
            <p>0 comments written</p>
          </div>
          <div className="flex items-center space-x-3">
            <FaHashtag />
            <p>0 tags followed</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
