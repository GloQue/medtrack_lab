// eslint-disable-next-line no-unused-vars
import React from "react";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default RootLayout;
