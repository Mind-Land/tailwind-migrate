"use client";
import { useNavigate } from "react-router-dom";
import { HiFingerPrint } from "react-icons/hi";
import HeroCheckNow from "../../assets/heroCheck.json";
import Lottie from "lottie-react";
import Featurecard from "../../components/Featurecard";

const Checknowpage = () => {
  let naviget = useNavigate();
  return (
    <>
      <div className="h-screen">
        <section className="bg-gradient-to-br from-white via-color-primary-100 to-red-200 dark:from-gray-800 dark:via-color-primary-900 dark:to-gray-800  h-full flex flex-col items-center justify-center">
          <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-7">
              <h1 className=" text-lg max-w-2xl mb-5 font-light text-gray-800 lg:mb-5 md:text-lg tracking-tight leading-none lg:text-xl dark:text-gray-100">
                Cobain Fitur Unggulan di <strong>MindLand</strong>
              </h1>
              <div className="flex flex-wrap gap-2 mb-5">
                <Featurecard />
              </div>
              <div>
                <p className="max-w-2xl mb-6 font-light text-gray-800 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-100">
                  Jika anda punya keluhan, segera hubungi para ahli dengan
                  mengklik tombol di bawah.!
                </p>
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-color-primary-500 hover:bg-color-primary-600 focus:ring-4 focus:ring-color-primary-300 dark:focus:ring-color-primary-900"
                  onClick={() => naviget("/doctor")}
                >
                  Cari Ahli.
                  <HiFingerPrint />
                </a>
              </div>
            </div>
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
              <Lottie animationData={HeroCheckNow} alt="hero" />
            </div>
          </div>
        </section>
      </div>
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <section className="h-full flex flex-col items-center justify-center">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="flex justify-between text-gray-500 mx-auto lg:mb-16 mb-8">
              <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white">
                Daftar Dokter
              </h2>
              <p
                className=" text-gray-500  dark:text-gray-400 hover:text-color-primary-500 cursor-pointer"
                onClick={() => naviget("/doctor")}
              >
                Lihat Semua
              </p>
            </div>
          </div>
          <div className="py-5 px-4 mx-auto">
            <h1 className="2xl mb-6 font-light text-gray-800 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-100">
              Dimohon untuk menggunakan bahasa yang sopan ketika mengirim pesan
              ke Dokter.
            </h1>
          </div>
        </section>
      </div>
    </>
  );
};

export default Checknowpage;
