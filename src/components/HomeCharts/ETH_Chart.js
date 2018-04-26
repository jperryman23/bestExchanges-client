import React from 'react';

const ETH_URL = 'https://api.coindesk.com/v1/bpi/historical/close.json' // ETH API DATA

export default class ETH_Chart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ethPrices: {}
    }
  }

  componentDidMount() {
    this.getETHPrice();
    this.showGraph();
  }

  showGraph() {
      let ethPrices = this.state.ethPrices

      let tmp_label = []
      let tmp_data = []
      Object.keys(ethPrices).forEach(d => {
          tmp_label.push(d)
          tmp_data.push(ethPrices[d])
      })

      const canvas = this.refs.myChart
      const ctx = canvas.getContext('2d')

      return new Chart(ctx, {
          type: 'line',
          data: {
              labels: tmp_label,
              datasets: [{
                  label: 'Last 30days ETH Price',
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

  getETHPrice() {
      return fetch(ETH_URL)
          .then(r => r.json())
          .then(data => {
            console.log(data);
              this.setState({ ethPrices: data.bpi })
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
