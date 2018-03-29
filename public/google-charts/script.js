// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart']});

let data = null;

const createDataTable = () => {
    data = new google.visualization.DataTable();
    data.addColumn('string', 'Month');
    data.addColumn('number', '2016');
    data.addColumn('number', '2017');
    data.addColumn('number', '2018');
    data.addRows([
        ['January', 1, 4, 10],
        ['February', 10, 14, 20],
        ['March', 5, 24, 3],
    ]);
};

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
const drawCharts = () => {
    let chart = null;
    const charts = document.querySelectorAll('.chart');
    charts.forEach(el => {
        const type = el.getAttribute('data-type');
        const options = {
            title: (el.hasAttribute('data-title')) ? el.getAttribute('data-title') : null,
            legend: {
                position: 'bottom'
            }
        }

        switch (type) {
            case 'line':
                // chart = new google.visualization.LineChart(el);
                chart = new google.visualization.AreaChart(el);
                options.curveType = 'function'; // Smooth lines
                break;

            case 'bar':
                chart = new google.visualization.ColumnChart(el);
                break;

            case 'pie':
                chart = new google.visualization.PieChart(el);
                break;

            case 'donut':
                chart = new google.visualization.PieChart(el);
                options.pieHole = 0.3;
                break;

            default:
                chart = new google.visualization.BarChart(el);
                break;
        };

        chart.draw(data, options);
    });
}

const test = (a, b) => {
    console.log(a, b);

    if (b != false) {
        console.log('b not false');
    } else {
        console.log('b is false');
    }
}

// Create function that's called by the callback when the 
// Google charts library has loaded.
const init = () => {
    test('a');
    createDataTable();
    drawCharts();
};

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(init);