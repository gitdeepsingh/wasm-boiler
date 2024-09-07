import fs from 'fs';

const mathwasm = fs.readFileSync('./math.wasm'); // loads into buffer

const math = await WebAssembly.instantiate(new Uint8Array(mathwasm)).then((res) => res.instance.exports)

console.log(math.square(10));