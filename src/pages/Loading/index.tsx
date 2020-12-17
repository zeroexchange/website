import './styles.scss';

import CircleLoader from '../../shared/components/CircleLoader'
import React from 'react'

export default function Loading() {
  return (
    <div className="loading">
      <CircleLoader />
    </div>
  )
}
