import PropTypes from "prop-types";

function Headline({ img, title, subtitle, origin, url }) {
  return (
    <>
      <div className="article-bg">
        <a href={url}>
          <div className="article-img-container">
            <img src={img} />
          </div>
        </a>
        <div className="article-texts">
          <h1>
            <a href={url}>{title}</a>
          </h1>
          <p className="article-origin">{origin}</p>
          <p className="subtitle">{subtitle}</p>
        </div>
      </div>
    </>
  );
}

export default Headline;

Headline.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  origin: PropTypes.string,
  url: PropTypes.string,
};
