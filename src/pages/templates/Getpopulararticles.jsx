import { useQuery } from "@tanstack/react-query";
import { getArticles } from "../../globals/api";
import Horizontalcard from "../../components/Horizontalcard";
import ArticlecardSkeleton from "../../components/ArticlecardSkeleton";

function Getpopulararticles() {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["ArticleQuery"],
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

  return data.map((article) => (
    <Horizontalcard key={article.id} article={article} />
  ));

}

export default Getpopulararticles;