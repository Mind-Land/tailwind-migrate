import { useQuery, useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Badge, Button, Modal } from "flowbite-react";
import { HiOutlinePlus, HiOutlineExclamationCircle } from "react-icons/hi";
import { toast } from "react-toastify";

import {
  deleteArticle,
  getDetailDokter,
  getUserArticles,
  // getDetailUser,
} from "../../globals/api";
import currentTheme from "../../globals/currentTheme";

const DoctorProfile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [id, setId] = useState(null);
  const theme = currentTheme();

  const notify = (state) => {
    if (state === "success") {
      toast.success("Berhasil menghapus artikel", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: false,
        pauseOnHover: false,
        theme,
      });
    } else if (state === "error") {
      toast.error("Gagal menghapus artikel", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: false,
        pauseOnHover: false,
        theme,
      });
    }
  };

  const {
    data: userProfileData,
    isLoading: isLoadingProfileData,
    error: errorProfileData,
  } = useQuery({
    queryKey: ["userProfile"],
    queryFn: () => getDetailDokter(JSON.parse(localStorage.getItem("user")).id),
  });

  //   const {
  //     data: userData,
  //     isLoading: isLoadingUserData,
  //     error: errorUsereData,
  //   } = useQuery({
  //     queryKey: ["userData"],
  //     queryFn: () => getDetailUser(JSON.parse(localStorage.getItem("user")).id),
  //   });

  const {
    data: userArticlesData,
    isLoading: isLoadingUserArticlesData,
    error: errorUserArticlesData,
    refetch: refetchUserArticlesData,
  } = useQuery({
    queryKey: ["userArticles"],
    queryFn: () =>
      getUserArticles({
        id: JSON.parse(localStorage.getItem("user")).id,
        token: JSON.parse(localStorage.getItem("user")).token,
      }),
  });

  const { mutate, isPending } = useMutation({
    mutationKey: ["deleteArticle"],
    mutationFn: deleteArticle,
    onSuccess: () => {
      setIsModalOpen(false);
      refetchUserArticlesData();
      notify("success");
    },
    onError: () => {
      setIsModalOpen(false);
      notify("error");
    },
  });

  const handleDeleteArticle = (e, id) => {
    e.preventDefault();

    setId(id);
    setIsModalOpen(true);
  };

  const handleYesButton = (id) => {
    mutate({
      id,
      token: JSON.parse(localStorage.getItem("user")).token,
    });
  };

  useEffect(() => {}, []);

  return (
    <>
      {isPending && (
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
          <span className="loading loading-dots loading-lg"></span>
        </div>
      )}
      <Modal
        show={isModalOpen}
        size="md"
        onClose={() => setIsModalOpen(false)}
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Yakin ingin menghapus artikel ini?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={() => handleYesButton(id)}>
                Iya, hapus
              </Button>
              <Button color="gray" onClick={() => setIsModalOpen(false)}>
                Tidak, jangan hapus
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <div className="bg-gray-100 dark:bg-gray-900 py-10">
        <div className="container mx-auto py-8 min-h-screen">
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
                      {userProfileData?.fullName}
                    </h1>
                    <p className="text-gray-600 dark:text-gray-100">
                      {userProfileData?.job || "Perlu diisi"}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-4 justify-center">
                      <Link
                        to={`/user/ubah-profil-dokter/${userProfileData?.id}`}
                        className="font-medium text-primary-600 bg-color-primary-500 dark:text-primary-500 text-white py-2 px-4 rounded-md"
                      >
                        Ubah data profil
                      </Link>
                      {errorProfileData && <p>Error fetching data</p>}
                    </div>
                  </div>
                  <hr className="my-6 border-t border-gray-300" />
                  <div className="flex flex-col">
                    <span className="text-black dark:text-white font-bold tracking-wider mb-2">
                      Tentang
                    </span>
                    <span className="text-sm text-gray-700 dark:text-gray-100 text-justify">
                      {userProfileData?.about || (
                        <Badge color="failure" className="rounded-full w-fit">
                          Perlu diisi
                        </Badge>
                      )}
                    </span>
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
                    Profil Dokter
                  </h3>
                  <p className="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-200">
                    Informasi dokter yang terdaftar di sistem
                  </p>
                </div>
                <div className="border-y border-y-gray-200 dark:border-y-gray-600 border-gray-200 dark:border-gray-600 px-4 py-5 sm:p-0">
                  <dl className="sm:divide-y sm:divide-gray-200 dark:border-gray-600">
                    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-black dark:text-white">
                        Nama Lengkap
                      </dt>
                      <dd className="mt-1 text-sm text-gray-500 dark:text-gray-200 sm:mt-0 sm:col-span-2">
                        {userProfileData?.fullName}
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
                    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-black dark:text-white">
                        Nomor Telepon
                      </dt>
                      <dd className="mt-1 text-sm text-gray-500 dark:text-gray-200 sm:mt-0 sm:col-span-2">
                        {userProfileData?.phoneNumber || (
                          <Badge color="failure" className="rounded-full w-fit">
                            Perlu diisi
                          </Badge>
                        )}
                      </dd>
                    </div>
                    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-black dark:text-white">
                        Praktek
                      </dt>
                      <dd className="mt-1 text-sm text-gray-500 dark:text-gray-200 sm:mt-0 sm:col-span-2">
                        {userProfileData?.praktik || (
                          <Badge color="failure" className="rounded-full w-fit">
                            Perlu diisi
                          </Badge>
                        )}
                      </dd>
                    </div>
                    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-black dark:text-white">
                        Pengalaman
                      </dt>
                      <dd className="mt-1 text-sm text-gray-500 dark:text-gray-200 sm:mt-0 sm:col-span-2">
                        {userProfileData?.pengalaman || (
                          <Badge color="failure" className="rounded-full w-fit">
                            Perlu diisi
                          </Badge>
                        )}
                      </dd>
                    </div>
                    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-black dark:text-white">
                        Alumnus
                      </dt>
                      <dd className="mt-1 text-sm text-gray-500 dark:text-gray-200 sm:mt-0 sm:col-span-2">
                        {userProfileData?.alumnus || (
                          <Badge color="failure" className="rounded-full w-fit">
                            Perlu diisi
                          </Badge>
                        )}
                      </dd>
                    </div>
                    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-black dark:text-white">
                        Rating
                      </dt>
                      <dd className="mt-1 text-sm text-gray-500 dark:text-gray-200 sm:mt-0 sm:col-span-2">
                        {userProfileData?.ratings || (
                          <Badge color="failure" className="rounded-full w-fit">
                            Perlu diisi
                          </Badge>
                        )}
                      </dd>
                    </div>
                  </dl>
                </div>
                <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
                  <div>
                    <h3 className="text-lg leading-6 font-bold text-black dark:text-white">
                      Daftar Artikel
                    </h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-200">
                      Daftar artikel yang telah dibuat oleh user
                    </p>
                  </div>

                  <Link
                    to="/user/tambahartikel"
                    className="bg-color-primary-500 px-4 py-2 text-white rounded-md"
                  >
                    <HiOutlinePlus className="h-4 w-4" />
                  </Link>
                </div>
                {errorUserArticlesData && (
                  <p className="text-center">Error fetching data</p>
                )}
                {isLoadingUserArticlesData && (
                  <div className="flex items-center">
                    <span className="loading loading-dots loading-xs"></span>
                  </div>
                )}
                {userArticlesData?.map((article, i) => (
                  <div
                    key={article.id}
                    className="min-h-[20px] flex items-center px-6 py-5 justify-between border-t border-t-gray-200 dark:border-t-gray-600"
                  >
                    <div className="flex">
                      <span className="inline text-gray-600">
                        {i + 1}.&nbsp;
                      </span>
                      <h5 className="text-gray-600 dark:text-gray-200">
                        {article.title}
                      </h5>
                    </div>
                    <div className="sm:flex-col">
                      <Link
                        to={`/articles/detailarticles/${article.slug}`}
                        className="bg-color-primary-500 hover:bg-color-primary-600 font-medium text-white px-4 py-2 rounded-md mx-1"
                      >
                        Lihat
                      </Link>
                      <Button
                        color="danger"
                        onClick={(e) => handleDeleteArticle(e, article.id)}
                        className="inline-block font-medium text-white rounded-md mx-1"
                      >
                        Hapus
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorProfile;
