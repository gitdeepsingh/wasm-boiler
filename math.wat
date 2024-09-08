(module
    (func $square (param i32) (result i32)
        local.get 0
        local.get 0
        i32.mul
    )
    (export "square" (func $square))

    (func $return20 (result i32)
        i32.const 20
    )
    (export "return20" (func $return20))
)