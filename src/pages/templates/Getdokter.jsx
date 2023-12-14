import { useQuery } from "@tanstack/react-query";
import { getDoctors } from "../../globals/api";
import ArticlecardSkeleton from "../../components/skeleton/Cardskeleton";
import PropTypes from "prop-types";
import Profilecard from "../../components/card/Profilecard";
import { useEffect } from "react";

function Getdokter({ searchTerm, onDoctorsCountChange }) {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["DokterQuery"],
    queryFn: getDoctors,
  });

  const filteredDoctors = data
    ? data.filter(
        (dokter) =>
          dokter.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          dokter.role.toLowerCase().includes(searchTerm.toLowerCase())
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

Getdokter.propTypes = {
  searchTerm: PropTypes.string,
  onDoctorsCountChange: PropTypes.func,
  setModalData: PropTypes.func,
  setModalOpen: PropTypes.func,
};

export default Getdokter;
