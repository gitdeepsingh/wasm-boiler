import assert from "assert";
import myModule from './../index.js';

assert.strictEqual(myModule.exports.square(10), 100);
console.log("ok");
