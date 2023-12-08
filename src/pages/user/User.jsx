import Sidebar from "../../components/navigation/Sidebar";
import { Outlet, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Showarticles from "../articles/Showarticles";
import Showdoctor from "../doctor/Showdoctor";

function User() {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route
          path="article"
          element={
            <>
              <div className="p-4 sm:ml-64 bg-white dark:bg-gray-900 min-h-screen">
                <div className="p-2 lg:p-4 rounded-lg mt-14 lg:mt-10">
                  <Showarticles />
                </div>
              </div>
            </>
          }
        />
        <Route
          path="dokter"
          element={
            <>
              <div className="p-4 sm:ml-64 bg-white dark:bg-gray-900 min-h-screen">
                <div className="p-2 lg:p-4 rounded-lg mt-14 lg:mt-10">
                  <Showdoctor />
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
