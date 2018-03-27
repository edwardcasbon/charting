// Can change global settings.
Chart.defaults.global.defaultFontFamily = "Roboto";

// Data to use in graphs.
const Data = {
    labels: ["January", "February", "March"],
    dataSets: [
        [1, 10, 5],     // 2016
        [4, 14, 24],    // 2017
        [10, 20, 3],    // 2018
    ]
};

// Colours to use in graphs.
const colours = [
    '204, 0, 0',    // Red
    '60, 133, 223', // Blue
    '26, 172, 30',  // Green
    '252, 144, 3',  // Orange
];

// Get all the charts in the document, loop over them and
// create the image using the Chart.js library.
const charts = document.querySelectorAll('.chart');
for (let i=0; i<charts.length; i++) {
    const el = charts[i];
    const type = el.getAttribute('data-type');

    const data = {
        labels: Data.labels,
        datasets: Data.dataSets.map((dataSet, index) => {
            return {
                label: `Dataset ${index}`,
                data: dataSet,
                backgroundColor: (type === 'doughnut' || type === 'pie' || type === 'polarArea') ? 
                    colours.map(colour => {
                        return `rgba(${colour}, 0.25)`;
                    }) : 
                    
                    `rgba(${colours[index]}, 0.25)`,
                borderColor: (type === 'doughnut' || type === 'pie' || type === 'polarArea') ? 
                    colours.map(colour => {
                        return `rgb(${colour})`;
                    })
                    : 
                    
                    `rgb(${colours[index]})`,
                borderWidth: 1
            }
        })
    };

    const chart = new Chart(el.getContext('2d'), {
        type,
        data,

        options: {
            legend: {
                position: 'bottom'
            },

            title: {
                display: el.hasAttribute('data-title'),
                text: el.getAttribute('data-title')
            }
        }
    });
}
