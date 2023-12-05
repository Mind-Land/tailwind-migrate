import { useState } from "react";
import { Card, Modal, Button } from "flowbite-react";
import { DokterUnggulan } from "../data/index";
import { HiOutlineInformationCircle, HiOutlineChatAlt } from "react-icons/hi";
import { Rating } from "flowbite-react";

function Doctorcard() {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const openDetailModal = (dokter) => {
    setSelectedDoctor(dokter);
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
    setSelectedDoctor(null);
  };

  return (
    <div className="grid gap-10 lg:grid-cols-3">
      {DokterUnggulan.map((dokter) => {
        return (
          <div key={dokter.id} data-aos="fade-up">
            <Card className="max-w-sm">
              <div className="flex flex-col items-center pb-2">
                <img
                  className="mb-3 shadow-lg object-cover"
                  style={{
                    height: "96px",
                    width: "96px",
                    borderRadius: "50%",
                  }}
                  src={dokter.image}
                  alt=""
                />

                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  {dokter.title}
                </h5>

                <p className="text-xs font-bold text-gray-500 dark:text-gray-400">
                  {dokter.experience}
                </p>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {dokter.specialist}
                </span>
                <Rating>
                  {dokter.rating.stars.map((star, index) => (
                    <Rating.Star key={index} filled={star.filled} />
                  ))}
                  <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                    {dokter.rating.average} out of {dokter.rating.maxRating}
                  </p>
                </Rating>
                <div className="mt-4 flex space-x-3 lg:mt-6 ">
                  <button
                    className="inline-flex items-center rounded-lg border border-gray-300 bg-color-primary-500 px-4 py-2 text-center text-sm font-medium text-white hover:bg-color-primary-700 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800 dark:text-gray-900 "
                    onClick={() => openDetailModal(dokter)}
                  >
                    <HiOutlineInformationCircle className="mr-1 h-4 w-4" />
                    Lihat Detail
                  </button>
                </div>
              </div>
            </Card>
          </div>
        );
      })}
      {selectedDoctor && (
        <Modal show={openModal} onClose={closeModal}>
          <Modal.Header className="px-20">
            {selectedDoctor.title} Details
          </Modal.Header>
          <Modal.Body className="px-20">
            <div className="mt-1">
              <div className="items-center justify-center">
                <img
                  src={selectedDoctor.image}
                  className="mb-3 shadow-lg object-cover rounded-lg img-fixed-size"
                  style={{
                    height: "295px",
                    width: "485px",
                  }}
                  alt=""
                />
              </div>
              <h1 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                {selectedDoctor.title}
              </h1>
              <p className="text-xs font-bold text-gray-500 dark:text-gray-400">
                {selectedDoctor.experience}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {selectedDoctor.specialist}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">
                <strong>Alumni :</strong> {selectedDoctor.alumni}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                <strong> Praktik :</strong> {selectedDoctor.practice}
              </p>
              <Rating className="mt-5">
                {selectedDoctor.rating.stars.map((star, index) => (
                  <Rating.Star key={index} filled={star.filled} />
                ))}
                <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                  {selectedDoctor.rating.average} out of{" "}
                  {selectedDoctor.rating.maxRating}
                </p>
              </Rating>
              {/* Display other details here */}
            </div>
          </Modal.Body>
          <Modal.Footer className="px-20">
            <Button color="primary" onClick={closeModal}>
              Kirim Pesan
              <HiOutlineChatAlt className="ml-2 h-5 w-5" />
            </Button>
            <Button color="gray" onClick={closeModal}>
              Batal
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
}

export default Doctorcard;
