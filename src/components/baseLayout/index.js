import React from "react";
import Hero from "../hero";
import Header from "../header";

function BaseLayout({ children, miniHeader = false, miniHero = false }) {
  return (
    <React.Fragment>
      <Header miniHeader={miniHeader} />
      <main role="main" className="d-flex-row mb-1">
        <Hero miniHero={miniHero} />
        {children}
      </main>
    </React.Fragment>
  );
}

export default BaseLayout;
