import { TextInput, Button, Badge } from "flowbite-react";
import {
  HiSearch,
  HiChatAlt2,
  HiUserGroup,
  HiTrendingUp,
} from "react-icons/hi";
import Doctorcard from "../../components/Doctorcard";
import HeroDoctor from "../../assets/lottie/Herodoctor.json";
import Lottie from "lottie-react";

const Doctor = () => {
  return (
    <>
      <div className="h-screen">
        <section className="bg-white dark:from-gray-800 dark:bg-gray-900  h-full flex flex-col items-center justify-center">
          <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-7">
              <h1 className="max-w-2xl text-color-primary-500 mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-5xl dark:text-white">
                Cari Dokter
              </h1>
              <p className="max-w-2xl mb-6 font-light text-gray-800 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-100">
                tidak perlu cemas dengan kondisi kamu sekarang, coba tanyakan
                keluhanmu kepada dokter expert.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge color="primary" icon={HiChatAlt2}>
                  Chat AI
                </Badge>
                <Badge color="primary" icon={HiUserGroup}>
                  Forum Diskusi
                </Badge>
                <Badge color="primary" icon={HiTrendingUp}>
                  Cek Tingkat Stress
                </Badge>
              </div>
              <div className="flex gap-2 mt-6">
                <TextInput
                  id=""
                  sizing="lg"
                  type="email"
                  placeholder="Taukah kamu pisang dapat.."
                  required
                  onChange=""
                  value="Cari Dokter.."
                  className="flex-1"
                />
                <Button color="primary" className="flex-2">
                  <HiSearch className="h-6 w-6" />
                </Button>
              </div>
            </div>
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
              <Lottie animationData={HeroDoctor} alt="hero" />
            </div>
          </div>
        </section>
      </div>
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <section className="h-full flex flex-col items-center justify-center">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <h3 className="text-2xl font-bold dark:text-white mb-6 text-color-primary-500">
              Dokter Terpopuler
            </h3>
            <div className="grid gap-10 lg:grid-cols-1">
              <Doctorcard />
            </div>
            <h3 className="mt-6 text-2xl font-bold dark:text-white mb-6 text-color-primary-500">
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
                    onChange=""
                    value=""
                    className="flex-grow md:flex-grow-0 w-1/3"
                  />
                  <div className="hidden md:block items-center text-center">
                    <Button size="sm" color="primary">
                      Cari
                    </Button>
                  </div>
                </div>
                <div className="hidden md:block">
                  <p className="text-gray-700 dark:text-gray-400 flex items-center text-sm">
                    Menampilkan 3 daftar dokter
                  </p>
                </div>
              </div>
            </div>
            <div className="grid gap-10 lg:grid-cols-1">
              <Doctorcard />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Doctor;
