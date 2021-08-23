import React from "react";
import "./styles.module.css";

function Gallery({ image, title }) {
  return (
    <figure className="figure">
      <img className="img-responsive" src={`/server/${image}`} alt={title} />
      <label
        htmlFor="img-responsive"
        className="figure-caption text-center text-small"
      >
        {title}
      </label>
    </figure>
  );
}

export default Gallery;
