import { useEffect } from "react";
import PropTypes from "prop-types";

function Article({ title, image, description, author, date, backgroundColor }) {
  useEffect(() => {
    window.scrollTo(0, 100);
  }, []);
  return (
    <>
      <div
        style={{
          backgroundColor: backgroundColor,
          textAlign: "center",
          color: "white",
        }}
      >
        <div style={{ paddingBottom: 25, paddingTop: 25 }}>
          <h1 style={{ margin: 0, padding: 0, fontSize: 75 }}>{title}</h1>
          <span style={{ fontSize: 25 }}>
            by {author} on {date}
          </span>
        </div>

        <img src={image} alt={title} style={{ width: "100%" }} />
        <div style={{ textAlign: "left", margin: 25 }}>
          <h2 style={{ fontSize: 40, padding: 0, margin: 0 }}>Description</h2>
          <p style={{ padding: 10, fontSize: 20 }}>{description}</p>
        </div>
      </div>
    </>
  );
}

export default Article;

Article.propTypes = {
  title: PropTypes.string,
  image: PropTypes.image,
  description: PropTypes.string,
  author: PropTypes.string,
  date: PropTypes.string,
  backgroundColor: PropTypes.string,
};
