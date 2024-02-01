# Arrays

r[array]
The term <dfn>array</dfn> refers to

* the [array type], or
* an [object] of array type, or
* a [binding] of array type, or
* an [array expression],

depending on the context.

## Array type

r[array.type]
The [primitive] <dfn>array type</dfn>
is generic over its *element type* and *length*
and represents a sequence of consecutive elements of the same type.

> For example, "an array of ten booleans" and "an array of five strings"
> are distinct concrete types of the same generic array type.

r[array.type.syntax]
The array type is written as <kbd>[</kbd> <var>T</var> <kbd>;</kbd> <var>N</var> <kbd>]</kbd>,
where

* <var>T</var> is a [type] representing the *element type*, and
* <var>N</var> is an [expression] representing the *length*.

> For example, `[i32; 10]` is an array of ten 32-bit integers.

r[array.length-expression]
The length <var>N</var> in an array type must be an [constant expression]
evaluating to a `usize`.

> For example,
> `[T; 1]` and `[T; 1 + 1]` are allowed,
> but `[T; -1]` and `[T; 1i32]` are not.

r[array.sized-elements]
The element type of an array type must be [sized].

> A fundamental property of an array is that each element has the same size,
> which means that the elements must have a known fixed size.
> In other words, `[str; 10]` and `[dyn Trait; 10]` are not allowed,
> because the elements do not have a fixed size. See [unsized types].

r[array.sized]
Arrays are [sized].

> Because the elements have a fixed size, the total array also has a fixed size.
> This means that a `&amp;[T; N]` is a thin pointer
> (unlike a `&amp;[T]` see [slice.unsized])
> because the size is known at compile time.

r[array.layout]
An array is represented in memory as a contiguous sequence of its elements in order,
has the same [alignment] as its element type,
and has the size of its element type multiplied by its length.

> In other words, a `[T; 5]` in memory is just literally five `T` stored
> right next to each other.


## Array expressions

r[array.expression]
An <dfn>array expression</dfn> is written as either

* <kbd>[</kbd> <span class="repeat"><var>element</var> <kbd>,</kbd> </span> … <kbd>]</kbd>,
where the last comma may be omitted,
called an <dfn>array list expression</dfn>,
or
* <kbd>[</kbd> <var>value</var> <kbd>;</kbd> <var>length</var> <kbd>]</kbd>,
called an <dfn>array repeat expression</dfn>.


> So, `[]`, `[1, 2]`, `[1, 2,]` and `[1; 10]` are all array expressions.

r[array.elements]
An <dfn>array list expression</dfn> evaluates to an array with the given (identically typed) elements in written order.

> For example, `[1, 2, 3]` is an array with three elements: `1`, `2` and `3`.

r[array.repeat]
An <dfn>array repeat expression</dfn> evaluates to an array of the specified length filled with copies of the given value.

> For example, `[1; 10]` is an array with ten elements, all of which are `1`.

r[array.repeat.length]
The length of an array repeat expression must be a [constant expression]
evaluating to a `usize`.

> This means that `[1; 2 + 3]` is valid, but `{ let n = 5; [1; n] }` is not.

r[array.repeat.copy]
If the length in an array repeat expression is not a constant zero or one,
then the value must either be [Copy] or a named constant.

> So, `[println!("x"); 10]` is allowed because `println!` results in
> a `()` value, which is Copy; and\
> `[String::new(); 1]` is allowed because the length is one.
> `[String::new(); 10]` is not allowed because `String` is not Copy.
> A workaround is to create [a named constant] for the value and use that:
> ```rust
> const EMPTY_STRING: String = String::new();
> let arr = [EMPTY_STRING; 10];
> ```

r[array.repeat.eval]
The value in an array repeat expression is evaluated exactly once,
regardless of the length of the array.

> So, both `[println!("x"); 10]` and `[println!("x"); 0]`
> will print `x` exactly once.

r[array.repeat.zero]
<span class="version">≥1.63.0</span>
If the length in an array repeat expression is a constant zero
and the value expression is not a named constant,
then the value will be [dropped] immediately after evaluating.

> So, `[f(); 0]` will evaluate `f()` and immediately drop the resulting value.
> However, `[SOME_CONSTANT; 0]` will not result in any value being dropped.

> [!HISTORY]
> This was not case before Rust 1.63.0,
> where the value was [forgotten] instead.
> See [this issue](https://github.com/rust-lang/rust/issues/74836)
> and [this change](https://github.com/rust-lang/rust/pull/95953) for details.

## Array operations

r[todo]
TO DO


[array type]: TODO
[object]: TODO
[binding]: TODO
[array expression]: TODO
[primitive]: TODO
[type]: TODO
[expression]: TODO
[constant expression]: TODO
[sized]: TODO
[slice.unsized]: TODO
[alignment]: TODO
[Copy]: TODO
[a named constant]: TODO
[dropped]: TODO
[forgotten]: TODO
[constant expression]: TODO
[sized]: TODO
[unsized types]: TODO
