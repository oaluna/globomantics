import React from "react";
import "./styles.module.css";
function KeyFeatures({ features }) {
  return (
    <React.Fragment>
      <div className="featureCard">
        <h3 className="text-bold">Key Features</h3>
        <ul className="mt-0 mb-0" style={{ listStyle: "none" }}>
          {features.map((feature) => (
            <li key={feature}>
              <h5>{feature}</h5>
            </li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
}

export default KeyFeatures;
