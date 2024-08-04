import React from "react";
import logo from "./logo.svg";
import "./Card.css";

type CardProps = {
  title: String;
  image?: String;
};

const Card = (props: CardProps) => {
  return (
    <div className="card-main">
      {props.image ? <img src={logo} /> : null}
      <div className="card-content">{props.title}</div>
    </div>
  );
};

export default Card;
