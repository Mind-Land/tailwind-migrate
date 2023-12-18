function Dropdownchat() {
  return (
    <>
      <div
        id="dropdownNotification"
        className="z-20 hidden w-full max-w-md bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-800 dark:divide-gray-700 border-2 border-color-gray-400 dark:border-gray-600 h-[30rem] overflow-y-auto"
        aria-labelledby="dropdownNotificationButton"
      >
        <div className="block px-4 py-2 font-medium  text-gray-700 rounded-t-lg bg-gray-50 dark:bg-gray-800 dark:text-white">
          Chat Dokter
        </div>
        <div className="p-3">
          <label htmlFor="input-group-search" className="sr-only">
            Cari Dokter
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="input-group-search"
              className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Cari dokter"
            />
          </div>
        </div>
        <div className="divide-y divide-gray-100 dark:divide-gray-700">
          <a
            href="#"
            className="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <div className="flex-shrink-0">
              <img
                className="rounded-full w-11 h-11 object-cover"
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZG9jdG9yfGVufDB8fDB8fHww"
                alt="Leslie image"
              />
            </div>
            <div className="w-full ps-3">
              <div className="text-gray-500 text-sm mb-1.5 dark:text-gray-400">
                <span className="font-semibold text-gray-900 dark:text-white">
                  Leslie Livingston
                </span>
                <br />
                <span>Pesan : hahaha kamu juga ya</span>
              </div>
              <div className="text-xs text-blue-600 dark:text-blue-500">
                1 hour ago
              </div>
            </div>
          </a>
          <hr />
        </div>
      </div>
    </>
  );
}

export default Dropdownchat;
