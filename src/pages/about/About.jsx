import { Badge } from "flowbite-react";
import { HiChatAlt2, HiTrendingUp, HiUserGroup } from "react-icons/hi";
import aboutus from "/img/hero/aboutus.png"

const people = [
  {
    id: 1,
    name: "Abdul Malik Matoha",
    role: "UI Designer / Frontend Developer",
    imageUrl: "img/avatar/malik.png",
  },
  {
    id: 2,
    name: "Mohamad Rafiq Daud",
    role: "Frontend Developer",
    imageUrl: "img/avatar/rafiq.jpg",
  },
  {
    id: 3,
    name: "M. Diki Iswari",
    role: "Frontend Developer",
    imageUrl: "img/avatar/diki.jpg",
  },
  {
    id: 4,
    name: "Yanuar Faturahman",
    role: "Backend Developer",
    imageUrl: "img/avatar/rafiq.jpg",
  },
  {
    id: 5,
    name: "Azmi Maulidan",
    role: "Frontend Developer",
    imageUrl: "img/avatar/malik.png",
  },
];

function About() {
  return (
    <>
      <div className="h-screen">
        <section className="bg-white dark:from-gray-800 dark:bg-gray-900 h-full flex flex-col items-center justify-center">
          <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-7">
              <h1 className="max-w-2xl text-color-primary-500 mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-5xl dark:text-white">
                About Us
              </h1>
              <p className="max-w-2xl mb-6 font-light text-gray-800 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-100">
                Mind Land merupakan pusat kesehatan mental di era digital.
                Aplikasi konsultasi dan tes psikologi untuk edukasi dan
                dukungan. Artikel kami mendorong perawatan mental sebagaimana
                fisik. Harapan baru, pemahaman diri, langkah awal pemulihan.
                Komunitas diskusi, dukungan, kesehatan mental lebih baik.
              </p>
            </div>
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
              <img
                src={aboutus}
                style={{ mixBlendMode: "luminosity" }}
                alt="about us hero image"
              />
            </div>
          </div>
        </section>
      </div>
      <div className="bg-gray-50 dark:bg-gray-800 py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="max-w-2xl text-color-primary-500 mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-5xl dark:text-white">
              Meet our Team
            </h2>
            <p className="max-w-2xl mb-6 font-light text-gray-800 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-100">
              Tim kami terdiri dari Front-End Developer, Back-End Developer &
              UI/UX Designer
            </p>
          </div>
          <ul
            role="list"
            className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
          >
            {people.map((person) => (
              <li key={person.id}>
                <div className="flex items-center gap-x-6">
                  <img
                    className="h-16 w-16 rounded-full"
                    src={person.imageUrl}
                    alt=""
                  />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900 dark:text-white">
                      {person.name}
                    </h3>
                    <p className="text-sm font-semibold leading-6 text-gray-500 dark:text-color-primary-200">
                      {person.role}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="h-screen">
        <section className="bg-white dark:from-gray-800 dark:bg-gray-900 h-full flex flex-col items-center justify-center">
          <div className="flex items-center justify-center flex-col max-w-7xl ">
            <h2 className="max-w-2xl text-color-primary-500 mb-16 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-5xl dark:text-white">
              Layanan Kami
            </h2>
            <ol className="items-center sm:flex px-8">
              <li className="relative mb-6 sm:mb-0">
                <div className="flex items-center">
                  <div className=" flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                    <Badge color="primary" icon={HiChatAlt2}></Badge>
                  </div>
                </div>
                <div className="mt-3 sm:pe-8">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    AI Chat
                  </h3>
                  <p className="text-base font-normal text-gray-500 dark:text-gray-400 ">
                    Merupakan fitur untuk user yang ingin cepat mendapatkan
                    jawaban dari masalah mental health
                  </p>
                </div>
              </li>
              <li className="relative mb-6 sm:mb-0">
                <div className="flex items-center">
                  <div className=" flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                    <Badge color="primary" icon={HiTrendingUp}></Badge>
                  </div>
                </div>
                <div className="mt-3 sm:pe-8">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Test Mental
                  </h3>
                  <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                    Merupakan fitur untuk check seberapa besar tingkat depresi
                    dan kecemasan berlebihan pengguna
                  </p>
                </div>
              </li>
              <li className="relative mb-6 sm:mb-0">
                <div className="flex items-center">
                  <div className="flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                    <Badge color="primary" icon={HiUserGroup}></Badge>
                  </div>
                </div>
                <div className="mt-3 sm:pe-8">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Forum Diskusi
                  </h3>
                  <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                    Merupakan fitur untuk menjalin komunikasi antar masyarakat
                    mengenai psikologis dan kehidupan sehari-hari
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </section>
      </div>
    </>
  );
}

export default About;
