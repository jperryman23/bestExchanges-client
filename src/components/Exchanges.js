import React from 'react';
import Kraken from './Exchanges/Kraken';
import CoinCap from './Exchanges/CoinCap';
import Poloniex from './Exchanges/Poloniex';
import Bittrex from './Exchanges/Bittrex';

const Exchanges = (props) => (

<div className="four-chart-row">

    <Kraken currency={props.currency}/>
    <CoinCap currency={props.currency}/>
    <Poloniex currency={props.currency}/>
    <Bittrex currency={props.currency}/>
  </div>

)
export default Exchanges;
