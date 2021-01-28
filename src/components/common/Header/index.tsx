import React, { FunctionComponent } from "react";
import { MainNavBar } from "./MainNavBar";
import { TopNavBar } from "./TopNavBar";

export const Header: FunctionComponent = () => {
  return (
    <div className="header">
      <TopNavBar />
      <MainNavBar />
    </div>
  );
};
