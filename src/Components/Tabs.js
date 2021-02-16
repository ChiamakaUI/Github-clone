import React from 'react';

import "./Style.css";

const Tabs = () => {
    return (
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <p className="nav-link mb-0 active">Repositories</p>
        </li>
        <li className="nav-item">
          <a className="nav-link mb-0" href="https:">
            Packages
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link mb-0" href="https:">
            People
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link mb-0" href="https:">
            Projects
          </a>
        </li>
      </ul>
    );
}

export default Tabs
