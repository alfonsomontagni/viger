import * as React from "react";
import { Empty } from "./components-react/Empty";
import { Total } from "./components-react/Total";


function Lezione_1_13() {
    const totalProducts = 13; // 0 or 10
  
  
    return (
      <>
      { totalProducts > 0 ? <Total valuer={totalProducts} /> : <Empty />}
      </>
    )
  }
  
  export default Lezione_1_13
  


   