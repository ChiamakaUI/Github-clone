import React from 'react';

import "./Style.css";
import loader from "./loading.gif"


const loading = () => {
    return (
      <div className="loading mx-auto">
        <img src={loader} alt="loading" className="mx-auto"  />
      </div>
    );
}

export default loading
