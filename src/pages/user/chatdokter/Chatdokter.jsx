import { Button } from "flowbite-react";
import { HiPaperAirplane } from "react-icons/hi";

function Chatdokter() {
  return (
    <>
      <div className="bg-white  dark:bg-gray-900 h-screen">
        <div className="h-screen flex flex-col max-w-screen-lg mx-auto">
          <div className="flex-1 pt-16 overflow-auto h-screen scrollbar-hide">
            <div className="flex justify-start mb-5">
              <div className="flex items-start gap-2.5">
                <img
                  className="w-8 h-8 rounded-full object-cover"
                  src="/img/rafiq.jpg"
                  alt="Jese image"
                />
                <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-xl dark:bg-gray-700">
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">
                      AI
                    </span>
                  </div>
                  <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
                    Hai, Kenalin aku Rafiq. kalau ada yang kamu pikirin
                    mendingan kamu ngomongin aja ke aku, aku bakal jadi temen
                    yang setia dengerin keluhan kamu
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-start mb-5">
              <div className="flex items-start gap-2.5">
                <img
                  className="w-8 h-8 rounded-full object-cover"
                  src="/img/rafiq.jpg"
                  alt="Jese image"
                />
                <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-xl dark:bg-gray-700">
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">
                      AI
                    </span>
                  </div>
                  <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
                    Hai, Kenalin aku Rafiq. kalau ada yang kamu pikirin
                    mendingan kamu ngomongin aja ke aku, aku bakal jadi temen
                    yang setia dengerin keluhan kamu
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-start mb-5">
              <div className="flex items-start gap-2.5">
                <img
                  className="w-8 h-8 rounded-full object-cover"
                  src="/img/rafiq.jpg"
                  alt="Jese image"
                />
                <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-xl dark:bg-gray-700">
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">
                      AI
                    </span>
                  </div>
                  <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
                    Hai, Kenalin aku Rafiq. kalau ada yang kamu pikirin
                    mendingan kamu ngomongin aja ke aku, aku bakal jadi temen
                    yang setia dengerin keluhan kamu
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-start mb-5">
              <div className="flex items-start gap-2.5">
                <img
                  className="w-8 h-8 rounded-full object-cover"
                  src="/img/rafiq.jpg"
                  alt="Jese image"
                />
                <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-xl dark:bg-gray-700">
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">
                      AI
                    </span>
                  </div>
                  <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
                    Hai, Kenalin aku Rafiq. kalau ada yang kamu pikirin
                    mendingan kamu ngomongin aja ke aku, aku bakal jadi temen
                    yang setia dengerin keluhan kamu
                  </p>
                </div>
              </div>
            </div>
          </div>

          <form className="flex-none pb-10 lg:pb-5 flex gap-2 mb-5">
            <input
              type="text"
              id="large-input"
              className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <Button color="primary">
              <HiPaperAirplane className="w-6 h-6" />
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Chatdokter;
