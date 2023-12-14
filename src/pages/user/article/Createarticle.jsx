import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useEffect, useState } from "react";
import {
  HiNewspaper,
  HiArrowDown,
  HiPaperAirplane,
  HiChevronDown,
  HiOutlineExclamationCircle,
} from "react-icons/hi";
import { Button, Dropdown, Modal } from "flowbite-react";
import { useNavigate } from "react-router-dom";

function Createarticle() {
  const [text, setText] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const handleChange = (value) => {
    setText(value);
  };

  useEffect(() => {
    console.log("nilai text", text);
  });

  const handleButtonBuatArtikel = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleClearAll = () => {
    setText("");
  };

  const navigate = useNavigate();

  return (
    <>
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
              <span className="text-sm font-medium">selamat datang</span>
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
                            onClick={() => setOpenModal(false)}
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
              <div className="w-full">
                <ReactQuill
                  value={text}
                  onChange={handleChange}
                  className="h-screen bg-white dark:bg-[#faebd7] "
                ></ReactQuill>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Createarticle;
