import { useQuery } from "@tanstack/react-query";
import { getPopularArticle } from "../../globals/api";
import Horizontalcard from "../../components/card/Horizontalcard";
import ArticlecardSkeleton from "../../components/skeleton/Cardskeleton";

function Getpopulararticles() {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["PopularArticleQuery"],
    queryFn: getPopularArticle,
  });

  if (isLoading) {
    return (
      <>
        <ArticlecardSkeleton />
        <ArticlecardSkeleton />
      </>
    );
  }

  if (isError) {
    return <p>Error fetching data</p>;
  }

  const sortedArticles = [...data.results].sort((a, b) => b.hit - a.hit);
  const popularArticles = sortedArticles.slice(0, 2);

  return popularArticles.map((article) => (
    <Horizontalcard key={article.id} article={article} />
  ));
}

export default Getpopulararticles;
