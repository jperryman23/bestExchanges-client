import React from 'react';
import Chart from 'chart.js';

const URL = 'https://api.coindesk.com/v1/bpi/historical/close.json'
const coincap_URL ='http://coincap.io/page/'

export default class CoinCap extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        USD_BTC: 0,
        BTC_ETH: 0,
        BTC_LTC: 0,
        BTC_DASH: 0,
        currency: this.props.currency,
        btcPrices: {}
      }

    }

    componentDidMount() {

      /////API CALLS
      // const ASKS_URL = 'http://localhost:3000/api/sendasks';
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
      this.getBTC_HIST()
      this.getBTCPrice()
      this.getETHPrice()
      this.getLTCPrice()
      this.getDASHPrice()
      this.showGraph();

    }

    showGraph() {
        // bitcoin price object
        let btcPrices = this.state.btcPrices

        // label array for using in Chart.js
        let tmp_label = []
        // data array for using in Chart.js
        let tmp_data = []
        Object.keys(btcPrices).forEach(d => {
            tmp_label.push(d)
            tmp_data.push(btcPrices[d])
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
                    label: 'Last 30days BTC Price',
                    // adapt tmp_label here
                    data: tmp_data,
                    backgroundColor: [
                        'rgba(38, 126, 255, 0.6)'
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

  getBTC_HIST() {
        return fetch(URL)
            .then(r => r.json())
            .then(data => {
                // show response data in console
                // console.log('data: ', data)
                this.setState({ btcPrices: data.bpi })
								// add here to update Graph chart when finish fetching data
                this.showGraph()
            })
            .catch(err => {
                console.log(err)
            })
    }

    getBTCPrice() {
        return fetch('http://coincap.io/page/' + 'BTC')
            .then(r => r.json())
            .then(data => {
                this.setState({ USD_BTC: '$' + data.price_usd.toFixed(2)})
            })
            .catch(err => {
                console.log(err)
            })
          }

    getETHPrice() {
        return fetch('http://coincap.io/page/' + 'ETH')
            .then(r => r.json())
            .then(data => {
                this.setState({ BTC_ETH: data.price_btc.toFixed(5)})
            })
            .catch(err => {
                console.log(err)
            })
          }

      getLTCPrice() {
          return fetch('http://coincap.io/page/' + 'LTC')
              .then(r => r.json())
              .then(data => {
                  this.setState({ BTC_LTC: data.price_btc.toFixed(5)})
              })
              .catch(err => {
                  console.log(err)
              })
            }

      getDASHPrice(){
            return fetch('http://coincap.io/page/' + 'DASH')
                .then(r => r.json())
                .then(data => {
                    this.setState({ BTC_DASH: data.price_btc.toFixed(5)})
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
                    <div className="smallHeader"> CoinCap 30-Day BTC-ETH Price History Chart</div>
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
                    <div className="smallHeader"> CoinCap 30-Day BTC-LTC Price History Chart</div>
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
                    <div className="smallHeader"> CoinCap 30-Day BTC-DASH Price History Chart</div>
                    <br/>
                    <canvas id="myChart" ref="myChart" />
                </div>
          </div>

        }
        <p>CoinCap USD_BTC: {this.state.USD_BTC}</p>

      </div>


    )
  }

}
