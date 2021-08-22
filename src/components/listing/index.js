import React from 'react'
import { Link } from '@reach/router'

import { asCurrency } from '../../utils/number'
import styles from './styles.module.css'

function Listing({ listing }) {
  if (!listing) {
    return null
  }

  const { id, image, title, address, description, price } = listing

  return (
    
    <div className="table-container">
      <table className="table table-responsive table-striped border-none">
    
        
        <tr>
          <td className="d-table-cell card-image">
            <img className="img-responsive" src={`/server/${image}`} alt={address} />
          </td>
          <td className="title d-table-cell">
            
              <h3>{title}</h3>
              <h3> &pound;{asCurrency(price)}</h3>
           
           
              <h6>{address}</h6>
            
          </td>
          <td className="description d-table-cell">
            <p>{description}</p>
          </td>
          <td className="actions d-table-cell">
            <Link to={`/details/${id}`}>
              <button className="btn btn-primary">Go to property</button>
            </Link>
          </td>
      </tr>
      </table>
    </div>
    
  )
}

export default Listing
