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
      <div>
        <h1> Luey's Page  <img src="/../../images/litecoin.png" alt="litecoin" height="35px"/> </h1>

        <Exchanges currency='LTC' />
        <p className="address" onClick={this.showAddress}> {this.state.addressShown ? '3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy' : 'Lueys BTC public address'}</p>
      </div>
    )
  }
}
