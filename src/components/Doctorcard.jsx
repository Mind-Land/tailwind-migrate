"use client";

import { Card } from "flowbite-react";
import { DokterUnggulan } from "../data/index";
import { HiOutlineChat, HiOutlineInformationCircle } from "react-icons/hi";

function Doctorcard() {
  return (
    <div className="grid gap-10 lg:grid-cols-3">
      {DokterUnggulan.map((dokter) => {
        return (
          <div key={dokter.id}>
            <Card className="max-w-sm">
              <div className="flex flex-col items-center pb-5">
                <img
                  className="mb-3 shadow-lg object-cover"
                  style={{ height: "96px", width: "96px", borderRadius: "50%" }}
                  src={dokter.image}
                  alt=""
                />

                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  {dokter.title}
                </h5>
                <p className="text-xs font-bold text-gray-500 dark:text-gray-400">
                  {dokter.experience}
                </p>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {dokter.specialist}
                </span>
                <div className="mt-4 flex space-x-3 lg:mt-6">
                  <a
                    href="#"
                    className="inline-flex items-center rounded-lg border border-gray-300 bg-color-primary-500 px-4 py-2 text-center text-sm font-medium text-white hover:bg-color-primary-700 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                  >
                    <HiOutlineInformationCircle />
                    Cek Detail
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                  >
                    <HiOutlineChat />
                    Kirim Pesan
                  </a>
                </div>
              </div>
            </Card>
          </div>
        );
      })}
    </div>
  );
}

export default Doctorcard;
