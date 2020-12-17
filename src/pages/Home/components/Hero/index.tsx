import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Hero = ({ goToSite }) => (
  <div className="hero">
    <div className="columns fullhd-columns">
      <div className="hero-content column animated fadeInDownTiny d300 delay100">
        <img src="/logo-text-white.png" alt="logo text white" />
        <h1>Instant crypto swaps. Zero fees.</h1>
        <ul className="button-list">
          <li className="button is-primary" onClick={() => goToSite('https://app.zero.exchange')}>
            Launch App
          <FontAwesomeIcon icon="rocket" size="sm" />
          </li>
          <li className="text-link blue"
            onClick={() => goToSite('https://docs.zero.exchange')}>
            Read Our Blog
          </li>
        </ul>
      </div>
      <ul className="socials-list column is-2">
        <li className="animated fadeInRightMicro d300 delay250" onClick={() => goToSite('https://www.facebook.com/ZeroExchange-105556548092263')}>
          <FontAwesomeIcon icon={['fab', 'facebook']} />
        </li>
        <li className="animated fadeInRightMicro d300 delay200">
          <FontAwesomeIcon icon={['fab', 'twitter']} />
        </li>
        <li className="animated fadeInRightMicro d300 delay150" onClick={() => goToSite('https://discord.gg/5xwKdqrtDu')}>
          <FontAwesomeIcon icon={['fab', 'discord']} />
        </li>
        <li className="animated fadeInRightMicro d300 delay100" onClick={() => goToSite('https://t.me/ZeroExchangeCommunity')}>
          <FontAwesomeIcon icon={['fab', 'telegram']} />
        </li>
      </ul>
    </div>
  </div>
)

export default Hero
