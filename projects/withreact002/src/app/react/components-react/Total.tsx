import * as React from "react";
// Total Component
interface TotalProps {
    valuer: number;
  }
  export const Total = (props: TotalProps ) => (
    <div>
      <h1>There are {props.valuer} products</h1>
    </div>
  )