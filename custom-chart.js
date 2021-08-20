const labels = [
  'Enrolled',
  'certified',
  'Placed',
  
];


const data_bar = {
  labels: labels,
  datasets: [{
    label: 'Achieved',
    backgroundColor: 'rgb(153,204,255)',
    
   
    data: [271,271,74,],
  },
  {
    label: 'Target',
    backgroundColor: 'rgb(204,230,255)',
    data: [929,929,886,],
  },
]
};
// </block:setup>


// <block:config:0>
  const config = {
  type: 'bar',
  data: data_bar,
  options: {
    plugins: {
      title: {
        display: true,
        text: 'Chart.js Bar Chart - Stacked'
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true
      }
    }
  }
};
// </block:config>

module.exports = {
  actions: [],
  config: config,
};


