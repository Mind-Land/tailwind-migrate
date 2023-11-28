import { useQuery } from "@tanstack/react-query";
import { getArticles } from "../../globals/api";
import ArticlecardSkeleton from "../../components/ArticlecardSkeleton";
import Imagecard from "../../components/Imagecard";
import PropTypes from "prop-types";

function Getarticles({ searchTerm }) {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["ArticleQuery"],
    queryFn: getArticles,
  });

  const filteredArticles = data
    ? data.filter(
        (article) =>
          article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          article.author.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  return (
    <>
      {isLoading && (
        <>
          <ArticlecardSkeleton />
          <ArticlecardSkeleton />
        </>
      )}
      {isError && <p>Error fetching data</p>}
      {!isLoading &&
        !isError &&
        filteredArticles.map((article) => (
          <Imagecard key={article.id} article={article} />
        ))}
    </>
  );
}

Getarticles.propTypes = {
  searchTerm: PropTypes.string,
};

export default Getarticles;
