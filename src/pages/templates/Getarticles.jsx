import { useQuery } from "@tanstack/react-query";
import { getArticles } from "../../globals/api";
import ArticlecardSkeleton from "../../components/Cardskeleton";
import Imagecard from "../../components/Imagecard";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

function Getarticles({ searchTerm, selectedCategory, onArticleCountChange }) {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["ArticleQuery"],
    queryFn: getArticles,
  });

  const [filteredArticles, setFilteredArticles] = useState([]);

  useEffect(() => {
    // Lakukan sesuatu ketika data dari query berubah
    if (data) {
      const filtered = data.filter((article) => {
        const isTitleMatch = article.title
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
        const isAuthorMatch = article.author
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
        const isCategoryMatch =
          selectedCategory === "" ||
          article.kategory.toLowerCase() === selectedCategory.toLowerCase();

        return (
          (searchTerm === "" && selectedCategory === "") ||
          (searchTerm !== "" &&
            isCategoryMatch &&
            (isTitleMatch || isAuthorMatch)) ||
          (searchTerm !== "" && isTitleMatch) ||
          (searchTerm === "" && isCategoryMatch)
        );
      });

      setFilteredArticles(filtered);

      // Update jumlah artikel dengan memanggil onArticleCountChange
      onArticleCountChange(filtered.length);
    }
  }, [searchTerm, selectedCategory, data, onArticleCountChange]);

  // const filteredArticles = data
  //   ? data.filter((article) => {
  //       const isTitleMatch = article.title
  //         .toLowerCase()
  //         .includes(searchTerm.toLowerCase());
  //       const isAuthorMatch = article.author
  //         .toLowerCase()
  //         .includes(searchTerm.toLowerCase());
  //       const isCategoryMatch =
  //         selectedCategory === "" ||
  //         article.kategory.toLowerCase() === selectedCategory.toLowerCase();

  //       return (
  //         (searchTerm === "" && selectedCategory === "") ||
  //         (searchTerm !== "" &&
  //           isCategoryMatch &&
  //           (isTitleMatch || isAuthorMatch)) ||
  //         (searchTerm !== "" && isTitleMatch) ||
  //         (searchTerm === "" && isCategoryMatch)
  //       );
  //     })
  //   : [];

  // useEffect(() => {
  //   onArticleCountChange(data ? data.length : 0);
  // }, [data, onArticleCountChange]);

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
  onArticleCountChange: PropTypes.func,
};

export default Getarticles;
