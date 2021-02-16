import React from 'react'

import "./Style.css";

const Repository = (props) => {
    return (
      <div className="repo">
        <div>
          <div className="repoTitle">
            <i className="fa fa-book pr-1" />
            <a href={props.repo.url} target="_blank" rel="noopener noreferrer">
              <span> {props.repo.name} </span>
            </a>
          </div>

          <span className="desc"> {props.repo.description}</span>
        </div>

        <div className="d-flex">
          <div className="subitem">
            <i className="fa fa-code pr-1" />
            <span> {props.repo.primaryLanguange?.name ?? ""} </span>
          </div>

          <div className="subitem">
            <i className="fa fa-star pr-1" />
            <span>{props.repo.stargazerCount} </span>
          </div>

          <div className="subitem">
            <i className="fa fa-code-fork pr-1" />
            <span>{props.repo.forkCount}</span>
                </div>
                
        </div>
      </div>
    );
}

export default Repository
