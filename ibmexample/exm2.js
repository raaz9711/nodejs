'use strict'
console.log(Date.now().toString() + ': mainline: BEGIN');
setTimeout(() => {
    console.log(Date.now().toString() + ':event loop (callback): Asynchronous processing complete.');
}, 20);
console.log(Date.now().toString() + ':mainline: END');
