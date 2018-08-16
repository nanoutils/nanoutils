# Methods

## `add`

Adds two values

```js
import { add } from 'nanoutils'

add(1, 1)         // 2
add(1)(1)         // 2
add('1')(1)       // 2
add('1')('1')     // 2
add(1)('a')       // NaN
add(null)(null)   // 0
add(false)(false) // 0
add(true)(true)   // 2
add([])([])       // 0
add([2])([2])     // 4
```

::: tip JS-friendly
If you pass non-number values, it tries to convert them to numbers and to add. Otherwise, it returns `NaN`
:::

## `addIndex`

Adds an index to iterate a collection

```js
import { add, addIndex, map } from 'nanoutils'

const indexedMap = addIndex(map)

indexedMap(add, [1, 2, 3])  // [1, 3, 5]

// or

import { addIndex, filter } from 'nanoutils'

const indexedFilter = addIndex(filter)

indexedFilter((value, index) => index % 2 === 0, [1, 2, 3, 4, 5]) // [1, 3, 5]
```

## `adjust`

Returns an array with a changed value at specified position

```js
import { adjust, multiply } from 'nanoutils'

const mult2 = adjust(multiply(2))

mult2(0, [1, 2, 3])  // [2, 2, 3]
mult2(5, [1, 2, 3])  // [1, 2, 3]
```

::: tip
It returns a copy of an array even if an index is out of array bounds
:::

## `all`

Returns `true` iff a condition (technically, predicate) is `true` for every elements of an array. Otherwise, returns `false`

```js
import { all } from 'nanoutils'

const isEven = value => value % 2 === 0

all(isEven, [0, 2, 4, 6])   // true
all(isEven, [1, 2, 4, 6])   // false
```

::: tip
There is an early-return approach, so once it returns `false`, it will be `false` anyway
:::

## `allPass`

Returns `true` iff all conditions are `true` for an element. Otherwise, returns `false`

```js
import { allPass } from 'nanoutils'

const isNonEmptyArray = array => array.length > 0
const conditions = [Array.isArray, isNonEmptyArray]

allPass(conditions, [[1], [2], [3]])  // true
allPass(conditions, [])               // false
```

## `always`

Always returns the same value as is passed as an argument

```js
import { always } from 'nanoutils'

always(true)()      // true
always(false)()     // false
always(0)()         // 0
always({ a : 1 })() // { a : 1 }
```

::: tip
As returned value is identical to what is passed, it will point to same reference (i.e. `object` and `array`)

```js
import { always } from 'nanoutils'

const arr = [1, 2, 3]
const arr2 = always(arr)()

arr === arr2  // true
```
:::

## `and`

Curried analogue of `&&`-operator

| a | b | a && b |
|:---:|:---:|:---:|
| `false` | `false` | `false` |
| `false` | `true` | `false` |
| `true` | `false` | `false` |
| `true` | `true` | `true` |

## `any`

Returns `true` iff a condition is `true` to one of elements of an array. Otherwise, returns `false`

```js
import { any } from 'nanoutils'

const isGte5 = value => value >= 5

any(isGte5)([1, 2, 3, 4, 5])  // true
any(isGte5)([1, 2, 3, 4])     // false
```

## `anyPass`

Returns `true` iff one of conditions is `true` for an element. Otherwise, returns `false`

```js
import { anyPass } from 'nanoutils'

const isNumber = number => typeof number === 'number'
const isString = string => typeof string === 'string'
const isBoolean = boolean => typeof boolean === 'boolean'
const conditions = [isNumber, isString, isBoolean]

anyPass(conditions, false)  // true
anyPass(conditions, [])     // false
```

## `ap`

Applies an array of functions to an array and returns a flatten array

```js
import { ap } from 'nanoutils'

const minus3 = value => value - 3
const asIs = value => value
const plus3 = value => value + 3
const operations = [minus3, asIs, plus3]

ap(operations)([3, 4, 5])  // [0, 1, 2, 3, 4, 5, 6, 7, 8]
```

## `aperture`

Returns an array of arrays, composed of arrays with a required amount of elements

```js
import { aperture } from 'nanoutils'

aperture(2)([3, 4, 5])  // [[3, 4], [4, 5]]
aperture(3)([3, 4, 5])  // [[3, 4, 5]]
aperture(4)([3, 4, 5])  // []
```

::: danger
Passing negative integer leads to unexpected behaviour
:::

## `append`

Appends a value to an array

```js
import { append } from 'nanoutils'

const array = [1, 2, 3]
const array2 = append(4)(array) // [1, 2, 3, 4]

array === array2                // false
```

## `apply`

Passes an array as arguments to a function

```js
import { apply } from 'nanoutils'

const toArray = apply(function() { return [].slice.call(arguments) })

toArray([1, 2, 3])  // [1, 2, 3]

// or

import { apply } from 'nanoutils'

const min = (...args) => args.reduce(
  (min, value) => min < value ? min : value,
  Number.POSITIVE_INFINITY
)

apply(min)([1, 2, 3, 4, 5, 6])  // 1
```

## `applySpec`

Passes an array as arguments to all functions within an object and returns an object of applied functions

```js
import { applySpec } from 'nanoutils'

const addSalaryToPlan = applySpec({
  tax: ({ tax }, salary) => tax + 0.13 * salary,
  medicine: ({ medicine }, salary) => before + 0.1 * salary,
  rent: ({ rent }, salary) => before + 45000,
  trip: ({ trip }, salary) => before + 0.47 * salary - 45000,
  food: ({ food }, salary) => before + 0.2 * salary,
  restaurant: ({ restaurant }, salary) => before + 0.1 * salary
})

let before = {}
const addSalary = salary => {
  before = addSalaryToPlan(before, salary)
  return before
}

addSalary(150000) // { tax: 19500, medicine: 15000, rent: 45000, trip: 25500, food: 30000, restaurant: 15000 }
```

## `applyTo`

Passes a value to a function

```js
import { apply, applyTo } from 'nanoutils'

const last = arr => arr[arr.length - 1]
const array = [1, 2, 3]

applyTo(array)(last)  // 3
```

::: danger
It acts not like `apply`, do not mix them together

`apply` uses an array to pass elements of it step by step

```js
const argsSum = (...args) => args.reduce((sum, value) => sum + value, 0)

apply(argsSum)([1, 2, 3, 4])  // 10
```

However, `applyTo` passes argument as is (i.e. `array`, not elements by elements)

```js
const arraySum = args => args.reduce((sum, value) => sum + value, 0)

applyTo([1, 2, 3, 4])(arraySum) // 10
applyTo([1, 2, 3, 4])(argsSum)  // "01,2,3,4", the only one operation was 0 + [1, 2, 3, 4]
```
:::

## `ascend`

Given a getter function compares values in an ascending 📈 order

```js
import { ascend, prop } from 'nanoutils'

const a = { name: 'Anton' }
const b = { name: 'Alex' }
const compareNames = ascend(prop('name'))

compareNames(b, a)  // -1
compareNames(a, b)  // 1
compareNames(a, a)  // 0
```

## `assoc`

Makes a shallow copy and setting or overriding value by a specified property

```js
import { assoc } from 'nanoutils'

const object = { a: { b: 2 }}
const property = 'c'

assoc(property, 3, object)  // { a: { b: 2 }, c: 3 }
```

::: tip
It also works for arrays

```js
import { assoc } from 'nanoutils'

const array = [[1, 2], [3]]
const property = 0

assoc(property, 3, array)  // [3, [3]]
```
:::

## `assocPath`

Makes a shallow copy along a specified path and setting or overriding value by it

```js
import { assocPath } from 'nanoutils'

const object = { a: { b: 2 }}
const path = ['a', 'b']

assocPath(path, 3, object)  // { a: { b: 3 } }
```

::: tip
It also works for arrays as `assoc`
:::

## `az`

Given a getter function compares values in an alphabetical 🔤 order

```js
import { az, prop } from 'nanoutils'

const a = { letter: 'z' }
const b = { letter: 'y' }
const compareLetters = az(prop('letter'))

compareLetters(b, a)  // -1
compareLetters(a, a)  // 0
compareLetters(a, b)  // 1
```

## `binary`

Passes exactly 2 arguments

```js
import { binary } from 'nanoutils'

const mapper = (v, i, arr) => {
  arr.length = 0
  return v + 1
}

const array = [1, 2]
const array2 = [1, 2]

array.map(mapper)           // [2, undefined], 'cos original array's length is 0
array2.map(binary(mapper))  // TypeError: Cannot set property 'length' of undefined
```

## `bind`

Sets the context of a function

```js
import { bind } from 'nanoutils'

function Person(name, cash) {
  this.name = name
  this.cash = cash
}
function stealCash() {
  const cash = this.cash
  this.cash = 0
  return cash
}

const john = new Person('John', 12000)
const stealCashFromJohn = bind(stealCash)(john)

stealCashFromJohn() // 12000
john.cash           // 0
```

## `both`

Checks if two functions are `true` for arguments

```js
import { both } from 'nanoutils'

const hasNumber = (...args) => args.some(arg => typeof arg === 'number')
const hasString = (...args) => args.some(arg => typeof arg === 'string')

const hasNumberAndString = both(hasNumber, hasString)

hasNumberAndString(1, '2', 3, '4')  // true
hasNumberAndString(1, 2, 3, 4)      // false, only numbers
hasNumberAndString('1', '2', '3')   // false, only strings
hasNumberAndString(false, true)     // false, none of them
```
