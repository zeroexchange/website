import React from 'react'

const SlideThree = () => (
  <div className="slide">
    <div className="slide-inner">
      <div className="slide-left">
        <h2>Liquidity Pools</h2>
        <p>
          When liquidity pools - or LPs - provide liquidity, they receive pool tokens in exchange and they earn LP fees. Each pool token represents the LP’s share of the pool’s assets along with the trading fee percentage. So, these LP tokens are generated whenever funds are deposited into a pool. LPs can then trade these tokens or move them to other exchanges. And when an LP decides to reclaim their funds, their pool tokens are burned.
        </p>
      </div>
      <div className="slide-right">
      <p>Users can do more with ZERO than simply swapping ARC-20 tokens. They can also provide liquidity. To become a liquidity provider (LP), users must fund a pool with an ARC-20 token and an equivalent amount of AVAX. So, if the price of AVAX is sitting at $5 and DAI is pegged at precisely $1, a user would have to kick in 1 AVAX and 5 DAI to the AVAX-DAI pool.</p>
      <p>When traders come along, ZERO essentially balances out the tokens in a pool based on the demand from users to buy and sell them. Thus, any ARC-20 token can be listed and traded on ZERO based on their CPMMM equation x * y = k. The characters, “x” and “y” represent the amount of AVAX and ARC-20 tokens in a pool and “k” is a constant.</p>
      <p>If a user comes in to buy AVAX with DAI, the supply of AVAX will go down causing its price to rise. At this point, the protocol incentivizes LPs to provide more AVAX to rebalance the pool.</p>

      </div>
    </div>
  </div>
)

export default SlideThree
