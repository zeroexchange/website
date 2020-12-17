import React from 'react'

const BottomList = ({ goToSite }) => (
  <ul className="bottom-list">
    <li className="animated fadeInUpMicro d300 delay100">
      <img src="/coingecko.png" alt="CoinGecko" className="white-bg" />
    </li>
    <li className="animated fadeInUpMicro d300 delay150">
      <img src="/coinmarketcap.png" alt="CoinMarketCap" className="white-bg" />
    </li>
    <li className="animated fadeInUpMicro d300 delay200">
      <img src="/defipulse.png" alt="DefiPulse" className="white-bg" />
    </li>
  </ul>
)

export default BottomList
