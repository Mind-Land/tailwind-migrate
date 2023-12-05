import { useQuery } from "@tanstack/react-query";
import { getArticles } from "../../globals/api";
import Horizontalcard from "../../components/Horizontalcard";
import ArticlecardSkeleton from "../../components/Cardskeleton";

function Getpopulararticles() {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["PopularArticleQuery"],
    queryFn: getArticles,
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

  const sortedArticles = [...data].sort((a, b) => b.viewed - a.viewed);
  const popularArticles = sortedArticles.slice(0, 2);

  return popularArticles.map((article) => (
    <Horizontalcard key={article.id} article={article} />
  ));
}

export default Getpopulararticles;
