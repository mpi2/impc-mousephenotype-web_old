import React, { FunctionComponent } from "react";
import "./MainNavBar.css";

export const MainNavBar: FunctionComponent = () => {
  return (
    <div className="header__nav">
      <div className="container">
        <div className="row">
          <div className="col-6 col-md-3">
            <a
              href={process.env.REACT_APP_BASE_URL}
              className="header__logo-link active"
            >
              <img
                className="header__logo"
                src="https://dev.mousephenotype.org/wp-content/themes/impc/images/IMPC_logo.svg"
                alt="International Mouse Phenotyping Consortium Office Logo"
              />
            </a>
          </div>
          <div className="col-6 col-md-9 text-right">
            <div className="d-none d-lg-block"></div>
            <button
              className="navbar-toggler d-inline d-lg-none collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#navbarToggleExternalContent "
              aria-controls="navbarToggleExternalContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-bar top-bar"></span>
              <span className="icon-bar middle-bar"></span>
              <span className="icon-bar bottom-bar"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
