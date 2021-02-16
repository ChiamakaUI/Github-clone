import React from 'react';

import "./Style.css";


const Navbar = (props) => {

  
    
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark navSearch">
        <img
          className="mr-3 avatar"
          src={props.image}
          width="50"
          height="50"
          alt="ProfileImage "
        />
        <h3 style={{ color: "white" }}>{props.userName}</h3>
        {props.children}
      </nav>
    );
}

export default Navbar;