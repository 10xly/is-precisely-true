# Check if a value is precisely true.
```javascript
const isTrue = require('is-precisely-true')
const assert = require('assert-fn')

assert(isTrue(true), "")
assert(!isTrue(false), "")
```

this package is very useful

## alternatives
there are many other packages you can use other than this:
- [@is-(unknown)/is-true](https://github.com/is-unknown/is-true)
- [@falsejs/is-true-helper](https://github.com/tj-commits/falsejs-is-true-helper)