import React from 'react';
import Kraken from './Exchanges/Kraken';
import CoinCap from './Exchanges/CoinCap';
import Poloniex from './Exchanges/Poloniex';
import GDAX from './Exchanges/GDAX';

const Exchanges = (props) => (

<div>
    <Kraken currency={props.currency}/>
    <CoinCap currency={props.currency}/>
    <Poloniex currency={props.currency}/>
    <GDAX currency={props.currency}/>

</div>
)
export default Exchanges;
