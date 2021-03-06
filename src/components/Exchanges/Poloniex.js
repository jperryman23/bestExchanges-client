import React from 'react';
import Chart from 'chart.js';

const URL = 'https://api.coindesk.com/v1/bpi/historical/close.json'
const POLO_URL = 'https://poloniex.com/public?command=returnTicker'


export default class Poloniex extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        USDT_BTC: 0,
        BTC_ETH: 0,
        BTC_LTC: 0,
        BTC_DASH: 0,
        currency: this.props.currency,
        Prices: {}
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
      this.getBTCPrices();
      this.getCurrentPrices();

       //this.showGraph();

    }

    showGraph() {
        // bitcoin price object
        let Prices = this.state.Prices

        // label array for using in Chart.js
        let tmp_label = []
        // data array for using in Chart.js
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
                    label: 'Last 30days BTC Price',
                    // adapt tmp_label here
                    data: tmp_data,
                    backgroundColor: [
                        'rgba(56, 56, 54, 0.6)'
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

// POLULATES THE HISTORICAL GRAPH FOR BTC
    getBTCPrices() {
      if (this.props.currency="BTC"){
        return fetch(URL)
            .then(r => r.json())
            .then(data => {
                // console.log('data: ', data)
                this.setState({ Prices: data.bpi })
                 //this.setState({ BTC_USD: data.bpi["2018-04-25"]})
                this.showGraph()
            })
            .catch(err => {
                console.log(err)
            })
    }
  }

  getCurrentPrices(){
    return fetch(POLO_URL)
        .then(r => r.json())
        .then(data => {
          // console.log('data: ', data)
            this.setState({ USDT_BTC: '$' + parseFloat(data.USDT_BTC.lowestAsk).toFixed(2)});
            this.setState({ BTC_ETH: parseFloat(data.BTC_ETH.lowestAsk).toFixed(5)});
            this.setState({ BTC_LTC: parseFloat(data.BTC_LTC.lowestAsk).toFixed(5)});
            this.setState({ BTC_DASH: parseFloat(data.BTC_DASH.lowestAsk).toFixed(5)});
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
                    <div className="smallHeader"> Poloniex 30-Day BTC-ETH Price History Chart</div>
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
                    <div className="smallHeader"> Poloniex 30-Day BTC-LTC Price History Chart</div>
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
                    <div className="smallHeader"> Poloniex 30-Day BTC-DASH Price History Chart</div>
                    <br/>
                    <canvas id="myChart" ref="myChart" />
                </div>
          </div>

        }

        <p>Poloniex USDT_BTC: {this.state.USDT_BTC}</p>

      </div>


    )
  }

}
