import React from 'react';
import Chart from 'chart.js';

const BTC_URL = 'https://api.coindesk.com/v1/bpi/historical/close.json'
const bittrex_URL = "https://bittrex.com/api/v1.1/public/getmarketsummaries/"
// const BTC_ETH = 'https://bittrex.com/api/v1.1/public/getmarketsummary?market=btc-eth'
// const BTC_LTC = 'https://bittrex.com/api/v1.1/public/getmarketsummary?market=btc-ltc'
// const BTC_DASH = 'https://bittrex.com/api/v1.1/public/getmarketsummary?market=btc-eth'

export default class Bittrex extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        BTC_USD: 0,
        BTC_ETH: 0,
        BTC_LTC: 0,
        BTC_DASH: 0,
        currency: this.props.currency,
        Prices: {}
      }

    }

    componentDidMount() {

      // $(() => {
      //     $.get(BTC_ETH).then(data => {
      //         console.log(data);
      //           // btcRate = data.[0]
      //
      //           //   this.setState(() => ({
      //           //     BTC_USD: btcRate  // api data.data.rate.[]  ==> btcRate
      //           //   }) )
      //           // }
      //     })
      // })
      this.getPrices();
      // this.getETHPrice()


    }

    showGraph() {
        // Change this to the correct data object
        let Prices = this.state.Prices

        let tmp_label = []
        let tmp_data = []
        Object.keys(Prices).forEach(d => {
            tmp_label.push(d)
            tmp_data.push(Prices[d])
        })

        const canvas = this.refs.myChart
        const ctx = canvas.getContext('2d')

        return new Chart(ctx, {
            // line type chart
            type: 'line',
            data: {
                // adapt tmp_label here
                labels: tmp_label,
                datasets: [{
                    label: 'Last 30 days BTC Price',
                    // adapt tmp_label here
                    data: tmp_data,
                    backgroundColor: [
                        'rgba(251, 188, 30, 0.6)'
                    ],
                    borderColor: [
                        'rgba(27, 27, 27, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                tooltips: {
                    callbacks: {
                        // we custom tooltip that will show we point mouse data node in chart
                        label: (tooltipItem, data) => {
                            return 'Price: ' + tooltipItem.yLabel + ' USD';
                        }
                    }
                },
                legend: {
                    display: false
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        })
    }

    getPrices() {
        return fetch(BTC_URL)
            .then(r => r.json())
            .then(data => {
                // console.log('data: ', data)
                this.setState({ Prices: data.bpi })
              this.setState({ BTC_USD: '$' + data.bpi["2018-04-25"].toFixed(2)})
              this.showGraph()
            })
            .catch(err => {
                console.log(err)
            })
          }





  render(){
    return(
      <div className="single-chart">

        {
          this.state.currency === 'ETH' &&
          <div>
            <p> BTC_ETH: {this.state.BTC_ETH}</p>
            <div className="small-chart">
                    <div className="smallHeader">Bittrex 30-Day BTC-ETH Price History Chart </div>
                    <br/>
                    <canvas id="myChart" ref="myChart" />
                </div>
          </div>

      }
        {
          this.state.currency === 'LTC' &&
          <div>
            <p> BTC_LTC: {this.state.BTC_LTC}</p>
            <div className="small-chart">
                    <div className="smallHeader">Bittrex 30-Day BTC-LTC Price History Chart </div>
                    <br/>
                    <canvas id="myChart" ref="myChart" />
                </div>
          </div>

        }
        {
          this.state.currency === 'DASH' &&
          <div>
            <p> BTC_DASH: {this.state.BTC_DASH}</p>
            <div className="small-chart">
                    <div className="smallHeader">Bittrex 30-Day BTC-DASH Price History Chart </div>
                    <br/>
                    <canvas id="myChart" ref="myChart" />
                </div>
          </div>

        }
        <p>Bittrex BTC_USD: {this.state.BTC_USD}</p>

      </div>


    )
  }

}
