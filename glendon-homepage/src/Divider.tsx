import React from "react";
import "./Divider.css";

type DividerProps = {
  title: String;
};

const Divider = ({ title }: DividerProps) => (
  <header className="divider-container">{title}</header>
);

export default Divider;
