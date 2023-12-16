import { Badge, Button } from "flowbite-react";
import {
  HiChatAlt2,
  HiTrendingUp,
  HiUserGroup,
  HiFingerPrint,
} from "react-icons/hi";
import Getpopulararticles from "../pages/templates/Getpopulararticles";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import { Accordion } from "flowbite-react";
import { faq } from "../data";
import HeroCheckNow from "../assets/lottie/heroCheck.json";
import Featurecard from "../components/card/Featurecard";
import key from "/img/hero/key.png";

function Homepage() {
  let naviget = useNavigate();

  return (
    <>
      <div className="h-screen">
        <section className="bg-white dark:bg-gray-900 h-full flex flex-col items-center justify-center">
          <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-7">
              <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-5xl text-color-primary-500 dark:text-white">
                Mindland
                <br />
                Teman Setia Kamu
              </h1>
              <p className="max-w-2xl mb-6 font-light text-gray-800 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-100">
                Chat psikolog, test tingkat stress, forum diskusi, artikel
                kesehatan mental, dan chat bersama exppert.
              </p>
              <Button
                href="#"
                className="inline-flex items-center justify-center"
                color="primary"
                onClick={() => naviget("/login")}
              >
                Periksa Sekarang
              </Button>
              <p className="mt-6 mb-4 font-bold text-gray-800 dark:text-white">
                Layanan Favorite Kami
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
            </div>
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
              <Lottie
                animationData={HeroCheckNow}
                alt="hero"
                className="drop-shadow"
                data-aos="fade-left"
                data-aos-duration="1500"
              />
            </div>
          </div>
        </section>
      </div>
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <section className="h-full flex flex-col items-center justify-center">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 w-full">
            <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
              <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                Article terbaru
              </h2>
              <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
                Tidak perlu cemas dengan kondisi kamu sekarang, setelah membaca
                kamu mungkin akan merasa lebih baik
              </p>
            </div>
            <div className="grid gap-8 lg:grid-cols-2">
              <Getpopulararticles />
            </div>
          </div>
        </section>
      </div>
      <div className="bg-color-primary-500 dark:bg-gray-800 ">
        <section className=" h-full flex flex-col items-center justify-center">
          <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-20 lg:grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-7">
              <h2 className=" text-lg max-w-2xl mb-5 font-semibold text-white lg:mb-10 md:text-lg tracking-tight leading-none lg:text-3xl dark:text-gray-100">
                Cobain Fitur Unggulan di <strong>MindLand</strong>
              </h2>
              <div className="flex flex-wrap gap-2 mb-5">
                <Featurecard />
              </div>
              <div>
                <p className="max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl dark:text-gray-100">
                  Jika anda punya keluhan, segera hubungi para ahli dengan
                  mengklik tombol di bawah.!
                </p>

                <Button color="light" onClick={() => naviget("/doctor")}>
                  <HiFingerPrint className="mr-2 h-5 w-5" />
                  Cari Ahli
                </Button>
              </div>
            </div>
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
              <img src={key} alt="hero image for feature section" />
            </div>
          </div>
        </section>
      </div>
      <div className="bg-white dark:bg-gray-900">
        <section className="flex flex-col items-center justify-center max-w-screen-xl mx-auto py-20 px-4">
          <div className="flex flex-col mb-20 text-center ">
            <h1 className="text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Pertanyaan yang sering di tanyakan
            </h1>
          </div>
          <div className="grid gap-2 lg:grid-cols-2 mb-5 w-full">
            {faq.map((faq) => {
              return (
                <div key={faq.id}>
                  <Accordion
                    collapseAll
                    className="flex flex-wrap gap-2 shadow-md"
                    data-aos="fade-up"
                  >
                    <Accordion.Panel>
                      <Accordion.Title>{faq.title}</Accordion.Title>
                      <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                          {faq.desc}
                        </p>
                      </Accordion.Content>
                    </Accordion.Panel>
                  </Accordion>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
}

export default Homepage;
