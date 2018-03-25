import React from "react";
import classnames from "classnames";

const Icon = ({ className, ...other }) => (
  <i className={classnames("material-icons", className)} {...other} />
);

export default Icon;
