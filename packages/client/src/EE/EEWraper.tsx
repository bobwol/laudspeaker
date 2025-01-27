import React from "react";

const EEWrapper = ({ children }: { children: React.ReactElement }) => {
  if (process.env.REACT_APP_EE) {
    return children;
  } else {
    return <></>;
  }
};
export default EEWrapper;
