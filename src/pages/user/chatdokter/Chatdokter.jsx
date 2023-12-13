import { Button } from "flowbite-react";
import { HiPaperAirplane } from "react-icons/hi";

function Chatdokter() {
  return (
    <>
      <section className="max-w-screen-lg mx-auto bg-white dark:bg-gray-900">
        <div className="flex-1 p:2 sm:p-6 justify-between flex flex-col h-screen">
          <div
            id="messages"
            className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch scrollbar-hide pt-20"
          >
            <div className="chat-message">
              <div className="flex items-end justify-end">
                <div className="flex flex-col space-y-2 text-sm max-w-xs mx-2 order-1 items-end">
                  <div>
                    <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-color-primary-600 text-white ">
                      Your error message says permission denied, npm global
                      installs must be given root privileges.
                    </span>
                  </div>
                </div>
                <img
                  src="/img/rafiq.jpg"
                  alt="My profile"
                  className="w-6 h-6 rounded-full order-2 object-cover"
                />
              </div>
            </div>
            <div className="chat-message">
              <div className="flex items-end">
                <div className="flex flex-col space-y-2 text-sm max-w-xs mx-2 order-2 items-start">
                  <div>
                    <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
                      Check the line above (it ends with a # so, running it as
                      root )<pre># npm install -g @vue/devtools</pre>
                    </span>
                  </div>
                </div>
                <img
                  src="/img/rafiq.jpg"
                  alt="My profile"
                  className="w-6 h-6 rounded-full order-1"
                />
              </div>
            </div>
          </div>
          <div className="border-t-2 border-gray-200 dark:border-gray-700 px-4 pt-4 mb-2 sm:mb-0">
            <div className="relative flex">
              <form className="flex gap-2 w-full">
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
        </div>
      </section>
    </>
  );
}

export default Chatdokter;
