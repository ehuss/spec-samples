Object.assign(window.search, {"doc_urls":["arrays-m.html#arrays","arrays-m.html#array-type","arrays-m.html#array-expressions","arrays-m.html#array-operations"],"index":{"documentStore":{"docInfo":{"0":{"body":16,"breadcrumbs":3,"title":1},"1":{"body":156,"breadcrumbs":4,"title":2},"2":{"body":188,"breadcrumbs":4,"title":2},"3":{"body":1,"breadcrumbs":4,"title":2}},"docs":{"0":{"body":"[array] The term array refers to the array type , or an object of array type, or a binding of array type, or an array expression , depending on the context.","breadcrumbs":"Arrays Mara » Arrays","id":"0","title":"Arrays"},"1":{"body":"[array.type] The primitive array type is generic over its element type and length and represents a sequence of consecutive elements of the same type. For example, \"an array of ten booleans\" and \"an array of five strings\" are distinct concrete types of the same generic array type. [array.type.syntax] The array type is written as [ T ; N ], where T is a type representing the element type , and N is an expression representing the length . For example, [i32; 10] is an array of ten 32-bit integers. [array.length-expression] The length N in an array type must be an constant expression evaluating to a usize. For example, [T; 1] and [T; 1 + 1] are allowed, but [T; -1] and [T; 1i32] are not. [array.sized-elements] The element type of an array type must be sized . A fundamental property of an array is that each element has the same size, which means that the elements must have a known fixed size. In other words, [str; 10] and [dyn Trait; 10] are not allowed, because the elements do not have a fixed size. See unsized types . [array.sized] Arrays are sized . Because the elements have a fixed size, the total array also has a fixed size. This means that a &amp;[T; N] is a thin pointer (unlike a &amp;[T] see slice.unsized ) because the size is known at compile time. [array.layout] An array is represented in memory as a contiguous sequence of its elements in order, has the same alignment as its element type, and has the size of its element type multiplied by its length. In other words, a [T; 5] in memory is just literally five T stored right next to each other.","breadcrumbs":"Arrays Mara » Array type","id":"1","title":"Array type"},"2":{"body":"[array.expression] An array expression is written as either [ element , … ], where the last comma may be omitted, called an array list expression, or [ value ; length ], called an array repeat expression. So, [], [1, 2], [1, 2,] and [1; 10] are all array expressions. [array.elements] An array list expression evaluates to an array with the given (identically typed) elements in written order. For example, [1, 2, 3] is an array with three elements: 1, 2 and 3. [array.repeat] An array repeat expression evaluates to an array of the specified length filled with copies of the given value. For example, [1; 10] is an array with ten elements, all of which are 1. [array.repeat.length] The length of an array repeat expression must be a constant expression evaluating to a usize. This means that [1; 2 + 3] is valid, but { let n = 5; [1; n] } is not. [array.repeat.copy] If the length in an array repeat expression is not a constant zero or one, then the value must either be Copy or a named constant. So, [println!(\"x\"); 10] is allowed because println! results in a () value, which is Copy; and [String::new(); 1] is allowed because the length is one. [String::new(); 10] is not allowed because String is not Copy. A workaround is to create a named constant for the value and use that: const EMPTY_STRING: String = String::new();\nlet arr = [EMPTY_STRING; 10]; [array.repeat.eval] The value in an array repeat expression is evaluated exactly once, regardless of the length of the array. So, both [println!(\"x\"); 10] and [println!(\"x\"); 0] will print x exactly once. [array.repeat.zero] ≥1.63.0 If the length in an array repeat expression is a constant zero and the value expression is not a named constant, then the value will be dropped immediately after evaluating. So, [f(); 0] will evaluate f() and immediately drop the resulting value. However, [SOME_CONSTANT; 0] will not result in any value being dropped. This was not case before Rust 1.63.0, where the value was forgotten instead. See this issue and this change for details.","breadcrumbs":"Arrays Mara » Array expressions","id":"2","title":"Array expressions"},"3":{"body":"[todo] TO DO","breadcrumbs":"Arrays Mara » Array operations","id":"3","title":"Array operations"}},"length":4,"save":true},"fields":["title","body","breadcrumbs"],"index":{"body":{"root":{"0":{"df":1,"docs":{"2":{"tf":1.7320508075688772}}},"1":{".":{"6":{"3":{".":{"0":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"0":{"df":2,"docs":{"1":{"tf":1.7320508075688772},"2":{"tf":2.449489742783178}}},"df":2,"docs":{"1":{"tf":2.0},"2":{"tf":3.1622776601683795}},"i":{"3":{"2":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}},"2":{"df":1,"docs":{"2":{"tf":2.23606797749979}}},"3":{"2":{"df":1,"docs":{"1":{"tf":1.0}}},"df":1,"docs":{"2":{"tf":1.7320508075688772}}},"5":{"df":2,"docs":{"1":{"tf":1.0},"2":{"tf":1.0}}},"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.0}}}}},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":2,"docs":{"1":{"tf":1.4142135623730951},"2":{"tf":1.7320508075688772}}}}}},"m":{"df":0,"docs":{},"p":{";":{"[":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"r":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"y":{".":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":1,"docs":{"2":{"tf":1.0}}},"x":{"df":0,"docs":{},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}}},"l":{"a":{"df":0,"docs":{},"y":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"t":{".":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"v":{"df":1,"docs":{"2":{"tf":1.0}}}},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}},"z":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":1,"docs":{"2":{"tf":1.0}}}}}}},"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}}}}},"s":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}},"t":{"df":0,"docs":{},"y":{"df":0,"docs":{},"p":{"df":1,"docs":{"1":{"tf":1.0}},"e":{".":{"df":0,"docs":{},"s":{"df":0,"docs":{},"y":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"x":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}}}},"df":4,"docs":{"0":{"tf":2.6457513110645907},"1":{"tf":3.605551275463989},"2":{"tf":4.0},"3":{"tf":1.0}}}},"df":1,"docs":{"2":{"tf":1.0}}}}},"b":{"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":1.0}},"f":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"i":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}},"t":{"df":1,"docs":{"1":{"tf":1.0}}}},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}}},"t":{"df":0,"docs":{},"h":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"c":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}},"s":{"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":1.0}}}}},"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"2":{"tf":1.0}}}}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"m":{"a":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}},"p":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"n":{"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}},"df":0,"docs":{}},"t":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":2,"docs":{"1":{"tf":1.0},"2":{"tf":2.449489742783178}}}}},"df":1,"docs":{"2":{"tf":1.0}}}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"u":{"df":1,"docs":{"1":{"tf":1.0}}}}}}},"p":{"df":0,"docs":{},"i":{"df":1,"docs":{"2":{"tf":2.0}}}}},"r":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}}}},"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}},"t":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":1,"docs":{"2":{"tf":1.0}}}}},"df":0,"docs":{}}},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}}}}},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":1,"docs":{"2":{"tf":1.7320508075688772}}}}},"y":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"a":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}},"df":0,"docs":{}},"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":2,"docs":{"1":{"tf":3.4641016151377544},"2":{"tf":2.0}}}}}}}},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":0,"docs":{},"y":{"_":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}}}},"df":0,"docs":{}}}}},"v":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"u":{"df":2,"docs":{"1":{"tf":1.0},"2":{"tf":2.449489742783178}}}}},"df":0,"docs":{}},"x":{"a":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}}}},"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":2,"docs":{"1":{"tf":1.7320508075688772},"2":{"tf":1.4142135623730951}}}}}},"df":0,"docs":{},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":3,"docs":{"0":{"tf":1.0},"1":{"tf":1.7320508075688772},"2":{"tf":3.605551275463989}}}}}}}}},"f":{"df":1,"docs":{"2":{"tf":1.4142135623730951}},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":1,"docs":{"2":{"tf":1.0}}}},"v":{"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}},"x":{"df":1,"docs":{"1":{"tf":2.0}}}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"g":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}}}},"u":{"df":0,"docs":{},"n":{"d":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}}},"i":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}}}}},"i":{"3":{"2":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}},"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"df":0,"docs":{},"m":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"d":{"df":0,"docs":{},"i":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}}},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"a":{"d":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"g":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"s":{"df":0,"docs":{},"s":{"df":0,"docs":{},"u":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"k":{"df":0,"docs":{},"n":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}}}},"l":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":2,"docs":{"1":{"tf":2.0},"2":{"tf":2.6457513110645907}}}}}}},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.0}}}}}}},"m":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"n":{"df":2,"docs":{"1":{"tf":1.4142135623730951},"2":{"tf":1.0}}}},"df":0,"docs":{},"m":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}}}},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}}}},"n":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":1.7320508075688772}}}}},"df":2,"docs":{"1":{"tf":2.0},"2":{"tf":1.4142135623730951}},"e":{"df":0,"docs":{},"x":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"o":{"b":{"df":0,"docs":{},"j":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}}},"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}},"n":{"c":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}},"df":1,"docs":{"2":{"tf":1.4142135623730951}}},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.0}}}}},"r":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":2,"docs":{"1":{"tf":1.0},"2":{"tf":1.0}}}}},"df":0,"docs":{}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}},"l":{"df":0,"docs":{},"n":{"!":{"(":{"\"":{"df":0,"docs":{},"x":{"df":1,"docs":{"2":{"tf":1.7320508075688772}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":1,"docs":{"2":{"tf":1.0}}}}}}},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}},"g":{"a":{"df":0,"docs":{},"r":{"d":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"2":{"tf":1.0}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"p":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":2.449489742783178}}}},"df":0,"docs":{}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":1,"docs":{"1":{"tf":2.0}}}}}},"s":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.7320508075688772}}}}}}},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"s":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":2.0}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":2,"docs":{"1":{"tf":1.4142135623730951},"2":{"tf":1.0}}},"q":{"df":0,"docs":{},"u":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"c":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}}}},"i":{"df":0,"docs":{},"z":{"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":3.0}}}}},"l":{"df":0,"docs":{},"i":{"c":{"df":0,"docs":{},"e":{".":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"_":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"p":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"i":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"df":0,"docs":{}}},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":1.0}}}}},"r":{"df":1,"docs":{"1":{"tf":1.0}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{":":{":":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"w":{"df":1,"docs":{"2":{"tf":1.7320508075688772}}}}}},"df":0,"docs":{}},"df":2,"docs":{"1":{"tf":1.0},"2":{"tf":1.4142135623730951}}}}}}}},"t":{"df":1,"docs":{"1":{"tf":2.8284271247461903}},"e":{"df":0,"docs":{},"n":{"df":2,"docs":{"1":{"tf":1.4142135623730951},"2":{"tf":1.0}}},"r":{"df":0,"docs":{},"m":{"df":1,"docs":{"0":{"tf":1.0}}}}},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.0}}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":1.0}}}}},"o":{"d":{"df":0,"docs":{},"o":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}},"r":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}},"df":0,"docs":{}},"y":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":3,"docs":{"0":{"tf":1.7320508075688772},"1":{"tf":3.872983346207417},"2":{"tf":1.0}}}}}},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"k":{"df":1,"docs":{"1":{"tf":1.0}}}}},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"z":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"s":{"df":1,"docs":{"2":{"tf":1.0}},"i":{"df":0,"docs":{},"z":{"df":2,"docs":{"1":{"tf":1.0},"2":{"tf":1.0}}}}}},"v":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}},"u":{"df":1,"docs":{"2":{"tf":3.3166247903554}}}}},"df":0,"docs":{}},"w":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"d":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}},"df":0,"docs":{},"k":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":2,"docs":{"1":{"tf":1.0},"2":{"tf":1.4142135623730951}}}}}}}}},"x":{"df":1,"docs":{"2":{"tf":1.0}}},"z":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}}}}}},"breadcrumbs":{"root":{"0":{"df":1,"docs":{"2":{"tf":1.7320508075688772}}},"1":{".":{"6":{"3":{".":{"0":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"0":{"df":2,"docs":{"1":{"tf":1.7320508075688772},"2":{"tf":2.449489742783178}}},"df":2,"docs":{"1":{"tf":2.0},"2":{"tf":3.1622776601683795}},"i":{"3":{"2":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}},"2":{"df":1,"docs":{"2":{"tf":2.23606797749979}}},"3":{"2":{"df":1,"docs":{"1":{"tf":1.0}}},"df":1,"docs":{"2":{"tf":1.7320508075688772}}},"5":{"df":2,"docs":{"1":{"tf":1.0},"2":{"tf":1.0}}},"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.0}}}}},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":2,"docs":{"1":{"tf":1.4142135623730951},"2":{"tf":1.7320508075688772}}}}}},"m":{"df":0,"docs":{},"p":{";":{"[":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"r":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"y":{".":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":1,"docs":{"2":{"tf":1.0}}},"x":{"df":0,"docs":{},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}}},"l":{"a":{"df":0,"docs":{},"y":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"t":{".":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"v":{"df":1,"docs":{"2":{"tf":1.0}}}},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}},"z":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":1,"docs":{"2":{"tf":1.0}}}}}}},"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}}}}},"s":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}},"t":{"df":0,"docs":{},"y":{"df":0,"docs":{},"p":{"df":1,"docs":{"1":{"tf":1.0}},"e":{".":{"df":0,"docs":{},"s":{"df":0,"docs":{},"y":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"x":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}}}},"df":4,"docs":{"0":{"tf":3.0},"1":{"tf":3.872983346207417},"2":{"tf":4.242640687119285},"3":{"tf":1.7320508075688772}}}},"df":1,"docs":{"2":{"tf":1.0}}}}},"b":{"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":1.0}},"f":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"i":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}},"t":{"df":1,"docs":{"1":{"tf":1.0}}}},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}}},"t":{"df":0,"docs":{},"h":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"c":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}},"s":{"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":1.0}}}}},"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"2":{"tf":1.0}}}}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"m":{"a":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}},"p":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"n":{"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}},"df":0,"docs":{}},"t":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":2,"docs":{"1":{"tf":1.0},"2":{"tf":2.449489742783178}}}}},"df":1,"docs":{"2":{"tf":1.0}}}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"u":{"df":1,"docs":{"1":{"tf":1.0}}}}}}},"p":{"df":0,"docs":{},"i":{"df":1,"docs":{"2":{"tf":2.0}}}}},"r":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}}}},"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}},"t":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":1,"docs":{"2":{"tf":1.0}}}}},"df":0,"docs":{}}},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}}}}},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":1,"docs":{"2":{"tf":1.7320508075688772}}}}},"y":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"a":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}},"df":0,"docs":{}},"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":2,"docs":{"1":{"tf":3.4641016151377544},"2":{"tf":2.0}}}}}}}},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":0,"docs":{},"y":{"_":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}}}},"df":0,"docs":{}}}}},"v":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"u":{"df":2,"docs":{"1":{"tf":1.0},"2":{"tf":2.449489742783178}}}}},"df":0,"docs":{}},"x":{"a":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}}}},"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":2,"docs":{"1":{"tf":1.7320508075688772},"2":{"tf":1.4142135623730951}}}}}},"df":0,"docs":{},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":3,"docs":{"0":{"tf":1.0},"1":{"tf":1.7320508075688772},"2":{"tf":3.7416573867739413}}}}}}}}},"f":{"df":1,"docs":{"2":{"tf":1.4142135623730951}},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":1,"docs":{"2":{"tf":1.0}}}},"v":{"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}},"x":{"df":1,"docs":{"1":{"tf":2.0}}}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"g":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}}}},"u":{"df":0,"docs":{},"n":{"d":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}}},"i":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}}}}},"i":{"3":{"2":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}},"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"df":0,"docs":{},"m":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"d":{"df":0,"docs":{},"i":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}}},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"a":{"d":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"g":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"s":{"df":0,"docs":{},"s":{"df":0,"docs":{},"u":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"k":{"df":0,"docs":{},"n":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}}}},"l":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":2,"docs":{"1":{"tf":2.0},"2":{"tf":2.6457513110645907}}}}}}},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.0}}}}}}},"m":{"a":{"df":0,"docs":{},"r":{"a":{"df":4,"docs":{"0":{"tf":1.0},"1":{"tf":1.0},"2":{"tf":1.0},"3":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"n":{"df":2,"docs":{"1":{"tf":1.4142135623730951},"2":{"tf":1.0}}}},"df":0,"docs":{},"m":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}}}},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}}}},"n":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":1.7320508075688772}}}}},"df":2,"docs":{"1":{"tf":2.0},"2":{"tf":1.4142135623730951}},"e":{"df":0,"docs":{},"x":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"o":{"b":{"df":0,"docs":{},"j":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}}},"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}},"n":{"c":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}},"df":1,"docs":{"2":{"tf":1.4142135623730951}}},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}}},"r":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":2,"docs":{"1":{"tf":1.0},"2":{"tf":1.0}}}}},"df":0,"docs":{}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}},"l":{"df":0,"docs":{},"n":{"!":{"(":{"\"":{"df":0,"docs":{},"x":{"df":1,"docs":{"2":{"tf":1.7320508075688772}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":1,"docs":{"2":{"tf":1.0}}}}}}},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}},"g":{"a":{"df":0,"docs":{},"r":{"d":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"2":{"tf":1.0}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"p":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":2.449489742783178}}}},"df":0,"docs":{}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":1,"docs":{"1":{"tf":2.0}}}}}},"s":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.7320508075688772}}}}}}},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"s":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":2.0}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":2,"docs":{"1":{"tf":1.4142135623730951},"2":{"tf":1.0}}},"q":{"df":0,"docs":{},"u":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"c":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}}}},"i":{"df":0,"docs":{},"z":{"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":3.0}}}}},"l":{"df":0,"docs":{},"i":{"c":{"df":0,"docs":{},"e":{".":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"_":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"p":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"i":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"df":0,"docs":{}}},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":1.0}}}}},"r":{"df":1,"docs":{"1":{"tf":1.0}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{":":{":":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"w":{"df":1,"docs":{"2":{"tf":1.7320508075688772}}}}}},"df":0,"docs":{}},"df":2,"docs":{"1":{"tf":1.0},"2":{"tf":1.4142135623730951}}}}}}}},"t":{"df":1,"docs":{"1":{"tf":2.8284271247461903}},"e":{"df":0,"docs":{},"n":{"df":2,"docs":{"1":{"tf":1.4142135623730951},"2":{"tf":1.0}}},"r":{"df":0,"docs":{},"m":{"df":1,"docs":{"0":{"tf":1.0}}}}},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.0}}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":1.0}}}}},"o":{"d":{"df":0,"docs":{},"o":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}},"r":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}},"df":0,"docs":{}},"y":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":3,"docs":{"0":{"tf":1.7320508075688772},"1":{"tf":4.0},"2":{"tf":1.0}}}}}},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"k":{"df":1,"docs":{"1":{"tf":1.0}}}}},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"z":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"s":{"df":1,"docs":{"2":{"tf":1.0}},"i":{"df":0,"docs":{},"z":{"df":2,"docs":{"1":{"tf":1.0},"2":{"tf":1.0}}}}}},"v":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}},"u":{"df":1,"docs":{"2":{"tf":3.3166247903554}}}}},"df":0,"docs":{}},"w":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"d":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}},"df":0,"docs":{},"k":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":2,"docs":{"1":{"tf":1.0},"2":{"tf":1.4142135623730951}}}}}}}}},"x":{"df":1,"docs":{"2":{"tf":1.0}}},"z":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}}}}}},"title":{"root":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"y":{"df":4,"docs":{"0":{"tf":1.0},"1":{"tf":1.0},"2":{"tf":1.0},"3":{"tf":1.0}}}},"df":0,"docs":{}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"df":0,"docs":{},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}}},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"t":{"df":0,"docs":{},"y":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}}},"lang":"English","pipeline":["trimmer","stopWordFilter","stemmer"],"ref":"id","version":"0.9.5"},"results_options":{"limit_results":30,"teaser_word_count":30},"search_options":{"bool":"OR","expand":true,"fields":{"body":{"boost":1},"breadcrumbs":{"boost":1},"title":{"boost":2}}}});