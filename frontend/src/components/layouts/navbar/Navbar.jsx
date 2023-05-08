import { BsSearch } from "react-icons/bs";
import profilImage from "../../../assets/images/profil image.webp";
import { useContext } from "react";
import AuthContext from "../../../context/Auth-Context";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const context = useContext(AuthContext);
  const isLoggedIn = context.isLoggedIn;
  const logOut = context.logout;
  const navigate = useNavigate();
  const location = useLocation();

  const redirectLogin = () => {
    logOut();
    navigate("login", { replace: true });
  };

  const redirectToHome = () => {
    navigate("/");
  };

  return (
    <div
      className="
    sticky left-0 right-0 top-0 z-10 bg-white drop-shadow-md"
    >
      <div
        className="
        mx-auto flex max-w-7xl justify-between px-4 py-2"
      >
        <div
          className="
          flex items-center justify-between space-x-5"
        >
          <span
            className="cursor-pointer rounded bg-black p-1 font-poppins text-lg font-black uppercase text-white"
            onClick={redirectToHome}
          >
            blog
          </span>
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="search..."
              className="
              relative hidden w-80 rounded border border-gray-300 p-1.5 indent-1 placeholder:capitalize placeholder:text-gray-800  sm:block"
            />
            <span className=" absolute right-0 hidden cursor-pointer rounded p-2 hover:bg-slate-200 sm:block">
              <BsSearch size={20} />
            </span>
          </div>
        </div>
        <div
          className="
          ml-auto flex items-center gap-x-5"
        >
          {/* MOBILE SEARCH ICON */}
          <span className="block cursor-pointer rounded p-2 sm:hidden">
            <BsSearch size={20} />
          </span>
          {/* END MOBILE SEARCH ICON */}
          {isLoggedIn && (
            <Link to="create">
              <button
                className="
          hidden rounded border border-violet-900 bg-white px-2 py-1.5 font-bold capitalize text-violet-900 outline-none hover:bg-violet-600 hover:text-white md:block"
              >
                create post
              </button>
            </Link>
          )}
          {/* MOBILE CREATE POST BUTTON */}
          {isLoggedIn && (
            <Link to={"create"}>
              <button className="block items-center justify-center rounded border border-violet-900 bg-white px-3 text-3xl font-black capitalize text-violet-900 outline-none hover:bg-violet-600 hover:text-white md:hidden">
                +
              </button>
            </Link>
          )}
          {/* END MOBILE CREATE POST BUTTON */}
          {isLoggedIn ? (
            <span
              className="cursor-pointer p-1.5 hover:bg-gray-100"
              onClick={redirectLogin}
            >
              Log out
            </span>
          ) : location.pathname === "/login" ? (
            <Link to="register">
              <span className="cursor-pointer p-1.5 hover:bg-gray-100">
                Sign up
              </span>
            </Link>
          ) : (
            location.pathname === "/register" && (
              <Link to="login">
                <span className="cursor-pointer p-1.5 hover:bg-gray-100">
                  Sign in
                </span>
              </Link>
            )
          )}
          {isLoggedIn && (
            <Link to={"profil/:profilId"}>
              <img
                src={profilImage}
                alt=""
                className="h-9 w-9 rounded-full border hover:border-zinc-600"
              />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
