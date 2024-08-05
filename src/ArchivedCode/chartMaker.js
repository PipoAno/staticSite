export function chartMaker(container, windowSize, series){
    var elemDiv = document.createElement('div');
elemDiv.id = container;
document.body.appendChild(elemDiv);
    Highcharts.chart(container, {

        title: {
            text: 'Window size '+windowSize,
            align: 'left'
        },
    
        xAxis: {
            title: {
                text: 'Day'
            }
        },
    
        yAxis: {
            title: {
                text: 'Percentage change'
            },
            tickPixelInterval: 20,
            allowDecimals: true,
            plotLines: [{
                color: '#FF0000',
                width: 1,
                value: 0,
                zIndex:2}]
        },
    
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },
    
        series: series
    });
}