'use strict'
console.log(Date.now().toString() + ': mainline: BEGIN');
const startTime = Date.now();
let endTime = startTime;
while (endTime < startTime + 60*1000) {
    endTime = Date.now();
}
console.log(Date.now().toString() + ': mainline: END');
