import React from 'react';
import BTC_Chart from './HomeCharts/BTC_Chart';
import ETH_Chart from './HomeCharts/ETH_Chart';
import LTC_Chart from './HomeCharts/LTC_Chart';
import DASH_Chart from './HomeCharts/DASH_Chart';

const URL = 'https://api.coindesk.com/v1/bpi/historical/close.json'

const Home = () => (
  <div className="homePage">
    <div className="two-chart-row">
      <BTC_Chart chartTitle="30 days BTC Price History Chart" currency="BTC" />
      <ETH_Chart chartTitle="30 days ETH Price History Chart" currency="ETH" />
    </div>
    <div className="two-chart-row">
      <LTC_Chart chartTitle="30 days LTC Price History Chart" currency="LTC" />
      <DASH_Chart chartTitle="30 days DASH Price History Chart" currency="DASH" />
    </div>
  </div>
);

export default Home;
