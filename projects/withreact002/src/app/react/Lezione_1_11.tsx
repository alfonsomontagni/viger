import * as React from "react";


function Lezione_1_11() {
    const totalProducts = 0; // 0 or 10
  
    const renderTotal = () => (
      <div>
        <h1>lectio 11 There are {totalProducts} products</h1>
      </div>
    )
  
    return (
      <>
        { totalProducts ? renderTotal() : <Empty />}
      </>
    )
  }
  
  export default Lezione_1_11
  
  // Empty Component
  function Empty() {
    return (
      <div>
        <em>No items in cart</em>
      </div>
    )
  }