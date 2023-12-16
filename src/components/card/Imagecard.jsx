import PropTypes from "prop-types";

function Imagecard({ article }) {
  const { title, author, postAt, body } = article;

  console.log(article);

  const truncatedBody = body.slice(0, 100) + " ...";
  const truncatedTitle = title.slice(0, 70) + "...";

  const postDate = new Date(postAt);
  const currentDate = new Date();
  const daysAgo = Math.floor((currentDate - postDate) / (1000 * 60 * 60 * 24));

  return (
    <>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            className="rounded-t-lg w-full h-[180px] object-cover"
            src="https://source.unsplash.com/random/?night"
            alt=""
          />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              {truncatedTitle}
            </h5>
          </a>
          <p className="text-gray-500 dark:text-gray-400 mb-4">{author}</p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {truncatedBody}
          </p>
          <div className="flex justify-between items-center">
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-color-primary-500 rounded-lg hover:bg-color-primary-800 focus:ring-4 focus:outline-none focus:ring-color-primary-300 dark:bg-color-primary-600 dark:hover:bg-color-primary-700 dark:focus:ring-color-primary-800"
            >
              Selengkapnya
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
            <span className="text-gray-500 dark:text-gray-400">
              {`${daysAgo} hari lalu`}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
Imagecard.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    postAt: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};

export default Imagecard;
