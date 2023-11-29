import PropTypes from "prop-types";

function Horizontalcard({ article }) {
  const {title, author, postAt, body} = article;

  console.log(article)

  const truncatedBody = body.slice(0, 200) + " ...";

  // Logika untuk menghitung selisih hari antara postAt dan tanggal sekarang
  const postDate = new Date(postAt);
  const currentDate = new Date();
  const daysAgo = Math.floor((currentDate - postDate) / (1000 * 60 * 60 * 24));

  return (
    <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div className="flex justify-between items-center mb-5 text-gray-500">
        <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
          <svg
            className="mr-1 w-3 h-3"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
              clipRule="evenodd"
            ></path>
            <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path>
          </svg>
          Artikel
        </span>
        <span className="text-sm">{`${daysAgo} hari yang lalu`}</span>
      </div>
      <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <a href="#">{title}</a>
      </h2>
      <p className="mb-5 font-light text-gray-500 dark:text-gray-400">
        {truncatedBody}
      </p>
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img
            className="w-7 h-7 rounded-full"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
            alt="Bonnie Green avatar"
          />
          <span className="font-medium dark:text-white">{author}</span>
        </div>
        <a
          href="#"
          className="inline-flex items-center font-medium text-color-primary-600 dark:text-primary-500 hover:underline"
        >
          Selengkapnya
          <svg
            className="ml-2 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </article>
  );
}

Horizontalcard.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    postAt: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};

export default Horizontalcard;
