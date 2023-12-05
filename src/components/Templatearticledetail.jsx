import PropTypes from "prop-types";

function Templatearticledetail({ article }) {
  const { body } = article
  return <>
    <div dangerouslySetInnerHTML={{ __html: body }} />
  </>
}

Templatearticledetail.propTypes = {
  article: PropTypes.shape({
    body: PropTypes.string.isRequired,
  }).isRequired,
};


export default Templatearticledetail;
