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
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { QueryClientProvider, QueryClient } from "react-query";
import Loader from "./components/UI/Loader";

function App() {
  const queryClient = new QueryClient();
  const context = useContext(AuthContext);
  const isLoggedIn = context.isLoggedIn;

  return (
    <QueryClientProvider client={queryClient}>
      <div className="bg-gray-100">
        <Navbar />
        <main>
          <Loader />
          <Routes>
            <Route
              path="login"
              element={!isLoggedIn ? <Login /> : <Navigate to="/" />}
            />
            <Route path="register" element={!isLoggedIn && <Register />} />

            <Route element={<RequireAuth />}>
              <Route path="/" element={<Home />} />
              {/* <Route path="/" element={<Home />} /> */}
              <Route path="posts/:postId" element={<SinglePostPage />} />
              <Route path="create" element={<NewPostPage />} />
              {/* <Route path="create" element={<NewPostPage />} /> */}

              {/* <Route path="login" element={<Login />} />  */}

              <Route path="profil/:profilId" element={<ProfilePage />} />
              <Route path="/settings" element={<Settings />} />
              {/* <Route path="/settings" element={<Settings />} /> */}
            </Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}

export default App;
