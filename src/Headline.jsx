import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

function Headline({ img, title, subtitle, origin, url }) {
  return (
    <>
      <div className="article-bg">
        <a href={url} rel="noreferrer" target="_blank">
          <div className="article-img-container">
            <img src={img} />
          </div>
        </a>
        <div className="article-texts">
          <h1>
            {title}
            {/* <a href={url}>{title}</a> */}
            {/* <nav>
              <Link to={url}>{title}</Link>
            </nav> */}
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
