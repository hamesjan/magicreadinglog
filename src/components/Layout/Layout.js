import { Fragment } from "react";

import MainNavigation from "./MainNavigation";

const Layout = (props) => {
  return (
    <Fragment>
      <MainNavigation title={props.title} />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
