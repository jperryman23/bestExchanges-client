import React from 'react';
// import Chart from 'chart.js';

export default class Kraken extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        BTC_USD: 0,
        BTC_ETH: 0,
        BTC_LTC: 0,
        BTC_DASH: 0,
        currency: this.props.currency
      }

    }

    componentDidMount() {

      /////API CALLS //AXIOS
      // const ASKS_URL = 'http://localhost:3000/api/kraken';
      // $(() => {
      //     $.get(ASKS_URL).then(data => {
      //         // console.log(data);
      //           btcRate = data.[0]
      //
      //           //   this.setState(() => ({
      //           //     BTC_USD: btcRate  // api data.data.rate.[]  ==> btcRate
      //           //   }) )
      //           // }
      //     })
      // })

      this.setState(() => ({
        BTC_USD: 8321  // api data.data.rate.[]  ==> btcRate
      }) )
    }

  render(){
    return(
      <div>
        <h3>Kraken</h3>
        <p>BTC_USD: {this.state.BTC_USD}</p>
        {this.state.currency === 'ETH' && <p> BTC_ETH: {this.state.BTC_ETH}</p>}
        {this.state.currency === 'LTC' && <p> BTC_LTC: {this.state.BTC_LTC}</p>}
        {this.state.currency === 'DASH' && <p> BTC_DASH: {this.state.BTC_DASH}</p>}


      </div>


    )
  }

}
