import React, { useEffect, useState } from "react";
import { Header } from "../common/Header";
import { MenuItem } from "../common/Header/MainNavBar";

export const DataPageTemplate = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  useEffect(() => {
    fetch("https://www.mousephenotype.org/jsonmenu/").then(res =>
      res.json().then(json => setMenuItems(json))
    );
  }, []);

  return <Header menuItems={menuItems} />;
};
