import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Imagecard({ article }) {
  const { title, author, timestamp, summary, imageUrl, slug } = article;

  const truncatedBody = summary.slice(0, 100) + " ...";
  const truncatedTitle = title.slice(0, 70) + "...";

  // Logika untuk menghitung selisih hari antara postAt dan tanggal sekarang
  const postDate = new Date(timestamp);
  const currentDate = new Date();
  const daysAgo = Math.floor((currentDate - postDate) / (1000 * 60 * 60 * 24));

  return (
    <>
      <div className="max-w-sm md:min-w-[390px] overflow-hidden bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            className="rounded-t-lg w-full h-[180px] object-cover"
            src={imageUrl}
            alt={title}
          />
        </a>
        <div className="p-5">
          <Link to={`/articles/detailarticles/${slug}`}>
            <h5 className="mb-2 text-xl font-bold tracking-tight truncate text-gray-900 dark:text-white">
              {truncatedTitle}
            </h5>
          </Link>
          {/* <div className="inline-flex mb-2"></div> */}
          <p className="text-gray-500 dark:text-gray-400 mb-4 flex items-center">
            <img
              className="rounded-full w-8 object-cover mr-2"
              src={author.avatar}
              alt={author.fullName}
            />
            {author.fullName}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {truncatedBody}
          </p>
          <div className="flex justify-between items-center">
            <Link
              to={`/articles/detailarticles/${slug}`}
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
            </Link>
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
    author: PropTypes.object.isRequired,
    timestamp: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
  }).isRequired,
};

export default Imagecard;
