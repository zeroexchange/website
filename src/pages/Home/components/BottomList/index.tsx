import React from 'react'

const BottomList = ({ goToSite }) => (
  <ul className="bottom-list">
    <li className="animated fadeInUpMicro d300 delay100" onClick={() => goToSite('https://www.coingecko.com/en/coins/zero-exchange')}>
      <img src="/coingecko.png" alt="CoinGecko" className="white-bg" />
    </li>
    <li className="animated fadeInUpMicro d300 delay150" onClick={() => goToSite('https://coinmarketcap.com/currencies/zero-exchange/')}>
      <img src="/coinmarketcap.png" alt="CoinMarketCap" className="white-bg" />
    </li>
    <li className="animated fadeInUpMicro d300 delay200" onClick={() => goToSite('https://www.dextools.io/app/uniswap/pair-explorer/0x40f0e70a7d565985b967bcdb0ba5801994fc2e80')}>
      <img src="/dextools.png" alt="DexTools" className="white-bg" />
    </li>
    <li className="animated fadeInUpMicro d300 delay250" onClick={() => goToSite('https://github.com/zeroexchange')}>
      <img src="/github.png" alt="Github" className="white-bg" />
    </li>
  </ul>
)

export default BottomList
