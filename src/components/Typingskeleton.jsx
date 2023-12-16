function Typingskeleton() {
  return (
    <>
      <div role="status" className="max-w-sm animate-pulse mt-4">
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-500 w-60 mb-4"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-500 max-w-[360px] mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-500 mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-500 max-w-[330px] mb-2.5"></div>
        <span className="sr-only">Loading...</span>
      </div>
    </>
  );
}

export default Typingskeleton;
