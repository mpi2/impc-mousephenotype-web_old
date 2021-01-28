import React, { FunctionComponent } from "react";

export const TopNavBar: FunctionComponent = () => {
  return (
    <div className="header__nav-top d-none d-lg-block">
      <div className="container text-right">
        <div className="row">
          <div className="col">
            <div className="menu-top-nav-container">
              <ul id="menu-top-nav" className="menu">
                <li
                  id="menu-item-13"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-13"
                >
                  <a href={`${process.env.REACT_APP_BASE_URL}/help/`}>Help</a>
                </li>
                <li
                  id="menu-item-2533"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2533"
                >
                  <a href={`${process.env.REACT_APP_BASE_URL}/forum/`}>IMPC Cloud</a>
                </li>
                <li
                  id="menu-item-15"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-15"
                >
                  <a href={`${process.env.REACT_APP_BASE_URL}/contact-us/`}>Contact us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
