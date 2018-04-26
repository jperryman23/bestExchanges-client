import React from 'react';
import Exchanges from './Exchanges';

export default class Huey extends React.Component {
  constructor() {
    super()
    this.state = {
      addressShown: false
    }
  }

  showAddress = () => {
    if(this.state.addressShown === false) {
      this.setState({ addressShown: true });
    } else {
      this.setState({ addressShown: false })
    }
  };

  render() {
    return (
      <div className="siblingsPage huey">

      <div className="sibTitle">

        <div className="sibName">
          <img src="/../../images/ethereum.png" alt="ethereum" height="50px"/>
          <div> HUEY'S PAGE </div>
        </div>

        <img src="/../../images/eth-letters.png" alt="dashl" height="85px"/>

      </div>

    <div className="bestRate">
      <div> Current Best BTH_ETH Rate: .06332 </div>
      <div> Exchange: Poloniex </div>
      <div> 5 BTC = 70.2 ETH </div>
    </div>


        <Exchanges currency='ETH' />


        <div className="address-huey" onClick={this.showAddress}>
          <img src="/../../images/bitcoin.png" alt="bitcoin" height="15px"/> {this.state.addressShown ? '1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2' : 'Hueys BTC public address'}</div>

      </div>
    )
  }
}
