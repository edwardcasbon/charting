nv.addGraph({
    generate: function() {
        // var width = nv.utils.windowSize().width - 40;
        // var height = nv.utils.windowSize().height - 40;
        var element = document.querySelector('svg.chart[data-type=line]');
        var width = element.clientWidth;
        var height = element.clientHeight;
        var chart = nv.models.lineChart()
            // .width(width)
            // .height(height)
            .margin({top: 40, right: 40, bottom: 40, left: 40})
            .showLegend(true)
            .showYAxis(true)
            .showXAxis(true);

        chart.dispatch.on('renderEnd', function(){
            console.log('render complete');
        });

        d3.select('svg.chart[data-type=line]')
            // .attr('width', width)
            // .attr('height', height)
            .datum(sinAndCos())
            .call(chart);

        return chart;
    },
    callback: function(graph) {
        // window.onresize = function() {
        //     var width = nv.utils.windowSize().width - 40;
        //     var height = nv.utils.windowSize().height - 40;
        //     var margin = graph.margin();

        //     if (width < margin.left + margin.right + 20) {
        //         width = margin.left + margin.right + 20;
        //     }

        //     if (height < margin.top + margin.bottom + 20) {
        //         height = margin.top + margin.bottom + 20;
        //     }

        //     graph.width(width).height(height);
            
        //     d3.select('svg.chart[data-type=line]')
        //         .attr('width', width)
        //         .attr('height', height)
        //         .call(graph);
        // };
    }
});

function sinAndCos() {
    var sin = [];
    var cos = [];

    for (var i = 0; i < 100; i++) {
        sin.push({x: i, y: Math.sin(i/10)});
        cos.push({x: i, y: .5 * Math.cos(i/10)});
    }

    return [{
        values: sin,
        key: "Sine Wave",
        color: "#ff7f0e"
    }, {
        values: cos,
        key: "Cosine Wave",
        color: "#2ca02c",
        strokeWidth: 3
    }];
}