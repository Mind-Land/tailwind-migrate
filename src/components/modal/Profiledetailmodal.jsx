import { Modal } from "flowbite-react";
import { HiBriefcase, HiEmojiHappy, HiStar } from "react-icons/hi";
import PropTypes from "prop-types";

function Profiledetailmodal({ closeModal, openModal, profileDetail }) {
  const {
    fullName,
    avatar,
    job,
    rating,
    about,
    email,
    createdAt,
    phoneNumber,
  } = profileDetail;

  const phoneNumberFormater = (number) => {
    const nomorBersih = `${number}`.replace(/\D/g, ""); // Menghilangkan karakter selain angka
    const nomorFormatted = nomorBersih.replace(
      /(\d{4})(\d{4})(\d{3})/,
      "$1-$2-$3"
    );
    return nomorFormatted;
  };

  // console.log(phoneNumber);

  const timeFormater = (time) => {
    const date = new Date(time);
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();
    return `${month} ${year}`;
  };

  return (
    <>
      <Modal dismissible show={openModal} onClose={closeModal}>
        <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
          <div className="flex justify-between mb-4 rounded-t sm:mb-5">
            <div className="flex items-center gap-4">
              <img
                className="w-14 h-14 rounded-full object-cover"
                src={avatar}
                alt={`${fullName} picture`}
              />
              <div className="font-medium dark:text-white">
                <div className="md:text-lg">{fullName}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Bergabung pada {timeFormater(createdAt)}
                </div>
              </div>
            </div>
            <div>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 inline-flex dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="readProductModal"
                onClick={closeModal}
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-4 mb-4 md:flex-row md:gap-8">
            <dl className="flex-2">
              <dd className="flex items-center text-gray-500">
                <HiBriefcase className="mr-1 h-4 w-4" />
                {job}
              </dd>
              <dd className="flex items-center mb-4 text-gray-500">
                <HiEmojiHappy className="mr-1 h-4 w-4" />
                Review Positif
              </dd>
              <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
                Kontak
              </dt>
              <dd className="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">
                {email} <br />
                +62 {phoneNumberFormater(phoneNumber)}
              </dd>
              <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
                Rating
              </dt>
              <dd className="flex items-center mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">
                <HiStar className="mr-1 h-4 w-4" />
                {rating}
              </dd>
            </dl>
            <dl className="flex-1">
              <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
                Tentang
              </dt>
              <dd className="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">
                {about}
              </dd>
            </dl>
          </div>
        </div>
      </Modal>
    </>
  );
}

Profiledetailmodal.propTypes = {
  openModal: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  profileDetail: PropTypes.shape({
    fullName: PropTypes.string,
    avatar: PropTypes.string,
    email: PropTypes.string,
    job: PropTypes.string,
    rating: PropTypes.string,
    tentang: PropTypes.string,
    about: PropTypes.string,
    phoneNumber: PropTypes.string,
    createdAt: PropTypes.string,
  }),
};

export default Profiledetailmodal;
