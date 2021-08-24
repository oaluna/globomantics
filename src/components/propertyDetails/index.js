import React from "react";
import classnames from "classnames";

import KeyFeatures from "../keyFeatures";
import Gallery from "../gallery";
import Map from "../map";

import { asCurrency } from "../../utils/number";
import styles from "./styles.module.css";

function PropertyDetails({ listing }) {
  if (!listing) {
    return null;
  }

  const { image, title, address, description, price, features, details } =
    listing;
  const priceClasses = classnames(styles.price, "text-success", "text-right");

  return (
    <React.Fragment>
      <div className={styles.container}>
        <div className="row">
          <div className="col-md-9 col-xs-8 w-75">
            <h2>{title}</h2>
            <h3 className="text-dark text-small">{description}</h3>
              <small>Priced from</small>
          </div>
          <div className="column col-3 col-xs-12 mt-0 pt-0">
            <h1 className={priceClasses}>
              <br />
              &pound;
              {asCurrency(price)}
            </h1>
          </div>
        </div>

        <Gallery image={image} title={title} />

            <KeyFeatures features={features} />
        <div className="detail-row">
          <div className="detail-container column col-md-3 col-xs-12">

            <h2 className="text-bold mt-3">Full Details</h2>
            {details.map((detail) => (
              <p key={detail}>{detail}</p>
            ))}
            <br />
            <br />
          </div>
        </div>
            <div className="row">
            <div className="col-md-10">
              <h2 className="text-bold mt-3">Map</h2>
              <Map address={address} />
            </div>
            </div>
      </div>
    </React.Fragment>
  );
}

export default PropertyDetails;
