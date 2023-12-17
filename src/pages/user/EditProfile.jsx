import { useEffect, useState } from "react";
import { TextInput, Label, Button, Select } from "flowbite-react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery, useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

import { getDetailDokter, updateUserProfile } from "../../globals/api";
import currentTheme from "../../globals/currentTheme";

const EditProfile = () => {
  const { userId } = useParams();
  const theme = currentTheme();
  const navigation = useNavigate();

  const notify = (state) => {
    if (state === "success") {
      toast.success("Berhasil mengedit profil", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: false,
        pauseOnHover: false,
        theme,
      });
    } else if (state === "error") {
      toast.error("Gagal mengedit profil", {
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

  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["userProfile", userId],
    queryFn: () => getDetailDokter(userId),
  });

  const { mutate, isPending } = useMutation({
    mutationKey: ["updateUserProfile"],
    mutationFn: updateUserProfile,
    onSuccess: () => {
      notify("success");
      navigation("/user");
    },
    onError: () => {
      notify("error");
      refetch();
    },
  });

  const [datas, setDatas] = useState({
    firstName: data?.firstName || "",
    lastName: data?.lastName || "",
    about: data?.about || "",
    job: data?.job || "",
    praktik: data?.praktik || "",
    phoneNumber: data?.phoneNumber || "",
    pengalaman: data?.pengalaman || 0,
    followers: data?.followers || 0,
    alumnus: data?.alumnus || "",
  });

  console.log(datas);

  useEffect(() => {
    if (data) {
      setDatas(data);
    }
  }, [data]);

  const onSubmit = (e) => {
    e.preventDefault();

    mutate({
      ...datas,
      token: JSON.parse(localStorage.getItem("user")).token,
      id: userId,
    });
  };

  return (
    <>
      {(isPending || isLoading) && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <span className="loading loading-dots loading-lg"></span>
        </div>
      )}
      <div className="min-h-screen">
        <section className="bg-white dark:bg-gray-900 py-10 min-h-screen">
          <div className="max-w-2xl px-4 py-8 mx-auto lg:py-16">
            <h1 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
              Edit Profil
            </h1>
            <form onSubmit={onSubmit}>
              <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
                <div className="w-full">
                  <Label htmlFor="name1" value="Nama Depan" />
                  <TextInput
                    id="name1"
                    type="text"
                    placeholder="Masukkan nama depan Anda"
                    value={datas.firstName}
                    onChange={(e) =>
                      setDatas({ ...datas, firstName: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="w-full">
                  <Label htmlFor="name2" value="Nama Belakang" />
                  <TextInput
                    id="name2"
                    type="text"
                    value={datas.lastName}
                    onChange={(e) =>
                      setDatas({ ...datas, lastName: e.target.value })
                    }
                    placeholder="Masukkan nama belakang Anda"
                    required
                  />
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="about" value="Tentang" />
                  <textarea
                    id="about"
                    rows="8"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Ubah deskripsi..."
                    value={datas.about}
                    onChange={(e) =>
                      setDatas({ ...datas, about: e.target.value })
                    }
                    required
                  ></textarea>
                </div>
                <div className="w-full">
                  <Label htmlFor="job" value="Spesialis" />
                  <TextInput
                    id="job"
                    type="text"
                    value={datas.job}
                    onChange={(e) =>
                      setDatas({ ...datas, job: e.target.value })
                    }
                    placeholder="Masukkan spesialis Anda"
                    required
                  />
                </div>
                <div className="w-full">
                  <Label htmlFor="praktik" value="Praktik" />
                  <TextInput
                    id="praktik"
                    type="text"
                    value={datas.praktik}
                    onChange={(e) =>
                      setDatas({ ...datas, praktik: e.target.value })
                    }
                    placeholder="Masukkan alamat praktik Anda"
                    required
                  />
                </div>
                <div className="w-full">
                  <Label htmlFor="pengalaman" value="Pengalaman (Tahun)" />
                  <TextInput
                    id="pengalaman"
                    type="number"
                    onChange={(e) =>
                      setDatas({ ...datas, pengalaman: e.target.value })
                    }
                    value={datas.pengalaman}
                    placeholder="(contoh: 5)"
                    required
                  />
                </div>
                <div className="w-full">
                  <Label htmlFor="followers" value="Followers" />
                  <TextInput
                    id="followers"
                    type="number"
                    onChange={(e) =>
                      setDatas({ ...datas, followers: e.target.value })
                    }
                    value={datas.followers}
                    placeholder="Masukkan jumlah followers Anda"
                    required
                    className="w-full"
                  />
                </div>
                <div className="w-full">
                  <Label htmlFor="phoneNumber" value="No Telepon" />
                  <TextInput
                    id="phoneNumber"
                    type="number"
                    onChange={(e) =>
                      setDatas({
                        ...datas,
                        phoneNumber: e.target.value.toString(),
                      })
                    }
                    value={datas.phoneNumber}
                    placeholder="Masukkan nomor telepon anda"
                    required
                  />
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="alumnus" value="Alumnus" />
                  <TextInput
                    id="alumnus"
                    type="text"
                    onChange={(e) =>
                      setDatas({ ...datas, alumnus: e.target.value })
                    }
                    value={datas.alumnus}
                    placeholder="Masukkan universitas Anda"
                    required
                  />
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="rating" value="Rating" />
                  <Select id="rating" required>
                    <option value="" hidden>
                      Pilih Rating
                    </option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Select>
                </div>
              </div>

              {isError && (
                <p className="text-red-500 text-sm px-2 mb-1">
                  {error.message}
                </p>
              )}
              <div className="grid grid-cols-2 gap-4 w-full">
                <div className="mb-2 block">
                  <Button type="submit" color="primary" className="w-full">
                    Ubah Data Profil
                  </Button>
                </div>
                <div className="mb-2 g block">
                  <div className="mb-2 block">
                    <Button
                      color="danger"
                      className="w-full"
                      onClick={() => navigation("/user/profil")}
                    >
                      Kembali
                    </Button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default EditProfile;
