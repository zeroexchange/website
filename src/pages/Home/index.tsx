import './styles.scss';

import BottomList from './components/BottomList';
import Hero from './components/Hero';
import Layout from '../../layout/MainLayout';
import React from 'react'

export default function Home() {

  const goToSite = (str) => {
    window.open(str, "_blank");
  }

  return (
    <Layout hasSnow={true}>
      <div className="container">
        <Hero goToSite={goToSite} />
        <BottomList goToSite={goToSite} />
        <div className="beta">
          Trading with Zero Exchange comes with risk, please do your research.
        </div>
      </div>
    </Layout >
  )
}
