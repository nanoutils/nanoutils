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

## `call`

Returns a result of calling a function with passed arguments

```js
import { add, call } from 'nanoutils'

call(add, 1, 2) // 3
call(add)(1, 2) // 3
```

## `camelCase`

Returns a string in a camel case style

```js
import { camelCase } from 'nanoutils'

camelCase('-to camel_case')  // toCamelCase
```

::: tip
Separators which are identified are:

* Space ` `
* Underscore `_`
* Hyphen `-`
:::

## `chain`

It chains binary and unary functions

```js
import { chain, length, prepend } from 'nanoutils'

chain(prepend, length)([1, 2, 3])  // [3, 1, 2, 3]
```

::: tip
`chain` is also known as `flatMap` or `flatten`

It takes a function which returns an array and combines all arrays into an array

```js
import { chain } from 'nanoutils'

const mapper = a => [a, -a]

chain(mapper)([1, 2, 3])  // [1, -1, 2, -2, 3, -3]
```
:::

## `clamp`

Returns a valid number within a specified interval

```js
import { clamp } from 'nanoutils'

const interval = [1, 5]

clamp(...interval, -1)  // 1
clamp(...interval, 3)   // 3
clamp(...interval, 10)  // 5
```

::: danger
A lower bound cannot be greater than an upper bound. It will lead to an unexpected behaviour
:::

## `clone`

Returns a deep clone of an argument

```js
import { clone } from 'nanoutils'

const shop = { apple: 2, banana: 1, orange: 3 }
const clonedShop = clone(shop)

clonedShop          // { apple: 2, banana: 1, orange: 3 }
clonedShop === shop // false
```

::: tip
It clones even circular `object`s

```js
import { clone } from 'nanoutils'

const object = {}
object.ref = object
const clonedObject = clone(object)

const array = []
array[0] = array
const clonedArray = clone(array)

clonedObject  // { ref: [Object] }, the same structure as object
clonedArray   // [Array], the same structure as array
```
:::

## `compact`

Removes falsy values from an array

```js
import { compact } from 'nanoutils'

compact([1, 0, 2, false, 3, null, 4, NaN, '5', '', 6, undefined]) // [1, 2, 3, 4, '5', 6]
```

::: tip
If an argument is not an array or `undefined`, it returns an empty array
:::

## `comparator`

Compares 2 values using a binary predicate and returns `-1`, `0` or `1`

```js
import { comparator } from 'nanoutils'

const isGte = (a, b) => a >= b
const isGt = (a, b) => a > b
const isLte = (a, b) => a <= b
const isLt = (a, b) => a < b

isGte(5, 3) // -1
isGte(3, 3) // -1
isGte(3, 5) // 1,
isGt(5, 3)  // -1
isGt(3, 3)  // 0
isGt(3, 5)  // 1
isLte(5, 3) // 1
isLte(3, 3) // 1
isLte(3, 5) // -1
isLt(5, 3)  // 1
isLt(3, 3)  // 0
isLt(3, 5)  // -1
```

::: danger
Probably, it's not what you want to use in your case

It can not always return `0` at all as a comparison should be strict
:::

## `complement`

Returns an opposite value for a function with specified arguments

```js
import { complement } from 'nanoutils'

const hasValue = complement(value => value == null)

hasValue(null)      // false
hasValue(undefined) // false
hasValue(3)         // true
```

## `compose`

Combines functions from right to left for a specified value

```js
import { add, compose, multiply } from 'nanoutils'

compose(add(5), multiply(2))(1) // 7
```

::: danger
Do not mix `compose` and `pipe` as a call order is different

```js
import { add, compose, multiply, pipe } from 'nanoutils'

compose(add(1), multiply(2))(1)   // 3 (1 * 2 + 1)
pipe(add(1), multiply(2))(1)      // 4 ((1 + 1) * 2)
```
:::

## `composeP`

It's similar to `compose` but combines actions (functions which return `Promise`)

```js
import { composeP } from 'nanoutils'

const db = {
  users: {
    1: {
      name: 'John',
      followings: []
    },
    2: {
      name: 'Nick',
      followings: [1]
    },
    3: {
      name: 'Paul',
      followings: [1, 2]
    }
  }
}

const getUser = userId => Promise.resolve(db.users[userId])
const getFollowingsByUser = user => Promise.resolve(user.followings)
const getFollowingsById = userId => composeP(getFollowingsByUser, getUser)

getFollowingsById(3).then(followings =>
  followings  // [1, 2]
)
```

## `composeT`

Combines transducers into a transducer

```js
import { add, composeT, mapT, takeT } from 'nanoutils'

const pushReducer = (array, value) => {
  array.push(value)
  return array
}
const transducer = composeT(mapT(add(1)), takeT(2))
const rootReducer = transducer(pushReducer)

rootReducer([], 1)      // [2]
rootReducer([2], 2)     // [2, 3]
rootReducer([2, 3], 3)  // [2, 3]
```

::: tip
It's basically used with [`transduce`](#transduce)

```js
import { add, append, composeT, flip, mapT, takeT, transduce } from 'nanoutils'

const transducer = composeT(mapT(add(1)), takeT(2))

transduce(transducer, flip(append), [], [1, 2, 3])  // [2, 3]
```
:::

## `concat`

Returns a concatenated string or array. Otherwise, returns `null`

```js
import { concat } from 'nanoutils'

concat([1, 2], [3, 4])  // [1, 2, 3, 4]
concat('12', '34')      // '1234'
concat([1, 2], '34')    // null
concat('12', [3, 4])    // null
```

## `cond`

Declarative analogue of `if-else` with early return

Old way:

```js
const getValue = value => {
  if (value === 3) {
    return 3
  }
  if (value > 1) {
    return 2
  }
  return 1
}

getValue(1)   // 1
getValue(2)   // 2
getValue(3)   // 3
```

`cond` way:

```js
import { cond } from 'nanoutils'

const getValue = cond([
  [value => value === 3, () => 3],
  [value => value > 1, () => 2],
  [() => true, () => 1]
])

getValue(1)   // 1
getValue(2)   // 2
getValue(3)   // 3
```

::: tip
As all JS functions, if you don't specify a returned value in `cond` for, it returns `undefined`

```js
import { cond } from 'nanoutils'

cond([])(1) // undefined
```
:::

## `construct`

Passes arguments to a constructor to create an object

```js
import { construct } from 'nanoutils'

function Person(name, address) {
  this.name = name
  this.address = address
}

const john = construct(Person)('John', '2573 Carolyns Circle')

john.name     // 'John'
john.address  // '2573 Carolyns Circle'
```

## `constructN`

Passes a specified number of arguments to create an object

```js
import { constructN } from 'nanoutils'

const Top3 = constructN(3, function() {
  this.list = [].slice.call(arguments)
})

const fruits = Top3('apple')('orange')('banana')

fruits.list // ['apple', 'orange', 'banana']
```

::: danger
Do not mix `construct` and `constructN`

`construct` is waiting for exact the same number of arguments a constructor takes (i.e. `Person` took 2 arguments: `name` and `address`)

However, with `constructN` you can specify a different number of arguments if at all it was set (i.e. if a constructor uses `arguments`, a number of arguments is not computed)
:::

## `contains`

Checks if a value is presented in an array

```js
import { contains } from 'nanoutils'

const containsNull = contains(null)

containsNull([1, 2, 3, 4, null])  // true
containsNull([1, 2, 3, 4])        // false
```

::: tip
An equality is checked strictly by a value

It means that complex objects are checked by identical keys and values recursively, primitives are checked with `===`
:::

## `converge`

Converges a value with a function which uses results of an array of functions

```js
import { converge, divide, length, sum } from 'nanoutils'

const average = converge(divide, [sum, length])

average([1, 1, 3, 3, 5, 5, 7, 7, 9])  // 4.555555555555555
```

::: tip
`converge` is very convenient to extract statistical values from data and to work on vectors and matrices
:::

## `countBy`

Counts repetitions and saves them to an object

```js
import { countBy, identity } from 'nanoutils'

const isPermutation = (str1, str2) => {
  const getRepeations = countBy(identity)
  const repeats1 = getRepeations([...str1])
  const repeats2 = getRepeations([...str2])
  const keys1 = Object.keys(repeats1)
  const keys2 = Object.keys(repeats2)
  
  if (keys1.length !== keys2.length) {
    return false
  }
  return keys1.filter(key => repeats2[key] === repeats1[key]).length === keys1.length
}

isPermutation('str', 'tsr')   // true
isPermutation('str', 'trsss') // false
```

## `curry`

Returns a curried version of a function

```js
import { curry } from 'nanoutils'

const add3 = curry((a, b, c) => a + b + c)

add3(1, 2, 3)   // 6
add3(1, 2)(3)   // 6
add3(1)(2, 3)   // 6
```

::: tip
It curries a function with arguments it takes
:::

:::danger
If a function has a value by default, `curry` will see arguments until it

```js
import { curry } from 'nanoutils'

const add3 = curry((a, b = 2, c = 3) => a + b + c)

add3(1, 3, 4)    // 8
add3(1, 3)(4)   // TypeError: add3(...) is not a function
add3(1, 3)      // 7
add3(1)(3, 4)   // TypeError: add3(...) is not a function
add3(1)          // 6
```
:::

## `curryN`

Similar to `curry` but can specify a number of arguments (accepted minimum)

```js
import { curryN } from 'nanoutils'

const add1 = curryN(1, (a, b = 2, c = 3) => a + b + c)

add1(1, 3, 4)  // 8
add1(1, 3)    // 7
add1(1)       // 6
```

::: tip
It's convenient when a function has arguments with values by default
:::

## `debounce`

Delays a call of function until specified time

```js
import { debounce } from 'nanoutils'

const click = debounce(200, (...args) => console.log(`Click with ${args}`))

click(1, 2)
click(2, 3)
click(3, 4)
// in 200 ms after a last call: 'Click with 3,4'
```
 
## `dec`

Decrements a number

```js
import { dec } from 'nanoutils'

dec(1)        // 0
dec('1')      // 0
dec('1')      // 0
dec('a')      // NaN
dec(null)     // -1
dec(false)    // -1
dec(true)     // 0
dec([])       // -1
dec([2])      // 1
dec([1, 2])   // NaN
```

::: tip JS-friendly
If you pass a non-number value, it tries to convert them to a number and to decrement then. Otherwise, it returns `NaN`
:::

## `defaultTo`

Returns a value if it doesn't equal to `undefined`, `null` and `NaN`

```js
import { defaultTo } from 'nanoutils'

const defaultTo42 = defaultTo(42)

defaultTo42(undefined)    // 42
defaultTo42(null)         // 42
defaultTo42(NaN)          // 42
defaultTo42(false)        // false
```

## `descend`

Given a getter function compares values in an descending 📉 order

```js
import { descend } from 'nanoutils'

const byAge = descend(({ age }) => age)

byAge({ age: 19 }, { age: 18 })   // -1
byAge({ age: 18 }, { age: 18 })   // 0
byAge({ age: 18 }, { age: 19 })   // 1
```

## `difference`

Returns a difference between `array`s

```js
import { difference } from 'nanoutils'

difference([1, 2, 3], [1, 2, 3, 4])           // []
difference([1, 2, 3], [1, 2])                 // [3]
difference([{ a: 1 }, { b: 2 }], [{ b: 2 }])  // [{ a: 1 }]
```

## `differenceWith`

Given a comparator returns a difference between `array`s

```js
import { differenceWith } from 'nanoutils'

const withPropA = differenceWith((obj1, obj2) => obj1.a === obj2.a)

withPropA([{ a: 1, b: 2 }], [{ a: 1 }])   // []
withPropA([{ a: 1, b: 2 }], [{ a: 2 }])   // [{ a: 1, b: 2 }]
```

## `dissoc`

Returns an object without a specified field

```js
import { dissoc } from 'nanoutils'

const withoutPropA = dissoc('a')

withoutPropA({ a: 1 })        // {}
withoutPropA({ a: 1, b: 2 })  // { b: 2 }
```

::: tip
Returns a shallow copy of an object
:::

## `dissocPath`

Returns an object without a specified field based on a given path

```js 
import { dissocPath } from 'nanoutils'

const path = ['a', 'b', 'c']
const dissoc = dissocPath(path)

dissoc({ a: { b: { c: 1 } } })    // { a: { b: {} } }
dissoc({ a: { b: 2 })             // { a: { b: {} } }
```

::: warning
If a path is not fully resolved, last resolved item will become an empty object
:::

## `divide`

Returns a division of two values

```js
import { divide } from 'nanoutils'

divide(1, 1)          // 1
divide(1)(1)          // 1
divide('1')(1)        // 1
divide('1')('1')      // 1
divide(-1)(0)         // -Infinity
divide(1)('a')        // NaN
divide(null)(null)    // NaN
divide(false)(false)  // NaN
divide(true)(true)    // 1
divide([])([])        // NaN
divide([2])([2])      // 1
```

::: tip JS-friendly
If you pass non-number values, it tries to convert them to numbers and to return a division. Otherwise, it returns `NaN`
:::

## `drop`

Returns a `string` or an `array` with a specified number of dropped elements (from a beginning)

```js
import { drop } from 'nanoutils'

drop(2)('1234')       // '34'
drop(2)([1, 2, 3, 4]) // [3, 4]
```

::: tip
Returns same `string` or `array` if a number is negative
:::

## `dropLast`

Returns a `string` or an `array` with a specified number of dropped elements (from an end)

```js
import { dropLast } from 'nanoutils'

dropLast(2)('1234')       // '12'
dropLast(2)([1, 2, 3, 4]) // [1, 2]
```

::: tip
Returns same `string` or `array` if a number is negative
:::

## `dropLastWhile`

Returns a `string` or an `array` with a specified number of dropped elements (from an end while a condition returns `true`)

```js
import { dropLastWhile } from 'nanoutils'

const dropWhileGreater2 = dropLastWhile(value => value > 2)

dropWhileGreater2('1234')       // '12'
dropWhileGreater2([1, 2, 3, 4]) // [1, 2]
```

::: tip
Returns a copy of a `string` or an `array` if a condition returns `false` for a first element
:::

## `dropRepeats`

Returns a `string` or an `array` which has dropped next identical elements

```js
import { dropRepeats } from 'nanoutils'

dropRepeats([-1, 1, 1, 2, -2, 2])   // [-1, 1, 2, -2, 2]
dropRepeats('112334555')            // '12345'
```

::: tip
Identity is based on `equal`
:::

## `dropRepeatsWith`

Returns a `string` or an `array` which has dropped next elements based on a function

```js
import { dropRepeatsWith } from 'nanoutils'

const isAbsEqual = (a, b) => Math.abs(a) === Math.abs(b)

dropRepeatsWith(isAbsEqual, [-1, 1, 1, 2, -2, 2])   // [-1, 2]
dropRepeatsWith(isNextEqual, '112334555')           // '11355'
```

## `dropWhile`

Returns a `string` or an `array` with a specified number of dropped elements (from a beginning while a condition returns `true`)

```js
import { dropWhile } from 'nanoutils'

const dropWhileLess3 = dropWhile(value => value < 3)

dropWhileLess3('1234')       // '34'
dropWhileLess3([1, 2, 3, 4]) // [3, 4]
```

::: tip
Returns a copy of a `string` or an `array` if a condition returns `false` for a first element
:::
