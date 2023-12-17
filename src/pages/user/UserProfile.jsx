import { useQuery } from "@tanstack/react-query";
// import { useState } from "react";
// import { Link } from "react-router-dom";
import { Badge } from "flowbite-react";

import { getDetailUser } from "../../globals/api";

const UserProfile = () => {
  const {
    data: userProfileData,
    isLoading: isLoadingProfileData,
    error: errorProfileData,
  } = useQuery({
    queryKey: ["getUserData"],
    queryFn: () => getDetailUser(JSON.parse(localStorage.getItem("user")).id),
  });

  return (
    <>
      {isLoadingProfileData && (
        <div className="fixed items-center justify-center">
          <span className="loading loading-dots loading-xs"></span>
        </div>
      )}
      {errorProfileData && <p>{errorProfileData.message}</p>}
      <div className="bg-gray-100 dark:bg-gray-900 py-10">
        <div className="container mx-auto py-8">
          <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
            <div className="col-span-4 sm:col-span-3">
              {isLoadingProfileData ? (
                <div className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-600 border shadow rounded-lg p-6">
                  <div className="flex items-center justify-center">
                    <span className="loading loading-dots loading-xs"></span>
                  </div>
                </div>
              ) : (
                <div className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 border shadow rounded-lg p-6">
                  <div className="flex flex-col items-center">
                    <img
                      src={userProfileData?.avatar}
                      className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0"
                    ></img>
                    <h1 className="text-xl font-bold text-black dark:text-white">
                      {userProfileData?.fullName || userProfileData?.username}
                    </h1>
                    <p className="text-gray-600 dark:text-gray-100">
                      {userProfileData?.email || "Perlu diisi"}
                    </p>
                    {/* <div className="mt-6 flex flex-wrap gap-4 justify-center">
                      <Link
                        to={`/user/ubah-profil/${userProfileData?.id}`}
                        className="font-medium text-primary-600 bg-color-primary-500 dark:text-primary-500 text-white py-2 px-4 rounded-md"
                      >
                        Ubah data profil
                      </Link>
                      {errorProfileData && <p>Error fetching data</p>}
                    </div> */}
                  </div>
                </div>
              )}
            </div>
            {isLoadingProfileData ? (
              <div className="bg-white flex justify-center items-center dark:bg-gray-800 border-gray-200 dark:border-gray-700 border shadow rounded-lg col-span-4 sm:col-span-9">
                <div>
                  <span className="loading loading-dots loading-xs"></span>
                </div>
              </div>
            ) : (
              <div className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 overflow-hidden shadow rounded-lg border col-span-4 sm:col-span-9">
                <div className="px-4 py-5 sm:px-6">
                  <h3 className="text-lg leading-6 font-bold text-black dark:text-white">
                    Profil User
                  </h3>
                  <p className="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-200">
                    Informasi user yang terdaftar di sistem
                  </p>
                </div>
                <div className="border-y border-y-gray-200 dark:border-y-gray-600 border-gray-200 dark:border-gray-600 px-4 py-5 sm:p-0">
                  <dl className="sm:divide-y sm:divide-gray-200 dark:border-gray-600">
                    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-black dark:text-white">
                        Nama Lengkap
                      </dt>
                      <dd className="mt-1 text-sm text-gray-500 dark:text-gray-200 sm:mt-0 sm:col-span-2">
                        {userProfileData?.fullName || (
                          <Badge color="failure" className="rounded-full w-fit">
                            Perlu diisi
                          </Badge>
                        )}
                        {isLoadingProfileData && (
                          <div className="flex items-center">
                            <span className="loading loading-dots loading-xs"></span>
                          </div>
                        )}
                      </dd>
                    </div>
                    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-black dark:text-white">
                        Username
                      </dt>
                      <dd className="mt-1 text-sm text-gray-500 dark:text-gray-200 sm:mt-0 sm:col-span-2">
                        {userProfileData?.username}
                        {isLoadingProfileData && (
                          <div className="flex items-center">
                            <span className="loading loading-dots loading-xs"></span>
                          </div>
                        )}
                      </dd>
                    </div>
                    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-black dark:text-white">
                        Alamat Email
                      </dt>
                      <dd className="mt-1 text-sm text-gray-500 dark:text-gray-200 sm:mt-0 sm:col-span-2">
                        {userProfileData?.email}
                        {isLoadingProfileData && (
                          <div className="flex items-center">
                            <span className="loading loading-dots loading-xs"></span>
                          </div>
                        )}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
