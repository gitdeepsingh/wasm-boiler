import fs from 'fs';
import loader from '@assemblyscript/loader';
const imports = {};
const wasmModule = loader.instantiateSync(fs.readFileSync('./build/release.wasm'), imports );

export default wasmModule;