import { Badge, Button } from "flowbite-react";
import { HiChatAlt2, HiTrendingUp, HiUserGroup } from "react-icons/hi";
import Getpopulararticles from "../pages/templates/Getpopulararticles";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import HeroImage from "../assets/lottie/new.json";

function Homepage() {
  let naviget = useNavigate();

  return (
    <>
      <div className="h-screen">
        <section className="bg-color-primary-500 dark:bg-gray-800 h-full flex flex-col items-center justify-center">
          <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-7">
              <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-5xl text-white">
            <div
              className="mr-auto place-self-center lg:col-span-7"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <h1 className="max-w-2xl text-color-primary-500 mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-5xl dark:text-white">
                Mindland
                <br />
                Teman Setia Kamu
              </h1>
              <p className="max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl dark:text-gray-100">
                Chat psikolog, test tingkat stress, forum diskusi, artikel
                kesehatan mental, dan chat bersama exppert.
              </p>
              <Button
                href="#"
                className="inline-flex items-center justify-center"
                color="light"
                onClick={() => naviget("/checknow")}
              >
                Periksa Sekarang
              </Button>
              <p className="mt-6 mb-4 font-bold text-white dark:text-white">
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

              <Lottie className="dark:" animationData={HeroImage} alt="hero" />
              <Lottie
                animationData={HeroImage}
                alt="hero"
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
      <div className="bg-white dark:bg-gray-900">
        <section className="">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-md sm:text-center">
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                Sign up for our newsletter
              </h2>
              <p className="mx-auto mb-8 max-w-2xl  text-gray-500 md:mb-12 sm:text-xl dark:text-gray-400">
                Stay up to date with the roadmap progress, announcements and
                exclusive discounts feel free to sign up with your email.
              </p>
              <form action="#">
                <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                  <div className="relative w-full">
                    <label className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                      Email address
                    </label>
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 16"
                      >
                        <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                        <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                      </svg>
                    </div>
                    <input
                      className="block p-3 pl-9 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Enter your email"
                      type="email"
                      id="email"
                      required=""
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
                <div className="mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer dark:text-gray-300">
                  We care about the protection of your data.{" "}
                  <a
                    href="#"
                    className="font-medium text-primary-600 dark:text-primary-500 hover:underline"
                  >
                    Read our Privacy Policy
                  </a>
                  .
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Homepage;
