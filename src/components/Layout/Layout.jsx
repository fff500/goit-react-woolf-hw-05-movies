import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { Header } from "components/Header/Header";

export const Layout = () => {
  return (
    <>
      <Header />

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};