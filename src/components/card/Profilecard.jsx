import { Card, Button } from "flowbite-react";
import { HiOutlineChat, HiOutlineInformationCircle } from "react-icons/hi";
import PropTypes from "prop-types";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import LazyLoad from "react-lazy-load";
import Getdetaildokter from "../../pages/templates/Getdetaildokter";
import { AuthContext } from "../../context/AuthContext";
import background from "/img/backgroundprofilecard.png";

function Profilecard({ profile }) {
  const { id, name, job, pengalaman, followers, avatar } = profile;

  const [isModalOpen, setModalOpen] = useState(false);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const formatFollower = (followers) => {
    if (followers > 1000) {
      return `${(followers / 1000).toFixed(1)}K`;
    } else {
      return followers.toString();
    }
  };

  const handleChat = (e) => {
    e.preventDefault();

    if (user) {
      return navigate("/user/chatdokter");
    }

    return navigate("/login");
  };

  return (
    <>
      <Card className="max-w-sm">
        <div className="flex flex-col items-center pb-5">
          <div className="relative flex h-32 w-full justify-center rounded-xl bg-cover mb-14">
            <img
              src={background}
              className="absolute flex h-32 w-full justify-center rounded-xl bg-cover object-cover"
            />

            <div className="absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-white dark:border-gray-800 bg-pink-400 dark:!border-navy-700">
              <LazyLoad
                onContentVisible={() => {
                  console.log("loaded");
                }}
              >
                <img
                  className="h-full w-full rounded-full object-cover"
                  src={avatar}
                  alt="profile image"
                />
              </LazyLoad>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              {name}
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {job}
            </span>
          </div>
          <div className="mt-4 mb-3 flex gap-14 md:!gap-10">
            <div className="flex flex-col items-center justify-center">
              <p className="text-2xl font-bold text-navy-700 dark:text-white">
                {pengalaman} Tahun
              </p>
              <p className="text-sm font-normal text-gray-600">Pengalaman</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="text-2xl font-bold text-navy-700 dark:text-white">
                {formatFollower(followers)}
              </p>
              <p className="text-sm font-normal text-gray-600">Followers</p>
            </div>
          </div>

          <div className="mt-4 flex space-x-3 lg:mt-6 ">
            <Button color="primary" onClick={() => openModal()}>
              <HiOutlineInformationCircle className="mr-1 h-4 w-4" />
              Cek Detail
            </Button>
            <Button color="light" onClick={handleChat}>
              <HiOutlineChat className="mr-1 h-4 w-4" />
              Kirim Pesan
            </Button>
            <Getdetaildokter
              id={id}
              openModal={isModalOpen}
              closeModal={closeModal}
            />
          </div>
        </div>
      </Card>
    </>
  );
}

Profilecard.propTypes = {
  profile: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    job: PropTypes.string.isRequired,
    pengalaman: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
  }).isRequired,
  openModal: PropTypes.func,
};

export default Profilecard;
