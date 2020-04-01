var appArgs = process.argv.slice(2);
console.log('app args: ', appArgs);

const nmap = require('node-nmap');
nmap.nmapLocation = 'nmap';

let hostname = appArgs[0];
let quickscan = new nmap.QuickScan(hostname);