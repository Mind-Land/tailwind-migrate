import { HiSearch } from "react-icons/hi";
import { useState } from "react";
import { TextInput } from "flowbite-react";
import GetDoctor from "../templates/GetDoctor";

function Showdoctor() {
  const [searchTerm, setSearchTerm] = useState("");
  const [doctorsCount, setDoctorsCount] = useState(0);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleDoctorsCountChange = (count) => {
    setDoctorsCount(count);
  };
  return (
    <>
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <section className="h-full flex flex-col items-center justify-center w-full">
          <div className="py-8 mx-auto max-w-screen-xl lg:py-16  w-full">
            <h3
              className="text-2xl font-bold dark:text-white mb-6 text-color-primary-500"
              id="doctor-section"
            >
              Cari Dokter
            </h3>
            <div className="mx-auto text-center lg:mb-10 mb-8">
              <div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-row justify-between items-center">
                <div className="flex gap-2 flex-grow">
                  <TextInput
                    id=""
                    sizing="sm"
                    type="email"
                    placeholder="Nama/Spesialis"
                    required
                    icon={HiSearch}
                    onChange={handleSearch}
                    value={searchTerm}
                    className="flex-grow md:flex-grow-0 w-1/3"
                  />
                </div>
                <div className="hidden md:block">
                  <p className="text-gray-700 dark:text-gray-400 flex items-center text-sm">
                    Menampilkan {doctorsCount} daftar dokter
                  </p>
                </div>
              </div>
            </div>
            <div className="grid gap-10 md:grid-cols-3">
              <GetDoctor
                searchTerm={searchTerm}
                onDoctorsCountChange={handleDoctorsCountChange}
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Showdoctor;
