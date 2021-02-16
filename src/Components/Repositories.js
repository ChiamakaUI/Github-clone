import React from 'react'
import Repository from './Repository'

import './Style.css';


const Repositories = (props) => {
    return (
        <div className="repos">
            {props.repositories.map(
                (e, index) => (
              <Repository key={index} repo={e} />
                )
            )}
            
        </div>

            

    )
}

export default Repositories
