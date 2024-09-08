(module
 (type $0 (func (param i32) (result i32)))
 (memory $0 0)
 (export "square" (func $assembly/index/square))
 (export "memory" (memory $0))
 (func $assembly/index/square (param $0 i32) (result i32)
  local.get $0
  local.get $0
  i32.mul
 )
)
