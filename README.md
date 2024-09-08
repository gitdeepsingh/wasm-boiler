# wasm-boiler: web-assembly

#### Features
1. WASM is statically compiled and is bytecode, hence very fast. Has few compilation steps.
2. It has very small code codebase, hence transportable/portable.
3. It is easily operable with JS. Both can interact with each other's ecosystem.
4. Being low-level, other codes like C, Rust etc. can be compiled into WASM. Great to migrate legacy codebases.
5. Very secure, runs on a sandbox env. Therefore by default, it has no access to the file system on your machine. We can give permissions regarding the access.
6. All these features make it suitable for backend codes as well ex: blockchains (may be an alternative to docker containers later).
7. As it is low-level language, it is supported by all major browsers and thus set a standard.
8. Use Case: E-Commerce, Blockchains, App Containers, IOT- Edge Services (run code on devices).


#### wat to wasm [toolkit](https://github.com/WebAssembly/wabt)
###### [.wat: web-assembly-text format] => c o m p i l e r [ wabt ]   => wasm bytecode format [to run on browser]

Download: [wat2wasm](https://github.com/WebAssembly/wabt#:~:text=for%20WebAssembly%2C%20including%3A-,wat2wasm,-%3A%20translate%20from%20WebAssembly): translate from WebAssembly text format to the WebAssembly binary format.

#### Compile and Build steps
 - Under the same parent directory where our project repo lives, r un 'git clone --recursive https://github.com/WebAssembly/wabt' to clone wabt toolkit. We will use cmake for compilation. [need to install cmake: brew install cmake]
- Inside wabt repo, mkdir build; cd build and run: cmake ..
- Now inside build only, run: make, and wait for build completion
- Goto our project folder and we can convert(compile) empty-module.wat into wasm bytecode using above build compiler. 
- In project directory (wasm-boiler) Run the executable command: ../wabt/bin/wat2wasm empty-module.wat -o empty.module.wasm
- To see the contents of output wasm file(hexadecimal), run: xxd empty-module.wasm
- Alternatively, to see the contents of wat file as bytecode, run: ../wabt/bin/wat2wasm empty-module.wat -v  

#### To integrate with JS 
1. run: npm i 
2. create index.js and load the wasm file here as buffer.

```
const mathwasm = fs.readFileSync('./math.wasm'); // loads into buffer
const math = await WebAssembly.instantiate(new Uint8Array(mathwasm)).then((res) => res.instance.exports)

// using dot operator, we can access all exported functions of math 
// example:  math.square(10) outputs 100 on running: node index.js
```

#### To run in browser
create express local server.js. Serve the code in /public folder (check test.html)

----

#### WASM Vs JS
1. JS is dynamically compiled. WASm is statically compiled. A JS code on browser involves parsing, AST conversion, bytecode interpretaion and machine code compilation. Whereas, for WASM, the code we are executing is compiled in advance. This improves performance.
2. WASM: Code once deploy anywhere approach. Sandboxed coding approach, portable and secure. Smaller codebases.

#### assemblyscript
AssemblyScript is a TypeScript-based programming language that is optimized for, and statically compiled to, WebAssembly.
For more complex applications, we can use Rust.
