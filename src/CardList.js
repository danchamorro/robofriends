import React from "react";
import Card from "./Card";

export default function CardList({ robots }) {
  const cardsArray = robots.map(robot => {
    return (
      <Card
        id={robot.id} // <----------- Passing Props
        name={robot.name} // <----------- Passing Props
        email={robot.email} // <----------- Passing Props
        key={robot.id}
      />
    );
  });
  return <div>{cardsArray}</div>;
}
