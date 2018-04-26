import React from 'react';
import Exchanges from './Exchanges';

export default class Luey extends React.Component {
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
      <div className="siblingsPage luey">
        <div className="sibTitle">

          <div className="sibName">
            <img src="/../../images/litecoin.png" alt="litecoin" height="50px"/>
            <div> LUEY'S PAGE </div>
          </div>

          <img src="/../../images/ltc-letters.png" alt="dashl" height="50px"/>
        </div>


      <div className="bestRate">
      <div> Current Best BTC_LTC Rate: .06332 </div>
      <div> Exchange: Bittrex </div>
      <div> 5 BTC = 70.2 LTC </div>
      </div>

        <Exchanges currency='LTC' />

        <div className="address-luey" onClick={this.showAddress}>
          <img src="/../../images/bitcoin.png" alt="bitcoin" height="15px"/>
           {this.state.addressShown ? '3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy' : 'Lueys BTC public address'}</div>

      </div>
    )
  }
}
