import * as React from "react";


function Lezione_1_12() {
    const totalProducts = 10; // 0 or 10
  
    const renderTotal = () => (
      <div>
        <h1>There are {totalProducts} products</h1>
      </div>
    )
  
    return (
      <>
      { totalProducts ? <Total valuer={totalProducts} /> : <Empty />}
      </>
    )
  }
  
  export default Lezione_1_12
  
// Total Component
interface TotalProps {
  valuer: number;
}
const Total = (props: TotalProps ) => (
  <div>
    <h1>There are {props.valuer} products</h1>
  </div>
)

  // Empty Component
  function Empty() {
    return (
      <div>
        <em>No items in cart</em>
      </div>
    )
  }