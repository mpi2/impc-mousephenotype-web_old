import React, { FunctionComponent } from "react";
import { INavBarProps, MainNavBar } from "./MainNavBar";
import { TopNavBar } from "./TopNavBar";


export const Header: FunctionComponent<INavBarProps> = ({ menuItems }) => {
         return (
           <div className="header">
             <TopNavBar />
             <MainNavBar menuItems={menuItems} />
           </div>
         );
       };
