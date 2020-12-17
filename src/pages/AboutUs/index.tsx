import './styles.scss';

import Layout from '../../layout/MainLayout';
import React from 'react'

export default function AboutUsPage() {
  return (
    <Layout hasSnow={false}>
      <div className="container">
        <div className="columns">
          <div className="column np is-2">
          </div>
          <div className="column np">
            <div className="slide" id="Why">
              <div className="slide-inner">
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout >
  )
}
