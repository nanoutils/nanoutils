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
If you pass non-`number` values, it tries to convert them to `number`s and to add. Otherwise, it returns `NaN`
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

Returns an `array` with a changed value at specified position

```js
import { adjust, multiply } from 'nanoutils'

const mult2 = adjust(multiply(2))

mult2(0, [1, 2, 3])  // [2, 2, 3]
mult2(5, [1, 2, 3])  // [1, 2, 3]
```

::: tip
It returns a copy of an `array` even if an index is out of `array` bounds
:::

## `all`

Returns `true` iff a condition (technically, predicate) is `true` for every elements of an `array`. Otherwise, returns `false`

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

Returns `true` iff a condition is `true` to one of elements of an `array`. Otherwise, returns `false`

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

Applies an `array` of functions to an `array` and returns a flatten `array`

```js
import { ap } from 'nanoutils'

const minus3 = value => value - 3
const asIs = value => value
const plus3 = value => value + 3
const operations = [minus3, asIs, plus3]

ap(operations)([3, 4, 5])  // [0, 1, 2, 3, 4, 5, 6, 7, 8]
```

## `aperture`

Returns an `array` of `array`s, composed of `array`s with a required amount of elements

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

Appends a value to an `array`

```js
import { append } from 'nanoutils'

const array = [1, 2, 3]
const array2 = append(4)(array) // [1, 2, 3, 4]

array === array2                // false
```

## `apply`

Passes an `array` as arguments to a function

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

Passes an array as arguments to all functions within an `object` and returns an `object` of applied functions

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
It also works for `array`s

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

Returns a `string` in a camel case style

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

Removes falsy values from an `array`

```js
import { compact } from 'nanoutils'

compact([1, 0, 2, false, 3, null, 4, NaN, '5', '', 6, undefined]) // [1, 2, 3, 4, '5', 6]
```

::: tip
If an argument is not an array or `undefined`, it returns an empty array
:::

## `comparator`

Compares `2` values using a binary predicate and returns `-1`, `0` or `1`

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

Returns a concatenated `string` or `array`. Otherwise, returns `null`

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

Passes arguments to a constructor to create an `object`

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

Passes a specified number of arguments to create an `object`

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

Checks if a value is presented in an `array`

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

Converges a value with a function which uses results of an `array` of functions

```js
import { converge, divide, length, sum } from 'nanoutils'

const average = converge(divide, [sum, length])

average([1, 1, 3, 3, 5, 5, 7, 7, 9])  // 4.555555555555555
```

::: tip
`converge` is very convenient to extract statistical values from data and to work on vectors and matrices
:::

## `countBy`

Counts repetitions and saves them to an `object`

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

Decrements a value

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
If you pass a non-`number` value, it tries to convert them to a `number` and to decrement then. Otherwise, it returns `NaN`
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

Returns an `object` without a specified field

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

Returns an `object` without a specified field based on a given path

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
If you pass non-`number` values, it tries to convert them to `number`s and to return a division. Otherwise, it returns `NaN`
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
Returns a copy of a `string` or an `array` if a condition returns `false` for a last element
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

## `either`

Checks if at least one of functions is `true` for arguments

```js
import { either } from 'nanoutils'

const hasNumber = (...args) => args.some(arg => typeof arg === 'number')
const hasString = (...args) => args.some(arg => typeof arg === 'string')

const hasNumberOrString = either(hasNumber, hasString)

hasNumberOrString(1, '2', 3, '4')  // true
hasNumberOrString(1, 2, 3, 4)      // true, at least numbers
hasNumberOrString('1', '2', '3')   // true, at least strings
hasNumberOrString(false, true)     // false, none of them
```

## `empty`

Returns an empty value

```js
import { empty } from 'nanoutils'

empty([1, 2, 3])  // []
empty({ a: 1 })   // {}
empty('1234')     // ''
```

::: tip
If a value to a function is not within `value.constructor.empty`, not an `array`, an `object` or a `string`, it returns `Arguments`

```js
import { empty } from 'nanoutils'

empty(123)            // []
typeof empty(123)     // 'object'
empty(123).toString() // '[object Arguments]'
```
:::

## `endsWith`

Check if an `array` or a `string` has a specifix suffix

```js
import { endsWith } from 'nanoutils'

endsWith('ring', 'spring')  // true
endsWith([1, 1])([1, 1, 2]) // false
```

::: warning
If both arguments are neither a `string` nor an `array`, a function returns `undefined`

```js
import { endsWith } from 'nanoutils'

endsWith(1, 'abc')                // undefined
endsWith(function() {}, 'abc')    // undefined
endsWith([1, 2], { 0: 1, 1: 2 })  // undefined
endsWith('34', 1234)              // undefined
```
:::

## `eqBy`

Compares two arguments which are passed to a function

```js
import { eqBy, prop } from 'nanoutils'

const danAbramov = { firstName: 'Dan', lastName: 'Abramov' }
const danIvanov = { firstName: 'Dan', lastName: 'Ivanov' }

eqBy(prop('firstName'), danAbramov, danIvanov)    // true
eqBy(prop('lastName'), danAbramov, danIvanov)     // false
```

::: tip
It compares values using [`equals`](#equals)
:::

## `eqLens`

Compares a value with an argument which is passed to a lens-like function

```js
import { eqLens, lens } from 'nanoutils'

const lastName = 'Abramov'
const danAbramov = { firstName: 'Dan', lastName: 'Abramov' }
const danIvanov = { firstName: 'Dan', lastName: 'Ivanov' }
const lastNameLens = lens(person => person.lastName)

eqLens(lastNameLens, lastName, danAbramov)    // true
eqLens(lastNameLens, lastName, danIvanov)     // false
```

::: tip
It compares values using [`equals`](#equals)
:::

## `eqProps`

Compares properties of two objects by a key

```js
import { eqProps } from 'nanoutils'

const danAbramov = { firstName: 'Dan', lastName: 'Abramov' }
const danIvanov = { firstName: 'Dan', lastName: 'Ivanov' }

eqProps('firstName', danIvanov, danAbramov)    // true
eqProps('lastName', danIvanov, danAbramov)     // false
```

::: tip
It compares values using [`equals`](#equals)
:::

## `equals`

Compares two values deeply with possible circulars

```js
import { equals } from 'nanoutils'

const danAbramov = { firstName: 'Dan', lastName: 'Abramov' }
const danIvanov = { firstName: 'Dan', lastName: 'Ivanov' }

equals(danAbramov, danAbramov)    // true
equals(danAbramov, danIvanov)     // false
equals(danIvanov, danIvanov)      // true
```

::: tip
It compares values using [`equals`](#equals)
:::

::: warning
A comparison of mirror arrays and objects is not working yet
:::

## `eqWith`

Compares two values with a comparator

```js
import { eqWith } from 'nanoutils'

const lengthComparison = (arr1, arr2) => arr1.length === arr2.length
const eqWithLength = eqWith(lengthComparison)

eqWithLength([1, 2], [2, 3])    // true
eqWithLength([1, 2], [2, 3, 4]) // false
```

## `evolve`

Transforms all properties of an `object` with an `object` whose properties are transformations

```js
import { add, evolve } from 'nanoutils'

const celebrateBirthday = {
  age: add(1)
}
const person = {
  name: 'Alex Berezin',
  age: 24
}

evolve(celebrateBirthday, person)   // { name: 'Alex Berezin', age: 25 }
```

::: tip
Always returns a new object
:::

::: warning
Do not add properties which are absent in an object but are present in transformations

It won't be present in a resulting object
:::

## `F`

Always returns `false`

```js
import { F } from 'nanoutils'

F()     // false
F(1)    // false
F(true) // false
```

## `fill`

Returns an `array` with filled values

```js
import { fill } from 'nanoutils'

let marks = [4, 5, 5, 3, 4]

fill()(arr)         // [4, 5, 5, 3, 4] 
fill(0)(arr)        // [0, 0, 0, 0, 0] 
fill(0, 2)(arr)     // [4, 5, 0, 0, 0] 
fill(0, 2, -1)(arr) // [4, 5, 0, 0, 4] 
```

::: tip
It returns a new (but shallow copy of) array even though a value is `undefined`
:::

## `filter`

Filters values for both `array`s and `object`s

```js
import { filter } from 'nanoutils'

const people = [
  { name: 'Nick Oldman', age: 45 },
  { name: 'Jack Newton', age: 12 }
]
filter(({ age }) => age >= 18, people)  // [{ name: 'Nick Oldman', age: 45 }]

const peopleObj = {
  'Nick Oldman': 45,
  'Jack Newton': 12
}
filter(age => age >= 18, peopleObj)     // { 'Nick Oldman': 45 }
```

## `filterT`

Creates a transducer with a filter

```js
import { filterT } from 'nanoutils'

const pushReducer = (array, value) => {
  array.push(value)
  return array
}
const isEven = value => value % 2 === 0
const transducer = filterT(isEven)
const rootReducer = transducer(pushReducer)

rootReducer([], 1)      // []
rootReducer([], 2)      // [2]
rootReducer([2], 3)     // [2]
rootReducer([2], 4)     // [2, 4]
rootReducer([2, 4], 5)  // [2, 4]
```

## `find`

Finds a value in an `array` based on a predicate and returns it (a search is made from a beginning). Otherwise, returns `undefined`

```js
import { find } from 'nanoutils'

const isLessThan10 = value => value >= 0 && value < 10

find(isLessThan10, [10, 20, 30])   // undefined
find(isLessThan10, [10, 2, 3])     // 2
```

## `findIndex`

Finds a value in an `array` based on a predicate and returns an index of it (a search is made from a beginning). Otherwise, returns `-1`

```js
import { findIndex } from 'nanoutils'

const isLessThan10 = value => value >= 0 && value < 10

findIndex(isLessThan10, [10, 20, 30])    // -1
findIndex(isLessThan10, [10, 2, 3])      // 1
```

## `findLast`

Finds a value in an `array` based on a predicate and returns it (a search is made from an end). Otherwise, returns `undefined`

```js
import { findLast } from 'nanoutils'

const isLessThan10 = value => value >= 0 && value < 10

findLast(isLessThan10, [10, 20, 30])   // undefined
findLast(isLessThan10, [10, 2, 3])     // 3
```

## `findLastIndex`

Finds a value in an `array` based on a predicate and returns an index of it (a search is made from an end). Otherwise, returns `-1`

```js
import { findLastIndex } from 'nanoutils'

const isLessThan10 = value => value >= 0 && value < 10

findLastIndex(isLessThan10, [10, 20, 30])    // -1
findLastIndex(isLessThan10, [10, 2, 3])      // 2
```

## `flatten`

Deeply unfolds all nested `array`s into one flat `array` with shallow copying not-`array` elements

```js
import { flatten } from 'nanoutils'

var array = [1, 2, [3, [4, [5]], 6], [7], 8]

flatten(array)  // [1, 2, 3, 4, 5, 6, 7, 8]
```

::: tip
In spite of `unnest`, `flatten` method makes deep unfolding, not only unwraps first level
:::

## `flattenObj`

It converts nested `object` into a flatten one, all keys become paths to repsective values

```js
import { flattenObj } from 'nanoutils'

const people = {
  john: {
    name: 'John Parker',
    age: 18
  }
}
flattenObj(people)  //  { 'john.name': 'John Parker', 'john.age': 18 }
```

::: tip
Remember that `flattenObj` is applied only to `object`s

To apply it to `array`s have a look at [flatten](#flatten)
:::

## `flip`

Applies a function to a reversed list of arguments

```js
import { flip } from 'nanoutils'

const pushReducer = (arr, v) => {
  arr.push(v)
  return arr
}
const push = flip(pushReducer)
push(2, [1])   // [1, 2]
```

::: tip
It reverses a list of arguments, not values

```js
import { flip } from 'nanoutils'

const f = flip((a, b, c) => [a, b, c])

f(1, 2, 3)    // [3, 2, 1]
```
:::

## `forEach`

Applies a function to elements of an `array`

```js
import { forEach } from 'nanoutils'

const log = forEach(v => console.log(v))

log([1, 2, 3, 4])   // Shows 1, 2, 3, 4 in the console
```

::: warning
It can have side-effects if you mutate an initial array
:::

## `forEachObjIndexed`

Iterates over `object`s' key-value pairs

```js
import { forEachObjIndexed } from 'nanoutils'

const obj = { a: 1, b: 4, c: 3 }
const found = []
const fill = (value, key) => {
  // 96 is a code before 'a', so 'a' is first
  if (key.charCodeAt(0) - 96 === value) {
    found.push([key, value])
  }
}

forEachObjIndexed(fill, obj)
found   // [['a', 1], ['c', 3]]
```

::: tip
It doesn't iterate `prototype`'s keys and values
:::

## `fromPairs`

Collects an `object` from pairs of keys and values

```js
import { fromPairs } from 'nanoutils'

const pairs = [['a', 1], ['b', 2]]

fromPairs(pairs)  // { a: 1, b: 2 }
```

::: tip
if pairs are not an array it returns an empty object
:::

## `groupBy`

Divides into groups whose key is a result of a function applied to a value from arguments

```js
import { groupBy } fronm 'nanoutils'

const type = value => Array.isArray(value)
  ? 'array'
  : value == null
    ? 'nullable'
    : typeof value
const args = [null, undefined, NaN, 0, [], { a: 1 }]

groupBy(type, args) // { nullable: [null, undefined], number: [NaN, 0], array: [[]], object: [{ a: 1 }] }
```

## `groupWith`

Divides into groups where elements are a part of one group if a predicate returns `true` for adjacent elements

```js
import { groupWith, identical } from 'nanoutils'

const arr = [1, 1, 2, 2, 2, 1, 1]

groupWith(identical, arr)   // [[1, 1], [2, 2, 2], [1, 1]]
```

## `gt`

Checks if a first argument is greater than a second one

```js
import { gt } from 'nanoutils'

gt(1, 2)  // false
gt(2, 2)  // false
gt(3, 2)  // true
```


## `gte`

Checks if a first argument is greater than or equals to a second one

```js
import { gte } from 'nanoutils'

gte(1, 2)  // false
gte(2, 2)  // true
gte(3, 2)  // true
```

## `has`

Checks if an object has provided own property

```js
import { has } from 'nanoutils'

const obj = {
  a: 1,
  __proto__: {
    b: 2
  }
}

has('a', obj)   // true
has('b', obj)   // false
```

::: tip
Method doesn't use `prorotype` chain, only `object` itself
:::

## `hasIn`

```js
import { hasIn } from 'nanoutils'

const obj = {
  a: 1,
  __proto__: {
    b: 2
  }
}

hasIn('a', obj)   // true
hasIn('b', obj)   // true
```

::: tip
Unlike [`has`](#has), `hasIn` uses `prototype` chain to find a property
:::

## `head`

Returns first element of a list or a `string`

```js
import { head } from 'nanoutils'

function argFirst() {
  return head(arguments)
}
const arr = [1, 2, 3, 4]
const str = '1234'

head(arr)           // 1
head(str)           // 1
argsFirst(1, 2, 3)  // 1
```

::: tip
It also returns `object`'s value for a key `0`

```js
import { head } from 'nanoutils'

const obj = { 0: 1, 1: 2 }

head(obj)   // 1
```
:::

## `keys`

## `keysIn`
