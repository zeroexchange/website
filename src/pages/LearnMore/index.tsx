import './styles.scss';

import Layout from '../../layout/MainLayout';
import React from 'react'
import SlideFive from './components/SlideFive';
import SlideFour from './components/SlideFour';
import SlideOne from './components/SlideOne';
import SlideSchedule from './components/SlideSchedule';
import SlideSeven from './components/SlideSeven';
import SlideSix from './components/SlideSix';
import SlideThree from './components/SlideThree';

export default function LearnMore() {
  return (
    <Layout hasSnow={false}>
      <div className="container">
        <div className="columns">
          <div className="column np">
            <SlideOne />
            <SlideSchedule />
            <SlideThree />
            <SlideFour />
            <SlideFive />
            <SlideSix />
            <SlideSeven />
          </div>
        </div>
      </div>
    </Layout >
  )
}
