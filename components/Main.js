import React from "react";

import Card from "./Card";

// import { Container } from './styles';

function Main({ results }) {
  return (
    <section className="bg-gray-700 pt-10 px-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-5 md:gap-3">
      {results.length > 0 &&
        results.map((result) => {
          return <Card key={result.id} item={result} />;
        })}
    </section>
  );
}

export default Main;
