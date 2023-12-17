import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useEffect, useState, useRef } from "react";
import { useMutation } from "@tanstack/react-query";
import {
  HiNewspaper,
  HiArrowDown,
  HiPaperAirplane,
  HiChevronDown,
  HiOutlineExclamationCircle,
} from "react-icons/hi";
import {
  Button,
  Dropdown,
  Modal,
  Label,
  TextInput,
  FileInput,
  Select,
} from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { postArticle } from "../../../globals/api";

function Createarticle() {
  const [content, setContent] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [category, setCategory] = useState("");
  const [selectedFile, setSelectedFile] = useState("");
  // const [errors, setErrors] = useState(null);
  const imageInputRef = useRef(null);
  const navigate = useNavigate();

  const { mutate, error, isPending, isSuccess } = useMutation({
    mutationKey: ["postArticle"],
    mutationFn: postArticle,
    onSuccess: () => {
      setOpenModal(false);
      handleClearAll();
    },
    onError: () => {
      setOpenModal(false);
    },
  });

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
  };

  const resetFileInput = () => {
    imageInputRef.current.value = null;
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setSelectedFile(reader.result);
    };
  };

  const handleChange = (value) => {
    setContent(value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setOpenModal(false);

    if (!selectedFile) return;

    const articleData = {
      title,
      summary,
      category,
      content,
      imageUrl: selectedFile,
      token: JSON.parse(localStorage.getItem("user")).token,
    };

    mutate(articleData);
  };

  const handleButtonBuatArtikel = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleClearAll = () => {
    setContent("");
    setTitle("");
    // setErrors(null);
    setSummary("");
    setCategory("");
    setSelectedFile("");
    resetFileInput();
  };

  useEffect(() => {
    const isDoctor = JSON.parse(localStorage.getItem("user"));

    if (!isDoctor) {
      return navigate(-1);
    }

    if (isDoctor.roles !== "doctor") {
      return navigate(-1);
    }
  }, [navigate]);

  return (
    <>
      {isPending && (
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
          <span className="loading loading-dots loading-lg"></span>
        </div>
      )}
      <div className="bg-white dark:bg-gray-900 min-h-screen flex justify-center items-center">
        <section className="">
          <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
            <div
              className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white"
              role="alert"
            >
              <span className="text-xs bg-color-primary-500 rounded-full text-white px-4 py-1.5 mr-3">
                Hai
              </span>{" "}
              <span className="text-sm font-medium">Selamat Datang!</span>
            </div>
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-color-primary-500 md:text-5xl lg:text-6xl dark:text-white">
              Halaman Editor Artikel
            </h1>
            <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
              Silahkan buat artikel terbaik kamu tentang kesehatan mental
              disini, namun tetap perhatikan syarat dan ketentuannya ya... ayo
              bantu orang orang tergerak dengan artikel terbaik kamu!
            </p>
            <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
              <Button
                color="primary"
                size="xl"
                onClick={() => handleButtonBuatArtikel("buat-artikel")}
              >
                Buat Artikel
                <HiArrowDown className="ml-2 h-5 w-5" />
              </Button>
              <Button
                color="dark"
                size="xl"
                onClick={() => navigate("/user/article")}
              >
                <HiNewspaper className="mr-2 h-5 w-5" />
                Lihat Artikel
              </Button>
            </div>
          </div>
        </section>
      </div>
      <div className="bg-white dark:bg-gray-900 ">
        <form>
          <section
            className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5 antialiased "
            id="buat-artikel"
          >
            <div className="mx-auto max-w-screen-xl  lg:px-12 mb-20 mt-10">
              <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
                <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                  <div className="w-full md:w-auto flex flex-row gap-2 ">
                    <Button color="primary" onClick={() => setOpenModal(true)}>
                      Publish
                      <HiPaperAirplane className="ml-2 h-5 w-5" />
                    </Button>
                    <Modal
                      show={openModal}
                      size="md"
                      onClose={() => setOpenModal(false)}
                      popup
                    >
                      <Modal.Header />
                      <Modal.Body>
                        <div className="text-center">
                          <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                          <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                            Apakah kamu yakin untuk publish artikel?
                          </h3>
                          <div className="flex justify-center gap-4">
                            <Button
                              color="primary"
                              type="submit"
                              onClick={onSubmit}
                            >
                              {"Iya, saya yakin"}
                            </Button>
                            <Button
                              color="gray"
                              onClick={() => setOpenModal(false)}
                            >
                              Periksa kembali
                            </Button>
                          </div>
                        </div>
                      </Modal.Body>
                    </Modal>
                    <div className="flex items-center space-x-3 w-full md:w-auto">
                      <Dropdown
                        label=""
                        dismissOnClick={false}
                        renderTrigger={() => (
                          <Button color="light" size="md">
                            <span className="hidden lg:block">Action</span>{" "}
                            <HiChevronDown className="lg:ml-2 h-5 w-5" />
                          </Button>
                        )}
                      >
                        <Dropdown.Item onClick={() => handleClearAll()}>
                          Bersihkan semua
                        </Dropdown.Item>
                        <Dropdown.Item>Salin semua</Dropdown.Item>
                      </Dropdown>
                    </div>
                  </div>
                </div>
                {}
                {error?.message.includes("E11000") && (
                  <p className="px-4 text-color-danger-700 dark:text-color-warning-200 text-sm mt-2">
                    Judul artikel sudah ada
                  </p>
                )}
                {error?.message.includes("required") && (
                  <p className="px-4 text-color-danger-700 dark:text-color-warning-200 text-sm mt-2">
                    Semua field harus diisi
                  </p>
                )}
                {isSuccess && (
                  <p className="px-4 text-color-success-700 dark:text-color-success-200 text-sm mt-2">
                    Artikel berhasil dipublish
                  </p>
                )}
                <div className="w-full p-4 pb-0">
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="title" value="Judul" />
                    </div>
                    <TextInput
                      id="title"
                      type="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="Masukkan judul artikel"
                      required
                    />
                  </div>
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="summary" value="Ringkasan" />
                    </div>
                    <TextInput
                      id="summary"
                      type="text"
                      value={summary}
                      onChange={(e) => setSummary(e.target.value)}
                      placeholder="Masukkan ringkasan artikel"
                      required
                    />
                  </div>
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="category" value="Kategori" />
                    </div>
                    <Select
                      id="category"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                    >
                      {" "}
                      <option disabled hidden value="">
                        Pilih Kategori
                      </option>
                      <option value="mental_health">Mental Health</option>
                      <option value="anxiety">Anxiety</option>
                      <option value="introvert">Introvert</option>
                    </Select>
                  </div>
                  <div className="mb-2">
                    <div className="mb-2 block">
                      <Label htmlFor="image" value="Gambar Artikel" />
                    </div>
                    {selectedFile && (
                      <img
                        src={selectedFile}
                        className="h-40 rounded-md mb-2"
                      />
                    )}
                    <FileInput
                      onChange={handleFileInputChange}
                      ref={imageInputRef}
                    />
                  </div>
                  <div className="mb-2">
                    <div className="block">
                      <Label htmlFor="content" value="Konten Artikel" />
                    </div>
                  </div>
                  <ReactQuill
                    placeholder="Masukkan konten artikel disini"
                    value={content}
                    onChange={handleChange}
                    className="h-screen bg-white dark:bg-[#faebd7]"
                  ></ReactQuill>
                </div>
              </div>
            </div>
          </section>
        </form>
      </div>
    </>
  );
}

export default Createarticle;
