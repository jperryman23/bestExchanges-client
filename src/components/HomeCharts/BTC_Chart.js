import React from 'react';

const BTC_URL = 'https://api.coindesk.com/v1/bpi/historical/close.json' // BTC API DATA

export default class BTC_Chart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      btcPrices: {}
    }
  }

  componentDidMount() {
    this.getBTCPrice();
    this.showGraph();
  }

  showGraph() {
      let btcPrices = this.state.btcPrices

      let tmp_label = []
      let tmp_data = []
      Object.keys(btcPrices).forEach(d => {
          tmp_label.push(d)
          tmp_data.push(btcPrices[d])
      })

      const canvas = this.refs.myChart
      const ctx = canvas.getContext('2d')

      return new Chart(ctx, {
          type: 'line',
          data: {
              labels: tmp_label,
              datasets: [{
                  label: 'Last 30days BTC Price',
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

  getBTCPrice() {
      return fetch(BTC_URL)
          .then(r => r.json())
          .then(data => {
            console.log(data);
              this.setState({ btcPrices: data.bpi })
              this.showGraph()
          })
          .catch(err => {
              console.log(err)
          })
  }

  render() {
    return (

      <div className="App">
              <h2>{this.props.chartTitle}</h2>
              <br/>
              <canvas id="myChart" ref="myChart" />
          </div>
    )
  }

}
