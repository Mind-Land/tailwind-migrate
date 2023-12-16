import { useQuery } from "@tanstack/react-query";
import Articleskeleton from "../../components/skeleton/Articleskeleton";
import Templatearticledetail from "../../components/Templatearticledetail";
import { _Getdetailarticle } from "../../globals/api";

function Getdetailarticle() {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["DetailArticleQuery"],
    queryFn: _Getdetailarticle,
  });

  if (isLoading) {
    return (
      <>
        <Articleskeleton /> <br />
        <Articleskeleton /> <br />
        <Articleskeleton /> <br />
      </>
    );
  }

  if (isError) {
    return <p>Error fetching data</p>;
  }

  return (
    <>
      {data.map((article) => (
        <Templatearticledetail key={article.id} article={article} />
      ))}
    </>
  );
}

export default Getdetailarticle;
