import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

function ArticlecardSkeleton() {
  return (
    <article className="p-6 w-full bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div className="flex justify-between items-center mb-5 text-gray-500">
        <Skeleton width={50} height={20} />
        <Skeleton width={100} height={20} />
      </div>
      <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <Skeleton width={100} height={20} />
      </h2>
      <p className="mb-5 font-light text-gray-500 dark:text-gray-400">
        <Skeleton count={3} />
      </p>
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Skeleton circle width={14} height={14} />
          <Skeleton width={80} height={20} />
        </div>
        <Skeleton width={60} height={20} />
      </div>
    </article>
  );
}

export default ArticlecardSkeleton;
