import React from 'react';
import Chart from 'chart.js';


const LTC_URL = 'https://api.coindesk.com/v1/bpi/historical/close.json' // LTC API DATA

export default class LTC_Chart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ltcPrices: {}
    }
  }

  componentDidMount() {
    this.getLTCPrice();
    this.showGraph();
  }

  showGraph() {
      let ltcPrices = this.state.ltcPrices

      let tmp_label = []
      let tmp_data = []
      Object.keys(ltcPrices).forEach(d => {
          tmp_label.push(d)
          tmp_data.push(ltcPrices[d])
      })

      const canvas = this.refs.myChart
      const ctx = canvas.getContext('2d')

      return new Chart(ctx, {
          type: 'line',
          data: {
              labels: tmp_label,
              datasets: [{
                  label: 'Last 30days LTC Price',
                  data: tmp_data,
                  backgroundColor: [
                      'rgba(117, 219, 167, 0.6)'
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

  getLTCPrice() {
      return fetch(LTC_URL)
          .then(r => r.json())
          .then(data => {
            // console.log(data);
              this.setState({ ltcPrices: data.bpi })
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
