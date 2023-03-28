import React from "react";
import { Frown } from "react-feather";
import { useRouteError } from "react-router-dom";
const PageNotFound = () => {
  const { status, statusText } = useRouteError();
  console.log(status, statusText);

  return (
    <section className="max-w-screen-lg h-[100vh] mx-auto p-4 pt-16 flex items-center justify-center">
      <div>
        <h1 className="font-bold text-5xl text-center mt-5">{status}</h1>
        <h1 className="font-bold text-3xl text-center mt-2 flex items-center gap-4 justify-center">
          Page {statusText} <Frown size={30} />
        </h1>
      </div>
    </section>
  );
};

export default PageNotFound;
