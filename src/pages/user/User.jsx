// import Sidebar from "../../components/navigation/Sidebar";
import { Outlet, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Showarticles from "../articles/Showarticles";
import Showdoctor from "../doctor/Showdoctor";
import Chatdokter from "./chatdokter/Chatdokter";
import Navbar from "../../components/navigation/Navbar";

function User() {
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
                <Showarticles />
              </div>
            </>
          }
        />
        <Route
          path="dokter"
          element={
            <>
              <div className=" bg-white dark:bg-gray-900 min-h-screen px-4 pt-20 md:pt-10">
                <Showdoctor />
              </div>
            </>
          }
        />
        <Route
          path="chatdokter"
          element={
            <>
              <div className="bg-white dark:bg-gray-900 h-screen overflow-hidden">
                <div className="rounded-lg">
                  <Chatdokter />
                </div>
              </div>
            </>
          }
        />
      </Routes>
      <Outlet />
    </>
  );
}

export default User;
