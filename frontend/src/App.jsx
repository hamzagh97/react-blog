import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import SinglePostPage from "./pages/SinglePostPage";
import NewPostPage from "./pages/NewPostPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProfilePage from "./pages/ProfilePage";
import Settings from "./pages/Settings";
import { useContext } from "react";
import AuthContext from "./context/Auth-Context";
import RequireAuth from "./hooks/RequireAuth";
import Navbar from "./components/layouts/navbar/Navbar";
import Footer from "./components/layouts/footer/Footer";
import { QueryClientProvider, QueryClient } from "react-query";
import Loader from "./components/layouts/UI/Loader";
import EditPostPage from "./pages/EditPostPage";
import Unauthorized from "./pages/Unauthorized";

function App() {
  const queryClient = new QueryClient();
  const context = useContext(AuthContext);
  const isLoggedIn = context.isLoggedIn;

  return (
    <QueryClientProvider client={queryClient}>
      <div className=" relative min-h-screen bg-gray-100 pb-72">
        <Navbar />
        <main>
          <Loader />
          <Routes>
            <Route
              path="login"
              element={!isLoggedIn ? <Login /> : <Navigate to="/" />}
            />
            <Route
              path="register"
              element={!isLoggedIn ? <Register /> : <Navigate to="/" />}
            />

            <Route element={<RequireAuth />}>
              <Route path="/" element={<Home />} />
              {/* <Route path="/" element={<Home />} /> */}
              <Route path="posts/:postId" element={<SinglePostPage />} />
              <Route path="create" element={<NewPostPage />} />
              <Route path="edit/:postId" element={<EditPostPage />} />

              {/* <Route path="login" element={<Login />} />  */}

              <Route path="profil/:profilId" element={<ProfilePage />} />
              <Route path="/settings" element={<Settings />} />
              {/* <Route path="/settings" element={<Settings />} /> */}
            </Route>
            <Route path="/*" element={<Unauthorized />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}

export default App;
