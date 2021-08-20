import React from 'react'
import { Link } from '@reach/router'
import classnames from 'classnames'

import { asCurrency } from '../../utils/number'
import styles from './styles.module.css'

function Listing({ listing }) {
  if (!listing) {
    return null
  }

  const { id, image, title, address, description, price } = listing

  return (
    <div className="row">
    <div className={styles.column}>
      <div className={styles.card}>
        <div className="card-image">
          <img className="img-responsive" src={`/server/${image}`} alt={address} />
        </div>
        <div className="card-header">
          <div className="card-title h5">{title}</div>
          <div className="card-title h6">
            &pound;
            {asCurrency(price)}
          </div>
          <div className="card-subtitle text-gray">{address}</div>
        </div>
        <div className="card-body">{description}</div>
        <div className="card-footer">
          <Link className="btn btn-primary" to={`/details/${id}`}>
            Go to property
          </Link>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Listing
