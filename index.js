import data from './graphData.json' assert { type: 'json' };
import {chartMaker} from './chartMaker.js';

for(const[dataKey, dataVal] of Object.entries(data)){
let series = [];
for (const [key, value] of Object.entries(dataVal)) {
    let ser = {"name":value.similarity, "data":value.vectorIOPair.o.dataPoints};
    series.push(ser);
}
chartMaker('container'+dataKey, dataKey, series);
}


