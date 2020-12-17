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
      <div className="container pb-6">
        <Hero goToSite={goToSite} />
        <BottomList goToSite={goToSite} />
      </div>
    </Layout >
  )
}
