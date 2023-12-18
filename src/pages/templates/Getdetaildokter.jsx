import { useQuery } from "@tanstack/react-query";
import PropTypes from "prop-types";
import { Button } from "flowbite-react";

import { getDetailDokter } from "../../globals/api";
import Profiledetailmodal from "../../components/modal/Profiledetailmodal";

function Getdetaildokter({ id, openModal, closeModal }) {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["DetailDokterQuery", id],
    queryFn: () => getDetailDokter(id),
  });

  if (isLoading) {
    return (
      <Button disabled>
        <span className="loading loading-spinner loading-md"></span>
      </Button>
    );
  }

  if (isError) {
    return (
      <Button disabled color="failure">
        Error
      </Button>
    );
  }

  return (
    <>
      <Profiledetailmodal
        key={data.id}
        profileDetail={data}
        openModal={openModal}
        closeModal={closeModal}
      />
    </>
  );
}

Getdetaildokter.propTypes = {
  id: PropTypes.string,
  openModal: PropTypes.bool,
  closeModal: PropTypes.func,
};

export default Getdetaildokter;
