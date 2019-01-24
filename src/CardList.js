import React from "react";
import Card from "./Card";

export default function CardList({ robots }) {
  const cardsArray = robots.map((robot, i) => {
    return (
      <Card
        id={robot.id}
        name={robot.name}
        email={robot.email}
        key={robot.id}
      />
    );
  });
  return <div>{cardsArray}</div>;
}
