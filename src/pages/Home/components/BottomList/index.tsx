import React from 'react'

const BottomList = ({ goToSite }) => (
  <ul className="bottom-list">
    <li className="animated fadeInUpMicro d300 delay100" onClick={() => goToSite('https://www.coingecko.com/en/coins/zero-exchange')}>
      <img src="/coingecko.png" alt="CoinGecko" className="white-bg" />
    </li>
    <li className="animated fadeInUpMicro d300 delay150" onClick={() => goToSite('https://coinmarketcap.com/currencies/zero-exchange/')}>
      <img src="/coinmarketcap.png" alt="CoinMarketCap" className="white-bg" />
    </li>
    <li className="animated fadeInUpMicro d300 delay200 disabled">
      <img src="/defipulse.png" alt="DefiPulse" className="white-bg" />
    </li>
  </ul>
)

export default BottomList
