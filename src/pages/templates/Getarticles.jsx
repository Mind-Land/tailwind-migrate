import { useQuery } from "@tanstack/react-query";
import { getArticles } from "../../globals/api";
import ArticlecardSkeleton from "../../components/skeleton/Cardskeleton";
import Imagecard from "../../components/card/Imagecard";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Pagination } from "flowbite-react";

function Getarticles({ searchTerm, selectedCategory, onArticleCountChange }) {
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isError, isLoading } = useQuery({
    queryKey: ["ArticleQuery", currentPage],
    queryFn: () => getArticles(currentPage),
  });

  const onPageChange = (page) => setCurrentPage(page);

  const [filteredArticles, setFilteredArticles] = useState([]);

  useEffect(() => {
    // Lakukan sesuatu ketika data dari query berubah
    if (data) {
      const filtered = data.results.filter((article) => {
        const isTitleMatch = article.title
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
        const isAuthorMatch = article.author.fullName
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
        const isCategoryMatch =
          selectedCategory === "" || article.category === selectedCategory;

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

      // console.log(filtered);

      // Update jumlah artikel dengan memanggil onArticleCountChange
      onArticleCountChange(filtered.length);
    }
  }, [searchTerm, selectedCategory, data, onArticleCountChange]);

  return (
    <>
      {isLoading && (
        <div className="grid gap-6 lg:grid-cols-3">
          <ArticlecardSkeleton />
          <ArticlecardSkeleton />
          <ArticlecardSkeleton />
        </div>
      )}
      {isError && <p>Gagal mengambil data artikel!</p>}
      {!isLoading && !isError && (
        <div className="grid gap-6 lg:grid-cols-3">
          {filteredArticles.map((article) => (
            <Imagecard key={article.id} article={article} />
          ))}
        </div>
      )}
      {filteredArticles.length === 0 && (
        <div className="text-center w-screen">
          <p className="text-gray-500 dark:text-gray-400">Artikel kosong!</p>
        </div>
      )}
      {!isLoading && !isError && (
        <div className="flex items-center justify-center pt-5">
          <Pagination
            currentPage={data.currentPage}
            totalPages={data.totalPages}
            onPageChange={onPageChange}
          />
        </div>
      )}
    </>
  );
}

Getarticles.propTypes = {
  searchTerm: PropTypes.string,
  selectedCategory: PropTypes.string,
  onArticleCountChange: PropTypes.func,
};

export default Getarticles;
