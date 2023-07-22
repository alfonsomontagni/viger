import * as React from "react";
import { Empty } from "./components-react/Empty";
import { Total } from "./components-react/Total";


function Lezione_1_14() {
  const [totalProducts, setTotalProducts] = React.useState<number>(0)
  //  const totalProducts = 14; // 0 or 10
  function inc(e: React.MouseEvent) {
    setTotalProducts(s => s + 1)
  }
  //console.log("render App 14: ",totalProducts)
  return (
    <>
      {totalProducts > 0 ? <Total valuer={totalProducts} /> : <Empty />}
      <button onClick={inc}>Add</button>
    </>
  )
}

export default Lezione_1_14



