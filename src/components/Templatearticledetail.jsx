import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Templatearticledetail({ article }) {
  const { title, slug, body, author, summary, imageUrl, category, createdAt } =
    article;

  const formatter = new Intl.DateTimeFormat("id-ID", {
    hour: "numeric",
    minute: "numeric",
    year: "numeric",
    month: "long",
    day: "2-digit",
  });

  return (
    <>
      <header className="mb-4 lg:mb-6 not-format">
        <address className="flex items-center mb-6 not-italic">
          <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
            <img
              className="mr-4 w-16 h-16 rounded-full"
              src={author.avatar}
              alt={author.fullName}
            />
            <div>
              <Link
                href="#"
                rel="author"
                className="text-xl font-bold text-gray-900 dark:text-white"
              >
                {author.fullName}
              </Link>
              <p className="text-base text-gray-500 dark:text-gray-400">
                {author.job}
              </p>
              <p className="text-base text-gray-500 dark:text-gray-400">
                <time dateTime="2022-02-08" title="February 8th, 2022">
                  {formatter.format(Date.parse(createdAt))}
                </time>
              </p>
            </div>
          </div>
        </address>
        <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
          {title}
        </h1>
      </header>
      <div
        dangerouslySetInnerHTML={{ __html: body }}
        className="dark:text-white"
      />
    </>
  );
}

Templatearticledetail.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    author: PropTypes.object.isRequired,
    body: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
  }).isRequired,
};

export default Templatearticledetail;
