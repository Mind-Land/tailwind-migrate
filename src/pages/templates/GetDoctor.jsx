import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Pagination } from "flowbite-react";

import ArticlecardSkeleton from "../../components/skeleton/Cardskeleton";
import Profilecard from "../../components/card/Profilecard";
import { getDoctors } from "../../globals/api";

function GetDoctor({ searchTerm, onDoctorsCountChange }) {
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isError, isLoading } = useQuery({
    queryKey: ["DoctorQuery", currentPage],
    queryFn: () => getDoctors(currentPage),
  });

  const onPageChange = (page) => setCurrentPage(page);

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
      {!isLoading && !isError && (
        <div className="flex overflow-x-auto sm:justify-center pt-5">
          <Pagination
            currentPage={data.currentPage}
            totalPages={data.totalPages}
            onPageChange={onPageChange}
          />
        </div>
      )}
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
