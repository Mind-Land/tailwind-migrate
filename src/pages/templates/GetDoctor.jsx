import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import PropTypes from "prop-types";

import ArticlecardSkeleton from "../../components/skeleton/Cardskeleton";
import Profilecard from "../../components/card/Profilecard";
import { getDoctors } from "../../globals/api";

function GetDoctor({ searchTerm, onDoctorsCountChange }) {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["DoctorQuery"],
    queryFn: getDoctors,
  });

  const filteredDoctors = data
    ? data.results.filter(
        (dokter) =>
          dokter.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          dokter.job.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  useEffect(() => {
    onDoctorsCountChange(filteredDoctors.length);
  }, [filteredDoctors.length, onDoctorsCountChange]);

  return (
    <>
      {isLoading && (
        <>
          <ArticlecardSkeleton />
          <ArticlecardSkeleton />
          <ArticlecardSkeleton />
        </>
      )}
      {isError && <p>Error fetching data</p>}
      {!isLoading &&
        !isError &&
        filteredDoctors.map((dokter) => (
          <Profilecard key={dokter.id} profile={dokter} />
        ))}
    </>
  );
}

GetDoctor.propTypes = {
  searchTerm: PropTypes.string,
  onDoctorsCountChange: PropTypes.func,
  setModalData: PropTypes.func,
  setModalOpen: PropTypes.func,
};

export default GetDoctor;
