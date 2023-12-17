import { useQuery } from "@tanstack/react-query";
import PropTypes from "prop-types";

import Articleskeleton from "../../components/skeleton/Articleskeleton";
import Templatearticledetail from "../../components/Templatearticledetail";
import { getArticleBySlug } from "../../globals/api";

function Getdetailarticle({ slug }) {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["DetailArticleQuery", slug],
    queryFn: () => getArticleBySlug(slug),
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
      {/* {data.map((article) => (
        <Templatearticledetail key={article.id} article={article} />
      ))} */}
      <Templatearticledetail article={data} />
    </>
  );
}

Getdetailarticle.propTypes = {
  slug: PropTypes.string.isRequired,
};

export default Getdetailarticle;
