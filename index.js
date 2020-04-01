var appArgs = process.argv.slice(2);
console.log('app args: ', appArgs);

const nmap = require('node-nmap');
nmap.nmapLocation = 'nmap';

let hostname = appArgs[0];
let quickscan = new nmap.QuickScan(hostname);

quickscan.on('complete', function(data){
    console.log(data);
});

quickscan.on('error', function(error){
    console.log(error);
});