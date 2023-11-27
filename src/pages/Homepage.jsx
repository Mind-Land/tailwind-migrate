import Navbarcomponent from "../components/Navbar";

function Homepage() {
  return (
    <div className="h-screen">
      <Navbarcomponent />
      <section className="bg-gradient-to-br from-white via-color-primary-100 to-red-200 dark:from-gray-800 dark:via-color-primary-900 dark:to-gray-800  h-full flex flex-col items-center justify-center">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl text-color-primary-500 mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-5xl dark:text-white">
              Solusi mental health kamu
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-800 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-100">
              Chat psikolog, test tingkat stress, forum diskusi, artikel
              kesehatan mental, dan chat bersama expoert.
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-color-primary-600 hover:bg-color-primary-600 focus:ring-4 focus:ring-color-primary-300 dark:focus:ring-color-primary-900"
            >
              Periksa Sekarang
            </a>
            <a
              href="#"
              className="bg-white inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg dark:bg-gray-700 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Chat Dokter
            </a>
            <p className="mt-6 font-bold">Our Services</p>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
              alt="mockup"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Homepage;
