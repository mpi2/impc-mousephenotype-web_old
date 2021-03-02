import { FunctionComponent } from "react";
import "./MainNavBar.css";
export interface MenuItem {
    name: string;
    link: string;
    id?: number;
    classes?: string;
    sort?: number;
    children?: MenuItem[];
}
export interface INavBarProps {
    menuItems: MenuItem[];
}
export declare const MainNavBar: FunctionComponent<INavBarProps>;
//# sourceMappingURL=MainNavBar.d.ts.map