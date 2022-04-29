import React from "react";

// BoxSelector is a functional component below
export default function CircleSelector(props) {
  return (
    <div className="CircleSelector">
      Circle Selector
      <button
        className={props.button === 1 ? "selected" : ""}
        onClick={() => props.handleSelect(1)}
      >
        {props.button === 1 ? props.message : "SELECT CIRCLE 1"}
      </button>
      <button
        className={props.button === 2 ? "selected" : ""}
        onClick={() => props.handleSelect(2)}
      >
        {props.button === 2 ? props.message : "SELECT CIRCLE 2"}
      </button>
      <button
        className={props.button === 3 ? "selected" : ""}
        onClick={() => props.handleSelect(3)}
      >
        {props.button === 3 ? props.message : "SELECT CIRCLE 3"}
      </button>
      <button
        className={props.button === 4 ? "selected" : ""}
        onClick={() => props.handleSelect(4)}
      >
        {props.button === 4 ? props.message : "SELECT CIRCLE 4"}
      </button>
    </div>
  );
}
