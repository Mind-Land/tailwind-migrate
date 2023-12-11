function Bubblechatreply({ text, name }) {
  return (
    <>
      <div className="flex items-start gap-2.5">
        <img
          className="w-8 h-8 rounded-full object-cover"
          src="/img/rafiq.jpg"
          alt="Jese image"
        />
        <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-xl dark:bg-gray-700">
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <span className="text-sm font-semibold text-gray-900 dark:text-white">
              {name}
            </span>
          </div>
          <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
            {text}
          </p>
        </div>
      </div>
    </>
  );
}

export default Bubblechatreply;
