import data from './graphData.json' assert { type: 'json' };
import {chartMaker} from './chartMaker.js';

for(const[dataKey, dataVal] of Object.entries(data)){
let series = [];
let seriesCompounded = [];
for (const [key, value] of Object.entries(dataVal)) {
    let ser = {"name":value.similarity, "data":value.vectorIOPair.o.dataPoints};
    series.push(ser);
    let serComp = {"name":value.similarity+' (Compounded)', "data":expectedValueMapper(value.vectorIOPair.o.dataPoints)};
    seriesCompounded.push(serComp);
}
chartMaker('container'+dataKey, dataKey, series);
chartMaker('container'+dataKey+'compounded', dataKey+' (Compounded)', seriesCompounded);
}

function expectedValueMapper(datapoints){
    let starter = 0;
    let newDatapoints = [];
    for(const datapoint of datapoints){
        newDatapoints.push(datapoint+starter);
        starter += datapoint;
    }
    return newDatapoints;
}


