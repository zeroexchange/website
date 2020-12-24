import './app.scss';

import {
  faBars,
  faCheck,
  faCoins,
  faEnvelope,
  faGift,
  faPaperPlane,
  faQuestion,
  faRocket,
  faSearch,
  faTimes,
} from '@fortawesome/free-solid-svg-icons'
import { faDiscord, faFacebook, faTelegram, faTwitter } from '@fortawesome/free-brands-svg-icons'

import React from 'react';
import Routes from './Routes'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(
  faSearch,
  faCheck,
  faPaperPlane,
  faCoins,
  faRocket,
  faFacebook,
  faTwitter,
  faDiscord,
  faTelegram,
  faEnvelope,
  faQuestion,
  faBars,
  faTimes,
  faGift,
)

export default function App() {
  return (<Routes></Routes>)
}
