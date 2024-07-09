import React, { useState, CSSProperties }from 'react'
import DotLoader from "react-spinners/DotLoader";

function Loader() {

    let [loading, setLoading] = useState(true);
  
  return (
    <div>
    <div className="sweet-loading text-center">
   

    <DotLoader
      color='#000'
      loading={loading}
      cssOverride=''
      size={80}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  </div>
    </div>
  )
}

export default Loader