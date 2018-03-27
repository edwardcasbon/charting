const data = {
    labels: ["January", "February", "March"],
    series: [
        [1, 10, 5],     // 2016
        [4, 14, 24],    // 2017
        [10, 20, 3],    // 2018
    ]
};

const charts = document.querySelectorAll('.chart');
charts.forEach(chart => {
    switch (chart.getAttribute('data-type')) {
        case 'line':
            new Chartist.Line(chart, data);
            break;

        case 'bar':
            new Chartist.Bar(chart, data);
            break;

        case 'pie':
            const modifiedData = Object.assign({}, data);
            modifiedData.series = [16, 42, 33];

            const options = {
                donut: true,
                donutWidth: 40
            };

            new Chartist.Pie(chart, modifiedData, options);
            break;

        default:
            new Chartist.Line(chart, data);
            break;
    }
});