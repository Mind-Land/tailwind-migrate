import { useQuery } from "@tanstack/react-query";
import { getArticles } from "../../globals/api";
import ArticlecardSkeleton from "../../components/ArticlecardSkeleton";
import Imagecard from "../../components/Imagecard";
import PropTypes from "prop-types";
import { useEffect } from "react";

function Getarticles({ searchTerm, selectedCategory, onArticleCountChange  }) {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["ArticleQuery"],
    queryFn: getArticles,
  });

  const filteredArticles = data
  ? data.filter((article) => {
      const isTitleMatch = article.title.toLowerCase().includes(searchTerm.toLowerCase());
      const isAuthorMatch = article.author.toLowerCase().includes(searchTerm.toLowerCase());
      const isCategoryMatch =
        selectedCategory === '' || article.kategory.toLowerCase() === selectedCategory.toLowerCase();

      return (
        (searchTerm === '' && selectedCategory === '') ||
        (searchTerm !== '' && isCategoryMatch && (isTitleMatch || isAuthorMatch)) ||
        (searchTerm !== '' && isTitleMatch) ||
        (searchTerm === '' && isCategoryMatch)
      );
    })
  : [];

  useEffect(() => {
    onArticleCountChange(filteredArticles.length);
  }, [filteredArticles.length, onArticleCountChange]);

  return (
    <>
      {isLoading && (
        <>
          <ArticlecardSkeleton />
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
  selectedCategory: PropTypes.string,
  onArticleCountChange: PropTypes.string
};

export default Getarticles;
