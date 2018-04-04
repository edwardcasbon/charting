// Can change global settings.
Chart.defaults.global.defaultFontFamily = "Roboto";
Chart.defaults.global.legend.position = 'bottom';

// Data to use in graphs.
const Data = {
    labels: ["January", "February", "March"],
    dataSets: [{
        label: '2016',
        data: [1, 10, 5],
        colour: '204, 0, 0'
    }, {
        label: '2017',
        data: [4, 14, 24],
        colour: '60, 133, 223'
    }, {
        label: '2018',
        data: [10, 20, 3],
        colour: '26, 172, 30'
    }]
};

// Get all the charts in the document, loop over them and
// create the image using the Chart.js library.
const charts = document.querySelectorAll('.chart');
for (let i=0; i<charts.length; i++) {
    const el = charts[i];
    const type = el.getAttribute('data-type');
    const stacked = el.getAttribute('data-stacked');
    let ChartData = Data;

    if (el.hasAttribute('data-source')) {
        const ds = el.getAttribute('data-source');
        ChartData = (typeof window[ds] !== 'undefined') ? window[ds] : (typeof this[ds] !== 'undefined') ? this[ds] : ChartData;
    }

    const data = {
        labels: ChartData.labels,
        datasets: ChartData.dataSets.map((dataSet, index) => {
            return {
                label: dataSet.label,
                data: dataSet.data,
                borderWidth: 1,

                backgroundColor: (type === 'doughnut' || type === 'pie' || type === 'polarArea') ? 
                    ChartData.dataSets.map(ds => {
                        return `rgba(${ds.colour}, 0.25)`;
                    }) :
                    
                    `rgba(${dataSet.colour}, 0.25)`,

                borderColor: (type === 'doughnut' || type === 'pie' || type === 'polarArea') ? 
                    ChartData.dataSets.map(ds => {
                        return `rgb(${ds.colour})`;
                    })
                    : 
                    
                    `rgb(${dataSet.colour})`
            }
        })
    };

    const options = {};

    if (type === 'bar' && stacked === 'true') {
        options.scales = {
            xAxes: [{
                stacked: true
            }],
            yAxes: [{
                stacked: true
            }]
        }
    }

    const chart = new Chart(el.getContext('2d'), {
        type,
        data,
        options
    });
}
