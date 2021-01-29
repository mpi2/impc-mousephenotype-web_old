import React, { useEffect, useState } from "react";
import { Header } from "../common/Header";
import { MenuItem } from "../common/Header/MainNavBar";

const sortChildren = (itemA: MenuItem, itemB: MenuItem) => {
  const itemASort = itemA.sort;
  const itemBSort = itemB.sort;
  
  if(!itemASort || !itemBSort) {
      console.log({ itemA, itemB });

  }
  if (
    itemASort !== undefined &&
    itemBSort !== undefined &&
    itemASort !== itemBSort
  ) {
    return itemASort - itemBSort;
  }
  if (itemASort === itemBSort) {
    return itemASort ? itemASort : -1;
  }
  return 0;
};

export const DataPageTemplate = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  useEffect(() => {
    fetch("https://www.mousephenotype.org/jsonmenu/").then(res =>
      res.json().then((json: MenuItem[])=> {
        json.forEach(element => {
            element.children?.sort(sortChildren);
        });
        setMenuItems(json);
      })
    );
  }, []);

  return <Header menuItems={menuItems} />;
};
