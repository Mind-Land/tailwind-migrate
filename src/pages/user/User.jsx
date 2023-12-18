// import Sidebar from "../../components/navigation/Sidebar";
import { Outlet, Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useContext } from "react";

import Dashboard from "./Dashboard";
import Chatdokter from "./chatdokter/Chatdokter";
import Navbar from "../../components/navigation/Navbar";
import Createarticle from "./article/Createarticle";
import { AuthContext } from "../../context/AuthContext";
import EditProfile from "./EditProfile";
import DoctorProfile from "./DoctorProfile";
import UserProfile from "./UserProfile";
import EditUserProfile from "./EditUserProfile";
import Articleshow from "../articles/Articleshow";
import DoctorShow from "../doctor/Doctorshow";


function User() {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (!localStorage.getItem("user")) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route
          path="article"
          element={
            <>
              <div className="bg-white dark:bg-gray-900 min-h-screen px-4 pt-20 md:pt-10">
                <Articleshow />
              </div>
            </>
          }
        />
        <Route
          path="dokter"
          element={
            <>
              <div className=" bg-white dark:bg-gray-900 min-h-screen px-4 pt-20 md:pt-10">
                <DoctorShow />
              </div>
            </>
          }
        />
        <Route
          path="chatdokter"
          element={
            <>
              <div className="bg-white dark:bg-gray-900 h-screen overflow-hidden">
                <Chatdokter />
              </div>
            </>
          }
        />
        <Route
          path="tambahartikel"
          element={
            <>
              <Createarticle />
            </>
          }
        />
        <Route
          path="profil"
          element={
            JSON.parse(localStorage.getItem("user"))?.roles === "user" ? (
              <UserProfile />
            ) : (
              <DoctorProfile />
            )
            // <>
            //   <DoctorProfile />
            // </>
          }
        />
        <Route
          path="ubah-profil-dokter/:userId"
          element={
            <>
              <EditProfile />
            </>
          }
        />

        <Route path="ubah-profil/:userId" element={<EditUserProfile />} />
      </Routes>
      <Outlet />
    </>
  );
}

export default User;
