import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Card } from "flowbite-react";

const DoctorcardSkeleton = () => {
  return (
    <div className="grid gap-10 lg:grid-cols-3">
      <Card className="max-w-sm">
        <div className="flex flex-col items-center pb-5">
          <Skeleton />
          <Skeleton />

          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            <Skeleton />
          </h5>
          <p className="text-xs font-bold text-gray-500 dark:text-gray-400">
            <Skeleton />
          </p>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            <Skeleton />
          </span>
          <div className="mt-4 flex space-x-3 lg:mt-6">
            <a
              href="#"
              className="inline-flex items-center rounded-lg border border-gray-300 bg-color-primary-500 px-4 py-2 text-center text-sm font-medium text-white hover:bg-color-primary-700 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
            >
              <Skeleton />
              <Skeleton />
            </a>
            <a
              href="#"
              className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            >
              <Skeleton />
              <Skeleton />
            </a>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default DoctorcardSkeleton;
