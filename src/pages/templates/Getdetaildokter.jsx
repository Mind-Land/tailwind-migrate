import { getDetailDokter } from "../../globals/api";
import { useQuery } from "@tanstack/react-query";
import Profiledetailmodal from "../../components/Profiledetailmodal";
import PropTypes from "prop-types";


function Getdetaildokter({openModal, closeModal}) {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["DetailDokterQuery"],
    queryFn: getDetailDokter,
  });

  if (isLoading) {
    return <>Loading</>;
  }

  if (isError) {
    return <p>Error fetching data</p>;
  }

  return (
    <>
        <Profiledetailmodal key={data.id} profileDetail={data}  openModal={openModal} closeModal={closeModal}/>
    </>
  );
}

Getdetaildokter.propTypes = {
  openModal: PropTypes.bool,
  closeModal: PropTypes.func,
};

export default Getdetaildokter;
