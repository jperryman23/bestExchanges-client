import React from 'react';
import Exchanges from './Exchanges';

export default class Duey extends React.Component {
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
      <div className="siblingsPage duey">
        <div className="sibTitle">

          <div className="sibName">
            <img src="/../../images/dash.png" alt="dash" height="50px"/>
            <div> DUEY'S PAGE </div>
          </div>


          <img src="/../../images/dash-letters.png" alt="dashl" height="35px"/>
        </div>

        <div className="bestRate">
          <div> Current Best BTC_DASH Rate: .06332 </div>
          <div> Exchange: Bittrex </div>
          <div> 5 BTC = 70.2 DASH </div>
        </div>

        <Exchanges currency='DASH' />
        <div className="address-duey" onClick={this.showAddress}>
            <img src="/../../images/bitcoin.png" alt="bitcoin" height="15px"/>
           {this.state.addressShown ? '1BTvBMSEYSEnklaP5eAu4m4GFg7xJaNVN2' : 'Dueys BTC public address'}</div>
      </div>
    )
  }
}
