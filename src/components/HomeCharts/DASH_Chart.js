import React from 'react';
import Chart from 'chart.js';


const DASH_URL = 'https://api.coindesk.com/v1/bpi/historical/close.json' // DASH API DATA

export default class DASH_Chart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dashPrices: {}
    }
  }

  componentDidMount() {
    this.getDASHPrice();
    this.showGraph();
  }

  showGraph() {
      let dashPrices = this.state.dashPrices

      let tmp_label = []
      let tmp_data = []
      Object.keys(dashPrices).forEach(d => {
          tmp_label.push(d)
          tmp_data.push(dashPrices[d])
      })

      const canvas = this.refs.myChart
      const ctx = canvas.getContext('2d')

      return new Chart(ctx, {
          type: 'line',
          data: {
              labels: tmp_label,
              datasets: [{
                  label: 'Last 30days DASH Price',
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

  getDASHPrice() {
      return fetch(DASH_URL)
          .then(r => r.json())
          .then(data => {
            // console.log(data);
              this.setState({ dashPrices: data.bpi })
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
