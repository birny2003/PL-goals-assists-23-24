import React from "react";
import goals from "../src/images/goal.jpg";
import assists from "../src/images/assist.png";
export default function Footballer(props) {
  return (
    <div className="footballer-profile">
      <img src={props.img}></img>
      <h3>{props.name}</h3>
      <h4>{props.club}</h4>
      <div className="stats">
        <img src={goals}></img>
        <p>{props.goals}</p>
        <img src={assists}></img>
        <p>{props.assists}</p>
        <p>Total = {props.total}</p>
      </div>
    </div>
  );
}
