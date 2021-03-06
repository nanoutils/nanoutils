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

Adds a specified index to iterate a collection

```js
import { add, addIndex, map } from 'nanoutils'

const indexedMap = addIndex(map)

indexedMap(add, [1, 2, 3])  // [1, 3, 5]
```

::: tip
Also example with `filter`

```js
import { addIndex, filter } from 'nanoutils'

const indexedFilter = addIndex(filter)

indexedFilter((value, index) => index % 2 === 0, [1, 2, 3, 4, 5]) // [1, 3, 5]
```
:::

## `adjust`

Returns `array` with a specified value at given index

```js
import { adjust, multiply } from 'nanoutils'

const mult2 = adjust(multiply(2))

mult2(0, [1, 2, 3])  // [2, 2, 3]
mult2(5, [1, 2, 3])  // [1, 2, 3]
```

::: tip
It returns a copy of `array` even if a specified index is out of `array` bounds
:::

## `all`

Returns `true` iff a given predicate returns `true` for every elements of `array`. Otherwise, returns `false`

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

Returns `true` iff all predicates return `true` for a specified value. Otherwise, returns `false`

```js
import { allPass } from 'nanoutils'

const isNonEmptyArray = array => array.length > 0
const conditions = [Array.isArray, isNonEmptyArray]

allPass(conditions, [[1], [2], [3]])  // true
allPass(conditions, [])               // false
```

## `always`

Returns function which always returns a specified value

```js
import { always } from 'nanoutils'

always(true)()      // true
always(false)()     // false
always(0)()         // 0
always({ a : 1 })() // { a : 1 }
```

::: tip
As returned value is identical to what is passed, it will point to same reference (e.g. `object` and `array`)

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

Returns `true` iff a specified predicate returns `true` for any of `array` values. Otherwise, returns `false`

```js
import { any } from 'nanoutils'

const isGte5 = value => value >= 5

any(isGte5)([1, 2, 3, 4, 5])  // true
any(isGte5)([1, 2, 3, 4])     // false
```

## `anyPass`

Returns `true` iff any of predicates retrn `true` for a specified value. Otherwise, returns `false`

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

Applies `array` of functions to `array` and returns flatten `array`

```js
import { ap } from 'nanoutils'

const minus3 = value => value - 3
const asIs = value => value
const plus3 = value => value + 3
const operations = [minus3, asIs, plus3]

ap(operations)([3, 4, 5])  // [0, 1, 2, 3, 4, 5, 6, 7, 8]
```

## `aperture`

Returns subset of `array`s with sub`array`s of a required amount of values

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

Appends a specified value to the end of `array`

```js
import { append } from 'nanoutils'

const array = [1, 2, 3]
const array2 = append(4)(array)   // [1, 2, 3, 4]
```

## `apply`

Passes `array` as arguments to a specified function

```js
import { apply } from 'nanoutils'

const toArray = apply(function() { return [].slice.call(arguments) })

toArray([1, 2, 3])  // [1, 2, 3]
```

::: tip
Another example

```js
import { apply } from 'nanoutils'

const min = (...args) => args.reduce(
  (min, value) => min < value ? min : value,
  Number.POSITIVE_INFINITY
)

apply(min)([1, 2, 3, 4, 5, 6])  // 1
```
:::

## `applySpec`

Passes arguments to all functions within `object` and returns `object` of applied functions

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

Passes value to a function

```js
import { apply, applyTo } from 'nanoutils'

const last = arr => arr[arr.length - 1]
const array = [1, 2, 3]

applyTo(array)(last)  // 3
```

::: danger
It acts not like `apply`, do not mix them together

`apply` uses `array` to pass elements step by step

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

const anton = { name: 'Anton' }
const alex = { name: 'Alex' }
const compareNames = ascend(prop('name'))

compareNames(alex, anton)   // -1
compareNames(anton, alex)   // 1
compareNames(anton, anton)  // 0
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
It also works for `array`s as `assoc`
:::

## `az`

Given a getter function compares values in alphabetical 🔤 order

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

Passes exactly `2` arguments

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

Checks if `2` predicates return `true` for arguments

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

Returns `string` in a camel case style

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

::: tip
Also see [`kebabCase`](#kebabCase) and [`snakeCase`](#snakeCase)
:::

::: warning
Incorrect symbols such as non-separators, not Cyrrilic or Latin letters, are removed
:::

## `ceil`

Rounds `number` up to a specified precision

```js
import { ceil } from 'nanoutils'

ceil(15.002, 3)   // 15.002
ceil(15.002, 2)   // 15.01
ceil(15.002, 1)   // 15.1
ceil(15.002, 0)   // 16
ceil(15.002, -1)  // 20
ceil(15.002, -2)  // 100
ceil(15.002, -3)  // 1000
```

::: tip
It works same to `Array.ceil` but is extended with a specified precision

It equals to:

```js
const multiplier = Math.pow(10, precision)
return Array.ceil(value / multiplier) * multiplier
```

but is also working with e-notation
:::

## `chain`

It chains binary and unary functions

```js
import { chain, length, prepend } from 'nanoutils'

chain(prepend, length)([1, 2, 3])  // [3, 1, 2, 3]
```

::: tip
`chain` is also known as `flatMap` or `flatten`

It takes a function which returns `array` and combines all `array`s into `array`

```js
import { chain } from 'nanoutils'

const mapper = a => [a, -a]

chain(mapper)([1, 2, 3])  // [1, -1, 2, -2, 3, -3]
```
:::

## `clamp`

Returns a valid `number` within a specified interval

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

Returns a deep clone of value

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

Removes falsy values from `array`

```js
import { compact } from 'nanoutils'

compact([1, 0, 2, false, 3, null, 4, NaN, '5', '', 6, undefined]) // [1, 2, 3, 4, '5', 6]
```

::: tip
If value is not `array` or `undefined`, it returns an empty `array`
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

Combines actions (functions which return `Promise`) from right to left for a specified value

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

Combines transducers into a transducer from right to left

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

Passes arguments to a constructor to create `object`

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

Passes a specified number of arguments to create `object`

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

`construct` is waiting for exact same `number` of arguments constructor takes (i.e. `Person` took 2 arguments: `name` and `address`)

However, with `constructN` you can specify a different `number` of arguments if at all it was set (i.e. if a constructor uses `arguments`, `number` of arguments is not computed)
:::

## `contains`

Checks if a value is presented in `array` using `equals`

```js
import { contains } from 'nanoutils'

const containsNull = contains(null)

containsNull([1, 2, 3, 4, null])  // true
containsNull([1, 2, 3, 4])        // false
```

## `converge`

Converges a value with a function which uses results of `array` of functions

```js
import { converge, divide, length, sum } from 'nanoutils'

const average = converge(divide, [sum, length])

average([1, 1, 3, 3, 5, 5, 7, 7, 9])  // 4.555555555555555
```

::: tip
`converge` is very convenient to extract statistical values from data and to work on vectors and matrices
:::

## `countBy`

Counts repetitions and saves them to `object`

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

Similar to `curry` but can specify `number` of arguments (accepted minimum)

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

Runs a last call of a specified function in a specified `number` of milliseconds

```js
import { debounce } from 'nanoutils'

const click = debounce(200, (...args) => console.log(`Click with ${args}`))

click(1, 2)
click(2, 3)
click(3, 4)
// in 200 ms after a last call: 'Click with 3,4'
```

::: tip
If a debounced function is called more than `1` times within a specified number of milliseconds, the last call will be run then
:::
 
## `dec`

Decrements value

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
If you pass non-`number` value, it tries to convert it to `number` and to decrement then. Otherwise, it returns `NaN`
:::

## `defaultTo`

Returns a value if it doesn't equal to `undefined`, `null` or `NaN`

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

Returns `object` without a specified field

```js
import { dissoc } from 'nanoutils'

const withoutPropA = dissoc('a')

withoutPropA({ a: 1 })        // {}
withoutPropA({ a: 1, b: 2 })  // { b: 2 }
```

::: tip
Returns a shallow copy of `object`
:::

## `dissocPath`

Returns `object` without a specified field based on a given path

```js 
import { dissocPath } from 'nanoutils'

const path = ['a', 'b', 'c']
const dissoc = dissocPath(path)

dissoc({ a: { b: { c: 1 } } })    // { a: { b: {} } }
dissoc({ a: { b: 2 })             // { a: { b: {} } }
```

::: warning
If a path is not fully resolved, last resolved item will become empty `object`
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

Drops a specified `number` of values from the beginning of `string` or `array`

```js
import { drop } from 'nanoutils'

drop(2)('1234')       // '34'
drop(2)([1, 2, 3, 4]) // [3, 4]
```

::: tip
Returns same `string` or `array` if a number is negative
:::

## `dropT`

Creates a `drop`-like transducer with a specified number of non-accepting values

```js
import { dropT } from 'nanoutils'

const transducer = dropT(1)
const skipFirstBankAccount = transducer((bank, value) => {
  array.push(value)
  return array
})

skipFirstBankAccount([], 1)       // []
skipFirstBankAccount([], 2)       // [2]
skipFirstBankAccount([2], 3)      // [2, 3]
```

## `dropLast`

Drops a specified `number` of values from the end of `string` or `array`

```js
import { dropLast } from 'nanoutils'

dropLast(2)('1234')       // '12'
dropLast(2)([1, 2, 3, 4]) // [1, 2]
```

::: tip
Returns same `string` or `array` if a number is negative
:::

## `dropLastWhile`

Drops values from the end of `string` or `array` while a given predicate returns `true`

```js
import { dropLastWhile } from 'nanoutils'

const dropWhileGreater2 = dropLastWhile(value => value > 2)

dropWhileGreater2('1234')       // '12'
dropWhileGreater2([1, 2, 3, 4]) // [1, 2]
```

::: tip
Always returns a copy of `string` or `array`
:::

## `dropRepeats`

Returns `string` or `array` which drops next identical elements

```js
import { dropRepeats } from 'nanoutils'

dropRepeats([-1, 1, 1, 2, -2, 2])   // [-1, 1, 2, -2, 2]
dropRepeats('112334555')            // '12345'
```

::: tip
Identity is based on `equal`
:::

## `dropRepeatsWith`

Returns `string` or `array` which drops next elements based on a specified function

```js
import { dropRepeatsWith } from 'nanoutils'

const isAbsEqual = (a, b) => Math.abs(a) === Math.abs(b)

dropRepeatsWith(isAbsEqual, [-1, 1, 1, 2, -2, 2])   // [-1, 2]
dropRepeatsWith(isNextEqual, '112334555')           // '11355'
```

## `dropWhile`

Drops values from the beginning of `string` or `array` while a given predicate returns `true`

```js
import { dropWhile } from 'nanoutils'

const dropWhileLess3 = dropWhile(value => value < 3)

dropWhileLess3('1234')       // '34'
dropWhileLess3([1, 2, 3, 4]) // [3, 4]
```

::: tip
Always returns a copy of `string` or `array`
:::

## `dropWhileT`

Creates a `drop`-like transducer with a given predicate

```js
import { dropWhileT } from 'nanoutils'

const transducer = dropWhileT(value => value < 3)
const dropsBankAccountsLessThan3 = transducer((bank, value) => {
  array.push(value)
  return array
})

dropsBankAccountsLessThan3([], 1)       // []
dropsBankAccountsLessThan3([], 2)       // []
dropsBankAccountsLessThan3([], 3)       // [3]
dropsBankAccountsLessThan3([3], 2)      // [3, 2]
dropsBankAccountsLessThan3([3, 2], 1)   // [3, 2, 1]
```

::: warning
Once a given predicate returns `false` it accepts any other values

It you want a different behaviour, have a look at [`filterT`](#filtert) or [`takeWhileT`](#takewhilet)
:::

## `either`

Checks if at least one of predicates returns `true` for arguments

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
If a value to a function is not within `value.constructor.empty`, not `array`, `object` or `string`, it returns `Arguments`

```js
import { empty } from 'nanoutils'

empty(123)            // []
typeof empty(123)     // 'object'
empty(123).toString() // '[object Arguments]'
```
:::

## `endsWith`

Check if `array` or `string` has a specified suffix

```js
import { endsWith } from 'nanoutils'

endsWith('ring', 'spring')  // true
endsWith([1, 1])([1, 1, 2]) // false
```

::: warning
If both arguments are neither `string` nor `array`, a function returns `undefined`

```js
import { endsWith } from 'nanoutils'

endsWith(1, 'abc')                // undefined
endsWith(function() {}, 'abc')    // undefined
endsWith([1, 2], { 0: 1, 1: 2 })  // undefined
endsWith('34', 1234)              // undefined
```
:::

## `eqBy`

Compares `2` arguments which are passed to a function using `uquals`

```js
import { eqBy, prop } from 'nanoutils'

const danAbramov = { firstName: 'Dan', lastName: 'Abramov' }
const danIvanov = { firstName: 'Dan', lastName: 'Ivanov' }

eqBy(prop('firstName'), danAbramov, danIvanov)    // true
eqBy(prop('lastName'), danAbramov, danIvanov)     // false
```

## `eqLens`

Compares a value with an argument which is passed to `lens`-like function using `equals`

```js
import { eqLens, lens } from 'nanoutils'

const lastName = 'Abramov'
const danAbramov = { firstName: 'Dan', lastName: 'Abramov' }
const danIvanov = { firstName: 'Dan', lastName: 'Ivanov' }
const lastNameLens = lens(person => person.lastName)

eqLens(lastNameLens, lastName, danAbramov)    // true
eqLens(lastNameLens, lastName, danIvanov)     // false
```

## `eqProps`

Compares properties of two `object`s by a specified key using `equals`

```js
import { eqProps } from 'nanoutils'

const danAbramov = { firstName: 'Dan', lastName: 'Abramov' }
const danIvanov = { firstName: 'Dan', lastName: 'Ivanov' }

eqProps('firstName', danIvanov, danAbramov)    // true
eqProps('lastName', danIvanov, danAbramov)     // false
```

## `equals`

Compares two values deeply with possible circulars using `equals`

```js
import { equals } from 'nanoutils'

const danAbramov = { firstName: 'Dan', lastName: 'Abramov' }
const danIvanov = { firstName: 'Dan', lastName: 'Ivanov' }

equals(danAbramov, danAbramov)    // true
equals(danAbramov, danIvanov)     // false
equals(danIvanov, danIvanov)      // true
```

::: warning
A comparison of mirror `array`s and `object`s is not working yet
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

Transforms all properties of `object` with `object` whose properties are transformations

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

It won't be present in a resulting `object`
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

Returns `array` with specified values

```js
import { fill } from 'nanoutils'

let marks = [4, 5, 5, 3, 4]

fill()(marks)         // [4, 5, 5, 3, 4] 
fill(0)(marks)        // [0, 0, 0, 0, 0] 
fill(0, 2)(marks)     // [4, 5, 0, 0, 0] 
fill(0, 2, -1)(marks) // [4, 5, 0, 0, 4] 
```

::: tip
It returns a new (but shallow copy of) `array` even though a value is `undefined`
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

const isQueueSkipped = value => value % 2 === 0
const transducer = filterT(isQueueSkipped)
const lineUp = transducer((queue, value) => {
  queue.push(value)
  return queue
})

lineUp([], 1)      // []
lineUp([], 2)      // [2]
lineUp([2], 3)     // [2]
lineUp([2], 4)     // [2, 4]
lineUp([2, 4], 5)  // [2, 4]
```

## `find`

Finds a value in `array` based on a predicate and returns it (a search is made from a beginning). Otherwise, returns `undefined`

```js
import { find } from 'nanoutils'

const isLessThan10 = value => value >= 0 && value < 10

find(isLessThan10, [10, 20, 30])   // undefined
find(isLessThan10, [10, 2, 3])     // 2
```

## `findIndex`

Finds a value in `array` based on a predicate and returns an index of it (a search is made from a beginning). Otherwise, returns `-1`

```js
import { findIndex } from 'nanoutils'

const isLessThan10 = value => value >= 0 && value < 10

findIndex(isLessThan10, [10, 20, 30])    // -1
findIndex(isLessThan10, [10, 2, 3])      // 1
```

## `findLast`

Finds a value in `array` based on a predicate and returns it (a search is made from an end). Otherwise, returns `undefined`

```js
import { findLast } from 'nanoutils'

const isLessThan10 = value => value >= 0 && value < 10

findLast(isLessThan10, [10, 20, 30])   // undefined
findLast(isLessThan10, [10, 2, 3])     // 3
```

## `findLastIndex`

Finds a value in `array` based on a predicate and returns an index of it (a search is made from an end). Otherwise, returns `-1`

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
It reverses an order of arguments, not values

```js
import { flip } from 'nanoutils'

const f = flip((a, b, c) => [a, b, c])

f(1, 2, 3)    // [3, 2, 1]
```
:::

## `forEach`

Applies a function to elements of `array`

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

Collects `object` from pairs of keys and values

```js
import { fromPairs } from 'nanoutils'

const pairs = [['a', 1], ['b', 2]]

fromPairs(pairs)  // { a: 1, b: 2 }
```

::: tip
if pairs are not `array` it returns empty `object`
:::

## `groupBy`

Divides into groups whose key is a result of a function applied to a value from arguments

```js
import { groupBy } from 'nanoutils'

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

Checks if `object` has provided own property

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

Checks if `object` has provided property

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

Returns first element of `array` or `string`

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

## `identical`

Returns `true` if its arguments are identical by reference. Otherwise it returns `false`

```js
import { identical } from 'nanoutils'

identical('a', 'a')   // true
identical({}, {})     // false
```

::: warning
`-0` and `0` are different values
:::

::: tip
`NaN` equals to `NaN`
:::

## `identity`

Returns value which is passed to a function

```js
import { identity } from 'nanoutils'

identity(false)   // false
identity(null)    // null
```

::: tip
Values which are passed to a function and returned by a function equal by reference
:::

## `identityT`

Creates a transducer with an identity

```js
import { identityT } from 'nanoutils'

const transducer = identityT()
const lineUp = transducer((queue, name) => {
  queue.push(name)
  return queue
})

lineUp([], 'Alice')                 // ['Alice']
lineUp(['Alice'], 'John')           // ['Alice', 'John']
lineUp(['Alice', 'John'], 'Alex')   // ['Alice', 'John', 'Alex']
```

## `ifElse`

if-else analogue, returns value based on predicate, `onTrue` and `onFalse` functions which are applied to value

```js
import { ifElse, isInteger } from 'nanoutils'

const safeInc = ifElse(isInteger, inc, always(0))

safeInc(null)   // 0
safeInc(10)     // 11
```

## `inc`

Increments value

```js
import { inc } from 'nanoutils'

inc(1)        // 2
inc('1')      // 2
inc('1')      // 2
inc('a')      // NaN
inc(null)     // 1
inc(false)    // 1
inc(true)     // 2
inc([])       // 1
inc([2])      // 3
inc([1, 2])   // NaN
```

::: tip JS-friendly
If you pass non-`number` value, it tries to convert it to `number` and to increment then. Otherwise, it returns `NaN`
:::

## `includes`

Checks if value is found in `string` or `array`

```js
import { includes } from 'nanoutils'

includes(5, [1, 2, 3, 4, 5])  // true
includes(5, [1, 2, 3, 4])     // false
includes('5', '12345')        // true
includes('5', '1234')         // false
```

## `indexBy`

Indexes `array` of `object`s into `object` given a key generator function

```js
import { indexBy, prop } from 'nanoutils'

const changes = [
  { id: 123, currency: 'rur' },
  { id: 234, currency: 'usd' },
  { id: 123, currency: 'usd' }
]

const billChangeById = indexBy(prop('id'))

billChangeById(changes)     // { 123: { id: 123, currency: 'usd' }, 234: { id: 234, currency: 'usd' } }
*/
```

::: warning
If a key generator returns identical keys for two different `object`s, the last one appears in a result
:::

## `indexed`

Returns a function which associates every value with a respective index

```js
import { indexed } from 'nanoutils'

const getObject = indexed((value, index) => ({ index: value }))

getObject(0)        // { 0: 0 }
getObject(null)     // { 1: null }
getObject({ a: 1 }) // { 2: { a: 1 }}
```

## `indexOf`

Returns index of value in a collection or `-1` if value cannot be found

```js
import { indexOf } from 'nanoutils'

indexOf(1, [0, 1, 2, 3])    // 1
indexOf('ab', '012abc')     // 3
indexOf('abd', 'abcd')      // -1
```

::: tip
Collection can be `array` or `string`
:::

::: warning
If collection is `null`, `undefined` or hasn't implemented `indexOf` method, it returns `-1`
:::

## `init`

Returns a collection without last element

```js
import { init } from 'nanoutils'

init([1, 2, 3])   // [1, 2]
init([])          // []
init('123')       // '12'
init('')          // ''
```

::: tip
Works for both `array` and `string`
:::

## `innerJoin`

Returns elements of first collection by a predicate which compares values from two collections

```js
import { innerJoin } from 'nanoutils'

const books = [
  { id: 1, author: 'Ray Bredbury', name: 'Cat\'s pajamas' },
  { id: 2, author: 'Leo Tolstoi', name: 'War and Peace' }
]
const ids = [1, 3]

innerJoin(
  (book, id) => book.id === id,
  books,
  ids
) // [{ id: 1, author: 'Ray Bredbury', name: 'Cat\'s pajamas' }]
```

::: tip
It returns entries saving the order of original collection
:::

## `insert`

Inserts value into `array` at a specified index

```js
import { insert } from 'nanoutils'

insert(0, 'a', ['b', 'c'])  // ['a', 'b', 'c']
```

## `insertAll`

Inserts `array` of values into `array` from a specified index

```js
import { insertAll } from 'nanoutils'

insertAll(0, ['a', 'b'], ['c'])  // ['a', 'b', 'c']
```

## `intersection`

A result of applying `innerJoin` to 2 `array`s with predicate which is either `identical` or `equals`


```js
import { intersection } from 'nanoutils'

intersection([1, 2, 3], [4, 3, 2])    // [3, 2]
```

## `intersperse`

Returns `array` whose elements are joined with a specified separator

```js
import { intersperse } from 'nanoutils'

intersperse(', ', ['hello', 'world'])  // ['hello', ', ', 'world']
```

## `into`

Calls `transduce` method with a respective reducer

```js
import { composeT, into, mapT, subtract, takeT } from 'nanoutils'

const array = [1, 2, 3, 4, 5]
const transducer = composeT(mapT(subtract(1)), takeT(3))

into([], transducer, array)   // [0, 1, 2]
```

::: tip
Only `array` is supported now, `pushReducer` is used for it
:::

## `invert`

Swaps keys and values with the support of repetitive values

```js
import { invert } from 'nanoutils'

invert({ a: 1, b: 1, c: 2 })  // { 1: ['a', 'b'], 2: ['c'] }
```

## `invertObj`

Swaps keys and values with last-met value

```js
import { invertObj } from 'nanoutils'

invertObj({ a: 1, b: 1, c: 2 })  // { 1: 'b', 2: 'c' }
```

## `invoker`

Returns a function by specified arity and name

```js
import { invoker } from 'nanoutils'

const sliceFrom = invoker(1, 'slice')

sliceFrom(3, 'abcdef')    // 'def'
```

## `is`

Returns a predicate by a specified constructor name

```js
import { is } from 'nanoutils'

const isNumber = is(Number)
const isNull = is(null)
const isUndefined = is(undefined)

isNumber(NaN)     // true
isNull(null)      // true
isUndefined(null) // false
```

## `isEmpty`

Checks if `array` or `string` is empty

```js
import { isEmpty } from 'nanoutils'

isEmpty({ a: 1 })   // false
isEmpty({})         // true
isEmpty('123')      // false
isEmpty('')         // true
```

## `isInteger`

Checks if value is integer

```js
import { isInteger } from 'nanoutils'

isInteger(undefined)  // false
isInteger(NaN)        // false
isInteger(0.1)        // false
isInteger(0)          // true
```

## `isNil`

Checks if value is `null`able

```js
import { isNil } from 'nanoutils'

isNil(undefined)  // true
isNil(null)       // true
isNil(NaN)        // false
```

## `join`

Returns `string` by joining `array`

```js
import { join } from 'nanoutils'

join('-', [1, 2])   // '1-2'
```

## `juxt`

Applies `array` of functions to arguments

```js
import { juxt, mean, median } from 'nanoutils'

const acceptArguments = f => (...args) => f(args)
const statistics = [mean, median].map(acceptArguments)
const countStatistics = juxt(statistics)

countStatistics(1, 2, 2, 4)  // [2.25, 2]
```

## `kebabCase`

Returns `string` in a kebab case style

```js
import { kebabCase } from 'nanoutils'

kebabCase('-to kebab_case')  // to-kebab-case
```

::: tip
Also see [`camelCase`](#camelCase) and [`snakeCase`](#snakeCase)
:::

## `keys`

Returns `array` of keys with a specified `object`

```js
import { keys } from 'nanoutils'

const obj = {
  name: 'Adam Popov',
  __proto__: {
    dad: {
      name: 'David Popov'
    },
    mom: {
      name: 'Margaret Popova'
    }
  }
}

keys(obj)   // ['name']
```

::: tip
It doesn't iterate `prototype`s' keys
:::

## `keysIn`

Returns `array` of keys with a specified `object` including `prototype`s' keys

```js
import { keysIn } from 'nanoutils' 

const obj = {
  name: 'Adam Popov',
  __proto__: {
    dad: {
      name: 'David Popov'
    },
    mom: {
      name: 'Margaret Popova'
    }
  }
}

keysIn(obj)   // ['name', 'dad', 'mom']
```

::: tip
It iterates `prototype`s' keys
:::

## `last`

Returns last element of `array` or `string`

```js
import { last } from 'nanoutils'

const names = ['Adam', 'David', 'Margaret']

last(names)         // 'Margaret'
last(last(names))   // 't'
```

## `lastIndexOf`

Returns last index of value in `array` or `string`

```js
import { lastIndexOf } from 'nanoutils'

const queue = ['Adam', 'David', 'Margaret', 'Adam']

lastIndexOf('Adam', queue)    // 3
lastIndexOf('a', 'Margaret')  // 4
```

## `length`

Returns length of `array` or `string`

```js
import { length } from 'nanoutils'

length([1, 2, 3])   // 3
length('Cat')       // 3
```

## `lens`

Returns `lens`-like function with a specified getter and setter functions

```js
import { lens } from 'nanoutils'

const valueLens = lens(
  ({ value }) => value,
  (value, obj) => ({ ...obj, value })
)
const objectLens = valueLens({})

objectLens.get()   // undefined
objectLens.set(2)
objectLens.get()   // 2
```

## `lensIndex`

Returns `lens`-like function with predefined getter and setter functions for `array` only for specified `index`

```js
import { lensIndex } from 'nanoutils'

const secondLens = lensIndex(1)
const lens = secondLens([1, 2])

lens.get()    // 2
lens.set(3)
lens.get()    // 3
```

## `lensPath`

Returns `lens`-like function with a specified path for `object` or `array`

```js
import { lensPath } from 'nanoutils'

const object = {
  left: {
    left: null,
    value: 6,
    right: null
  },
  value: 10,
  right: null
}

const leftValuePath = lensPath(['left', 'value'])
const lens = leftValuePath(object)

lens.get()   // 6
lens.set(5)
lens.get()   // 5
```

::: tip
It also applies to `array`

```js
import { lensPath } from 'nanoutils'

const array = [
  [null, 6, null],
  10,
  null
]

const leftValuePath = lensPath([0, 1])
const lens = leftValuePath(array)

lens.get()   // 6
lens.set(5)
lens.get()   // 5
```
:::

## `lensProp`

Returns `lens`-like function with a specified path for `object` only with `deep = 1`

```js
import { lensProp } from 'nanoutils'

const valueLens = lensProp('value')
const lens = valueLens({ value: 2 })

lens.get()    // 2
lens.set(3)
lens.get()    // 3
```

## `lift`

Lifts values into subset of values

```js
import { lift } from 'nanoutils'

lift(a => [a], [1, 2])  // [[1], [2]]
lift((a, b) => [a, b], [1, 2])  // [[1, 1], [1, 2], [2, 1], [2, 2]]
```

## `liftN`

Lifts a specified number of values into subset of values

```js
import { liftN } from 'nanoutils'

const toArray = (...args) => args

liftN(1, toArray, [1, 2])  // [[1], [2]]
liftN(2, toArray, [1, 2])  // [[1, 1], [1, 2], [2, 1], [2, 2]]
```

::: tip
`lift` has a predefined specified number of values in contrast to `liftN` where you need to specify number yourself

This means that `lift(a => [a])` equals to `liftN(1, (...args) => args)` and so on.
:::

## `lt`

Checks if first value is less than second one

```js
import { lt } from 'nanoutils'

lt(1, 2)  // true
lt(2, 2)  // false
lt(3, 2)  // false
```

## `lte`

Checks if first value is less or equals to second one

```js
import { lte } from 'nanoutils'

lte(1, 2)  // true
lte(2, 2)  // true
lte(3, 2)  // false
```

## `map`

Iterates over `array` or `object` and replace value with a specified function

```js
import { map } from 'nanoutils'

map(value => value * 2, [1, 2])         // [2, 4]
map(value => value * 2, { Sasha: 1, Mike: 2 })  // { Sasha : 2, Mike: 4 }
```

## `mapAccum`

Iterates over `array` saving result and accumulated value with a specified function

```js
import { mapAccum } from 'nanoutils'

const reducer = (result, value) => [
  // result of summing values
  result + value,
  // to save history of changes
  result + value
]
const initial = 0

mapAccum(reducer, initial, [1, 2, 3])  // [6, [1, 3, 6]]
```

::: tip
Order of accumulation is left to right
:::

## `mapAccumRight`

Iterates over `array` saving result and accumulated value with a specified function

```js
import { mapAccumRight } from 'nanoutils'

const reducer = (result, value) => [
  // result of summing values
  result + value,
  // to save history of changes
  result + value
]
const initial = 0

mapAccumRight(reducer, initial, [1, 2, 3])  // [6, [6, 5, 3]]
```

::: tip
Order of accumulation is right to left
:::

## `mapObjIndexed`

Iterates over `object` saving result in `object` with a specified function

```js
import { mapObjIndexed } from 'nanoutils'

const bank = {
  Sasha: { value: 5000 },
  Mark: { value: 2500 }
}

const receiveCashback = (account) => ({ ...account, value: account.value * 1.1 })

mapObjIndexed(receiveCashback, bank)  // { Sasha: { value: 5500 }, Mark: { value: 2750 } }
```

## `mapT`

Creates a transducer with a map

```js
import { mapT } from 'nanoutils'

const receiveCashback = value => value * 1.1
const transducer = mapT(receiveCashback)
const updateBankAccount = transducer((bank, value) => {
  array.push(value)
  return array
})

updateBankAccount([], 1)          // [1.1]
updateBankAccount([1.1], 2)       // [1.1, 2.2]
updateBankAccount([1.1, 2.2], 3)  // [1.1, 2.2, 3.3]
```

## `match`

Returns all found matches from `string` by a specified regular expression

```js
import { match } from 'nanoutils'

match(/[\w]/g, 'man')   // ['m', 'a', 'n']
```

::: warning
It returns empty `array` if no matches are found

```js
import { match } from 'nanoutils'

match(/[\d]/g, 'man')   // []
```
:::

## `mathMod`

Returns mathematical modulo of integer `number`

```js
import { mathMod } from 'nanoutils'

mathMod(-17, 5)   // 3
mathMod(17, 5)    // 2
```

::: warning
if `number` is not integer or either of `number`s are negative, the result will be `NaN`
:::

## `max`

Returns maximum value with `>` comparator

```js
import { max } from 'nanoutils'

max(1, 2)       // 2
max('a', 'z')   // 'z'
```

::: tip JS-friendly
If you pass values of different types, it compares them with conversion

```js
import { max } from 'nanoutils'

max(1, 'z')     // 'z' as 1 > 'z' returns false
```
:::

## `maxBy`

Returns maximum value with `>` comparator and a specified function

```js
import { maxBy } from 'nanoutils'

maxBy(a => a * 2, -1, -2)                                         // -2
maxBy(ch => ch.charCodeAt(0)  - 'a'.charCodeAt(0) + 1, 'a', 'z')  // 'z'
```

## `mean`

Returns mean by a specified `array` of `number`s

```js
import { mean } from 'nanoutils'

mean([1, 2, 3])     // 2
```

::: tip
It returns `NaN` if `array` is empty
:::

## `median`

Returns median by a specified `array` of `number`s

```js
import { median } from 'nanoutils'

median([1, 2, 3])     // 2
```

::: tip
It returns `NaN` if `array` is empty
:::

::: tip
Median is a value which is greater than 50% of values and is less than 50% of values

If the number of elements is even, the median is mean of 2 values

```js
import { median } from 'nanoutils'

median([1, 2, 3, 4])     // 2.5 = (2 + 3) / 2
```
:::

## `memoize`

Runs function and memoizes its result

```js
import { memoize } from 'nanoutils'

const factorial = memoize(value => {
  let result = 1
  for (let index = 2; index <= value; index++) {
    result *= index
  }
  return result
})

factorial(5)    // 120
factorial(5)    // 120 (extracts from memoized function)
```

::: tip
It's strongly recommended for expensive function calls such as factorial
:::

## `memoizeWith`

Runs function and memoizes its result with a specified hash generator

```js
import { ascend, identity, mean as plainMean, memoizeWith } from 'nanoutils'

const getHash = args => [...args].sort(ascend(identity)).join('-')
const mean = memoizeWith(getHash, plainMean)

mean([1, 2, 3])   // 2
mean([1, 2, 3])   // 2 (extracts from memizedWith function with hash='1-2-3')
mean([3, 1, 2])   // 2 (extracts from memizedWith function with hash='1-2-3')
```

## `merge`

Shallowly merges 2 `object`s

```js
import { merge } from 'nanoutils'

merge({ value: 2 }, { value: 3 })   // { value: 3 }
```

## `mergeAll`

Shallowly merges `array` of `object`s

```js
import { mergeAll } from 'nanoutils'

const gitHistory = [
  { value: 1 },
  { value: 1, comment: 'todo: *' },
  { value: 2, comment: 'todo: *' }
]

mergeAll(gitHistory)    // { value: 2, comment: 'todo: *' }
```

## `mergeDeepLeft`

Deeply merges 2 `object`s with priority to the left

```js
import { mergeDeepLeft } from 'nanoutils'

const bankBeforeTransaction = {
  Mike: { card: 500 }
}
const bankAfterTransaction = {
  Mike: { debt: 1000, card: 1500 },
  Anna: { debt: 0, card: 100 }
}

mergeDeepLeft(
  bankAfterTransaction,
  bankBeforeTransaction
)    // { Mike: { debt: 1000, card: 1500 }, Anna: { debt: 0, card: 100 } }
```

::: tip
Deeply means with a recursive call if exact same keys are met
:::

## `mergeDeepRight`

Deeply merges 2 `object`s with priority to the right

```js
import { mergeDeepRight } from 'nanoutils'

const bankBeforeTransaction = {
  Mike: { card: 500 }
}
const bankAfterTransaction = {
  Mike: { debt: 1000, card: 1500 },
  Anna: { debt: 0, card: 100 }
}

mergeDeepRight(
  bankBeforeTransaction,
  bankAfterTransaction
)    // { Mike: { debt: 1000, card: 1500 }, Anna: { debt: 0, card: 100 } }
```

::: tip
Deeply means with a recursive call if exact same keys are met
:::

## `mergeDeepWith`

Deeply merges 2 `object`s with custom diff resolver

```js
import { add, mergeDeepWith } from 'nanoutils'

const productsSnapshot12102018 = {
  banana: 2,
  milk: 3
}
const productsSnapshot13102018 = {
  apple: 2,
  milk: 1
}

mergeDeepWith(add, productsSnapshot12102018, productsSnapshot13102018)    // { apple: 2, banana: 2, milk: 4 }  
```

::: tip
Deeply means with a recursive call if exact same keys are met

## `mergeDeepWithKey`

Deeply merges 2 `object`s with key function diff resolver

```js
import { mergeDeepWithKey } from 'nanoutils'

const strategy = (key, first, second) => {
  return {
    leftmost: first,
    rightmost: second,
    overlap: [ ...first, ...second ]
  }[key]
}
const left = {
  leftmost: [1, 2],
  rightmost: [3, 4],
  overlap: [5, 6]
}
const right = {
  leftmost: [7, 8],
  rightmost: [9, 10],
  overlap: [11, 12]
}

mergeDeepWithKey(strategy, left, right)   // { leftmost: [1, 2], rightmost: [9, 10], overlap: [5, 6, 11, 12] }
```

::: tip
Deeply means with a recursive call if exact same keys are met

::: tip
It can be convenient to skip a subset of keys or to specify a behaviour for different keys
:::

## `mergeWith`

Shallowly merges 2+ `object`s with a specified diff resolver

```js
import { add, mergeWith } from 'nanoutils'

const productsSnapshot12102018 = {
  banana: 2,
  milk: 3
}
const productsSnapshot13102018 = {
  apple: 2,
  milk: 1
}
const productsSnapshot14102018 = {
  juice: 3,
  milk: 1
}

mergeWith(add, productsSnapshot12102018, productsSnapshot13102018)    // { apple: 2, banana: 2, juice: 3 milk: 5 }  
```

## `mergeWithKey`

Shallowly merges 2 `object`s with key function diff resolver

```js
import { mergeWithKey } from 'nanoutils'

const strategy = (key, first, second) => {
  return {
    leftmost: first,
    rightmost: second,
    overlap: [ ...first, ...second ]
  }[key]
}
const left = {
  leftmost: [1, 2],
  rightmost: [3, 4],
  overlap: [5, 6]
}
const right = {
  leftmost: [7, 8],
  rightmost: [9, 10],
  overlap: [11, 12]
}

mergeWithKey(strategy, left, right)   // { leftmost: [1, 2], rightmost: [9, 10], overlap: [5, 6, 11, 12] }
```

## `min`

Returns minimum value with `<` comparator

```js
import { min } from 'nanoutils'

min(1, 2)       // 1
min('a', 'z')   // 'a'
```

::: tip JS-friendly
If you pass values of different types, it compares them with conversion

```js
import { min } from 'nanoutils'

min(1, 'z')     // 1 as 1 < 'z' returns true
```
:::

## `minBy`

Returns minimum value with `<` comparator and a specified function

```js
import { minBy } from 'nanoutils'

minBy(a => a * 2, -1, -2)                                         // -1
minBy(ch => ch.charCodeAt(0)  - 'a'.charCodeAt(0) + 1, 'a', 'z')  // 'a'
```

## `modulo`

Returns modulo of `number`

```js
import { modulo } from 'nanoutils'

modulo(-17, 5)    // -2
modulo(17, 5)     // 2
```

::: tip JS-friendly
If you pass non-`number` values, it tries to convert them to `number`s and to calculate modulo. Otherwise, it returns `NaN`
:::

## `multiply`

Multiplies two values

```js
import { multiply } from 'nanoutils'

multiply(1, 1)         // 1
multiply(1)(1)         // 1
multiply('1')(1)       // 1
multiply('1')('1')     // 1
multiply(1)('a')       // NaN
multiply(null)(null)   // 0
multiply(false)(false) // 0
multiply(true)(true)   // 1
multiply([])([])       // 0
multiply([2])([2])     // 4
```

::: tip JS-friendly
If you pass non-`number` values, it tries to convert them to `number`s and to multiply. Otherwise, it returns `NaN`
:::

## `none`

Returns `true` if a specified predicate returns `false` for all values of `array`

```js
import { none } from 'nanoutils'

const accounts = [
  { name: 'Mike', balance: 350 },
  { name: 'Alice', balance: 200 },
  { name: 'Ann', balance: 1000 }
]

none(({ balance }) => balance > 1000, accounts)   // true
none(({ balance }) => balance > 500, accounts)    // false as Ann balance is 1000, > 500
```

## `noop`

Always returns `undefined`

::: tip
It can be used as fake or dummy implementation of anything
:::

## `not`

Returns opposite `boolean` value

::: tip
It replaces `!`-operator
:::

## `nth`

Returns value at a specified index for `string` or `array`

```js
import { nth } from 'nanoutils'

nth(1, ['Mike', 'Ann'])   // 'Ann'
nth(2, ['Mike', 'Ann'])   // undefined
nth(-1, ['Mike', 'Ann'])  // 'Ann'
```

::: tip
If `string` is placed and index is out of bounds of the string, empty string is returned
:::

## `nthArg`

Returns value at a specified index for `arguments`

```js
import { nthArg } from 'nanoutils'

nthArg(1)('Mike', 'Ann')   // 'Ann'
nthArg(2)('Mike', 'Ann')   // undefined
nthArg(-1)('Mike', 'Ann')  // 'Ann'
```

::: tip
`nthArg(n)(...args)` is similar to `nth(n, args)`
:::

## `o`

A curried composition for 2 functions

```js
import { o } from 'nanoutils'

o(({ name }) => name, ({ person }) => person)({ person: { name: 'Alexey' }})    // 'Alexey'
```

::: tip See also

:::

## `objOf`

Returns `object` with a specified key and value

```js
import { objOf } from 'nanoutils'

objOf('name', 'Alexey')   // { name: 'Alexey' }
```

## `of`

Returns value which is passed to a function

::: tip
Synonym for [`identity`](#identity)
:::

## `omit`

Removes values by specified keys from `object`

::: tip
`omit(props, object)` is immutable but similar to

```js
for (let prop in props) {
  if (object.hasOwnProperty(prop)) {
    delete object[prop]
  }
}
```
:::

## `omitBy`

Removes values by a specified predicate from `object`

```js
import { omitBy } from 'nanoutils'

const bank = {
  Ann: { balance: 1200 },
  Mike: { balance: 500 }
}
const inabilityToPay = ({ balance }, _) => balance < 1000

omitBy(inabilityToPay, bank)    // { Ann: { balance: 1200 } }
```

## `once`

Saves a result of first call and always returns it

```js
import { once } from 'nanoutils'

const buy = once(product => {
  return `I told you to buy ${product}`
})

buy('apple')    // 'I told you to buy apple'
buy('orange')   // 'I told you to buy apple'
```

## `or`

Curried analogue of `||`-operator

| a | b | a \|\| b |
|:---:|:---:|:---:|
| `false` | `false` | `false` |
| `false` | `true` | `true` |
| `true` | `false` | `true` |
| `true` | `true` | `true` |

## `over`

Changes value for `object` or `array` by a specified path

```js
import { lensPath, over } from 'nanoutils'

const shop = {
  tv: {
    brand: 'Samsung',
    serialNumber: 'AKZ43CPQ',
    modelCode: 'LN32A3'
  }
}
const tv = lensPath(['tv'])
const fakify = real => ({
  ...real,
  serialNumber: `Я${real.serialNumber.slice(2)}П`,
  modelCode: `Й${real.modelCode.slice(2)}Ж`
})

over(tv, fakify, shop)    // { tv: { brand: 'Samsung', serialNumber: 'ЯZ43CPQП',  modelCode: 'Й32A3Ж' } }
```

## `pair`

Returns 2-element `array` with specified values

```js
import { pair } from 'nanoutils'

pair('firstName', 'secondName')   // ['firstName', 'secondName']
```

## `partial`

Applies function to a part of arguments delaying a call of function

```js
import { add as euroChange, partial } from 'nanoutils'

const EXCHANGE_RATE_EURO = 78.66
const calculateTomorrowEuro = partial(euroChange, [EXCHANGE_RATE_EURO])
const probabilities = [{ p: 50, change: 0.5 }, { p: 0.5, change: -0.5 }]

probabilities.reduce((euro, { p, change }) => euro + p * calculateTomorrowEuro(change) / 100, 0)  // 78.66
```

::: tip
In case you need to find information among a set of values, specify part of parameters and then iterate over others
:::

::: tip
It can be achieved with arrow functions meaning that `partial(fn, initialArgs)` equals to `args => fn(...initialArgs, ...args)`
:::

::: warning
If a function accepts `3` parameters and you specify `2` of them in `partial`, it doesn't matter how many parameters you pass then as only first is passed to a given function

This is the only different from arrow functions
:::

## `partialRight`

Applies function to a part of arguments delaying a call of function

```js
import { add as euroChange, partialRight } from 'nanoutils'

const EXCHANGE_RATE_EURO = 78.66
const calculateTomorrowEuro = partialRight(euroChange, [EXCHANGE_RATE_EURO])
const probabilities = [{ p: 50, change: 0.5 }, { p: 0.5, change: -0.5 }]

probabilities.reduce((euro, { p, change }) => euro + p * calculateTomorrowEuro(change) / 100, 0)  // 78.66
```

::: tip
[`partial`](#partial) applies arguments from left to right, `partialRight` - from right to left
:::

## `partition`

Splits `array` or `object` into 2 parts using a specified predicate

```js
import { partition } from 'nanoutils'

const drivers = [
  { name: 'Mike', car: 'Mercedes' },
  { name: 'Jake', car: 'Toyota' },
  { name: 'Ann', car: 'Mercedes' },
  { name: 'Alex', car: 'BMW' }
]
const isMercedes = ({ car }) => car === 'Mercedes'

partition(isMercedes, drivers)    // [[{ name: 'Mike', car: 'Mercedes' }, { name: 'Ann', car: 'Mercedes' }], [{ name: 'Jake', car: 'Toyota' }, { name: 'Alex', car: 'BMW' }]
```

## `path`

Retrieves value from `object` by a given path

```js
import { path } from 'nanoutils'

const person = {
  childhood: {
    school: {
      number: 76
    }
  }
}

path(['childhood', 'school', 'number'], person)   // 76
```

## `pathEq`

A predicate, returns `true` if value for a given path equals to a specified value

```js
import { pathEq } from 'nanoutils'

const person = {
  childhood: {
    school: {
      number: 76
    }
  }
}

pathEq(['childhood', 'school', 'number'], 76, person)   // true
pathEq(['childhood', 'school', 'number'], 64, person)   // false
```

## `pathOr`

Returns value by a given path or a default specified value

```js
import { pathOr } from 'nanoutils'

const person = {
  childhood: {
    school: {
      number: 76
    }
  }
}

pathOr({ status: 'not studied' }, ['childhood', 'school'], person)   // { number: 76 }
pathOr({ status: 'not studied' }, ['adulthood', 'uni'], person)     // { status: 'not studied' }
```

## `pathSatisfies`

Returns `true` if a given predicate returns `true` for value by a specified path

```js
import { pathSatisfies } from 'nanoutils'

const isMike = ({ name }) => name === 'Mike'

const work = {
  driver: {
    name: 'Kim'
  },
  consultant: {
    name: 'Mike'
  }
}

pathSatisfies(isMike, ['driver'], work)       // false
pathSatisfies(isMike, ['consultant'], work)   // true
```

## `pick`

Picks all but missed keys and returns `object` with them

```js
import { pick } from 'nanoutils'

pick(['name', 'age'], { name: 'Alex', school: 'SPSU' })   // { name: 'Alex' }
```

## `pickAll`

Picks all including missed keys and returns `object` with them

```js
import { pickAll } from 'nanoutils'

pickAll(['name', 'age'], { name: 'Alex', school: 'SPSU' })   // { name: 'Alex', age: undefined }
```

## `pickBy`

Picks keys and values by a specified predicate and returns `object` with them

```js
import { pickBy } from 'nanoutils'

const keyFromN = (_, key) => key[0].toLowerCase() === 'n'

pickBy(keyFromN, { name: 'Mike', school: 'SPSU' })       // { name: 'Mike' }
```

## `pipe`

Combines functions from left to right

```js
import { not, pipe } from 'nanoutils'

const isNotArray = pipe(Array.isArray, not)

isNotArray(1)     // true
isNotArray([1])   // false
```

## `pipeP`

Combines actions (functions which return `Promise`) from left to right

```js
import { pipeP } from 'nanoutils'

const promiseTimeout = time => new Promise(resolve => {
  setTimeout(resolve, time)
})
const fetchProfiles = ...

pipeP(promiseTimeout(1000), fetchProfiles)    // fetch profiles in 1sec
```

## `pipeT`

Combines transducers into a transducer from left to right

```js
import { concat, pipeT, mapT, takeT } from 'nanoutils'

const transducer = pipeT(takeT(2), mapT(concat('Cooper ')))
const lineUp = transducer((queue, name) => {
  queue.push(name)
  return queue
})

lineUp([], 'Alice')                               // ['Cooper Alice']
lineUp(['Cooper Alice'], 'John')                  // ['Cooper Alice', 'Cooper John']
lineUp(['Cooper Alice', 'Cooper John'], 'Alex')   // ['Cooper Alice', 'Cooper John']
```

::: tip
It's basically used with [`transduce`](#transduce)

```js
import { append, concat, pipeT, flip, mapT, takeT, transduce } from 'nanoutils'

const transducer = pipeT(takeT(2), mapT(concat('Cooper ')))

transduce(transducer, flip(append), [], ['Alice', 'John', 'Alex'])  // ['Cooper Alice', 'Cooper John']
```
:::

## `pluck`

Iterates over `array` and replaces `object` with value by a specified key

```js
import { pluck } from 'nanoutils'

const bank = [
  { name: 'Alice', balance: 300 },
  { name: 'Kate', balance: 500 },
  { name: 'Mike', balance: 200 },
]

pluck('name', bank)     // ['Alice', 'Kate', 'Mike']
```

## `prepend`

Appends value to the beginning of `array`

```js
import { prepend } from 'nanoutils'

const array = ['Alice', 'Kate', 'Mike']

prepend('John')(array)  // ['John', 'Alice', 'Kate', 'Mike']
```

## `product`

Multiplies values of `array`

```js
import { product } from 'nanoutils'

product([])             // 1
product([1, 2, 3, 4])   // 24
```

## `project`

Gets values from `array` by specified keys and returns `array` of `object`s

```js
import { project } from 'nanoutils'

const drivers = [
  { name: 'Mike', car: 'Mercedes' },
  { name: 'Jake', car: 'Toyota' },
  { name: 'Ann', car: 'Mercedes' },
  { name: 'Alex', car: 'BMW' }
]

const [ ,,, last ] = project(['name'], drivers)

last      // { name: 'Alex' }
```

::: tip
It's similar to SQL `select`
:::

::: tip
It can also be applied to `string` or `array` in place of `object`

```js
import { project } from 'nanoutils'

const names = ['Mike', 'Jake', 'Ann', 'Alex']

const [ ,,, last ] = project([0, 1], names)

last      // { 0: 'A', 1: 'l }
```
:::

## `prop`

Returns value by a specified key from `array` or `object`

```js
import { prop } from 'nanoutils'

const driver = {
  name: 'Andrew',
  license: 'LKS235MDA'
}

prop('name', driver)    // 'Andrew'
```

## `propEq`

A predicate, returns `true` if value for a given key equals to a specified value

```js
import { propEq } from 'nanoutils'

const driver = {
  name: 'Andrew',
  license: 'LKS235MDA'
}

propEq('name', 'Andrew', driver)    // true
propEq('name', 'Anna', driver)      // false
```

## `propIs`

A predicate, returns `true` if a given value is of a specified type

```js
import { propIs } from 'nanoutils'

const driver = {
  name: 'Andrew',
  license: 'LKS235MDA'
}

propIs(String, 'name', driver)      // true
propIs(Number, 'license', driver)   // false
```

## `propOr`

Returns value by a given key or a default specified value

```js
import { propOr } from 'nanoutils'

const person = {
  school: 76
}

propOr('not studied', 'school', person)   // 76
propOr('not studied', 'uni', person)      // 'not studied'
```

## `props`

Returns `array` of values by specified keys

```js
import { props } from 'nanoutils'

const book = {
  id: 2,
  author: 'Leo Tolstoi',
  title: 'War and Peace'
}

props(['author', 'title'], book)    // ['Leo Tolstoi', 'War and Peace']
```

::: warning
`props` doesn't extract valid values if a first parameter is not `array` of keys
:::

## `propSatisfies`

Returns `true` if a given predicate returns `true` for value by a specified key

```js
import { propSatisfies } from 'nanoutils'

const isMike = name => name === 'Mike'

const names = {
  driver: 'Kim',
  consultant: 'Mike'
}

propSatisfies(isMike, 'driver', names)       // false
propSatisfies(isMike, 'consultant', names)   // true
```

## `range`

Returns range within specified boundaries

```js
import { range } from 'nanoutils'

range(1, 3)     // [1, 2]
```

::: warning
Right boundary is excluded from a range
:::

::: tip
Any `number` can be used as boundaries

```js
import { range } from 'nanoutils'

range(1, 3.1)   // [1, 2, 3]
range(1.1, 3)   // [1.1, 2.1]
```
:::

## `reduce`

Iterates over a collection from left to right and returns value based on it

```js
import { add, concat, reduce } from 'nanoutils'

const probabilities = [0.2, 0.3, 0.5]
const children = ['Alex ', 'Max ', 'Phil']

reduce(add, 0, probabilities)   // 1
reduce(concat, '', children)    // 'Alex Max Phil'
```

::: tip
If collection is empty, it returns a specified initial value

```js
import { add, reduce } from 'nanoutils'

reduce(add, 0, [])   // 0
```
:::

::: tip
It can iterates over:
* `Array`s
* Reduceable `Object`s (i.e. with `reduce`-method)
* Generators (i.e. `Object`s with `next`-method)
* Iterators (i.e. `Object`s with implemented `Symbol.iterator`)
:::

## `reduceBy`

Groups values of `array` by a specified key function

```js
import { always, cond, gt, reduceBy, T } from 'nanoutils'

const students = [
  { name: 'Lucy', score: 92 },
  { name: 'Drew', score: 85 },
  { name: 'Bart', score: 62 }
]

const namesByGrade = reduceBy(
  (names, { name }) => names.concat(name),
  [],
  ({ score }) => cond([
    [lt_(65), always('E')],
    [lt_(70), always('D')],
    [lt_(80), always('C')],
    [lt_(90), always('B')],
    [T, always('A')]
  ])(score)
)

namesByGrade(students)      // { A: ['Lucy'], B: ['Drew'], E: ['Bart'] }
```

::: tip
You can also use mutated methods as initial value is shallowly cloned for every group

It means you can use either `push` or `concat` with `array`s

```js
import { always, cond, gt, reduceBy, T } from 'nanoutils'

const students = [
  { name: 'Lucy', score: 92 },
  { name: 'Drew', score: 85 },
  { name: 'Bart', score: 62 }
]

const reduceToNamesBy = reduceBy((names, { name }) => {
  names.push(name)
  return names 
}, [])
const namesByGrade = reduceToNamesBy(({ score }) => cond([
  [lt_(65), always('E')],
  [lt_(70), always('D')],
  [lt_(80), always('C')],
  [lt_(90), always('B')],
  [T, always('A')]
])(score))

namesByGrade(students)      // { A: ['Lucy'], B: ['Drew'], E: ['Bart'] }
```
:::

## `reduceRight`

Iterates over a collection from right to left and returns value based on it

```js
import { add, concat, reduceRight } from 'nanoutils'

const probabilities = [0.2, 0.3, 0.5]
const children = ['Alex', 'Max ', 'Phil ']

reduceRight(add, 0, probabilities)   // 1
reduceRight(concat, '', children)    // 'Phil Max Alex'
```

## `reduceWhile`

Iterates a collection from left to right while a given predicate returns `true`

```js
import { add, gt, reduceWhile } from 'nanoutils'

const sortedAges = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
const isLessThan30 = gt(30)

reduceWhile(isLessThan30, add, 0, sortedAges)     // 75
```

::: tip
If a specified predicate always returns `true`, all `array` is iterated
:::

## `reduceWhileRight`

Iterates a collection from right to left while a given predicate returns `true`

```js
import { add, lt, reduceWhileRight } from 'nanoutils'

const sortedAges = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
const isGreaterThan30 = lt(30)

reduceWhileRight(isGreaterThan30, add, 0, sortedAges)     // 170
```

::: tip
If a specified predicate always returns `true`, all `array` is iterated
:::

## `reject`

Iterates `array` or `object` and returns `array` or `object` respectively with values except for those which are `true` for a specified predicate

```js
import { isInteger, reject } from 'nanoutils'

const person = {
  name: 'Iwan',
  age: 15,
  school: 76,
  uni: 'OmSU'
}

reject(isInteger, person)   // { name: 'Iwan', uni: 'OmSU' }
```

## `remove`

Removes a given number of values from a specified index

```js
import { remove } from 'nanoutils'

const queue = ['Alex', 'Anton', 'Mikel', 'Ksenia']

remove(0, 3, queue)   // ['Ksenia']
```

## `repeat`

Repeats value a specified number of times

```js
import { repeat } from 'nanoutils'

repeat(0, 2)    // [0, 0]
```

::: tip
It returns empty `array` if a specified number of times is non-positive
:::

## `replace`

Replaces a sub`string` inside `string`

```js
import { replace } from 'nanoutils'

const sentence = 'Max is currently our team leader'
const newTeamLeadName = 'Alex'

replace(/Max/g, newTeamLeadName, sentence)    // 'Alex is currently our team leader'
```

## `reverse`

Reverses `string` or `array`

```js
import { reverse } from 'nanoutils'

const queue = ['Alex', 'Anton', 'Mikel', 'Ksenia']

reverse(queue)    // ['Ksenia', 'Mikel', 'Anton', 'Alex']
```

## `scan`

Adds initial value to the beginning, iterates `array` and puts value with a specified function

```js
import { multiply, scan } from 'nanoutils'

const factorials = n => scan(
  multiply,
  1,
  Array(Math.max(0, n - 1)).fill(0).map((_, i) => i + 1)
)

factorials(5)   // [1, 1, 2, 6, 24]
```

## `set`

Sets value with a specified `lens`-like function

```js
import { lens, set } from 'nanoutils'

const person = {
  name: 'Alexey',
  age: 25
}
const nameLens = lens(({ name }) => name, (name, person) => ({ ...person, name }))

set(nameLens, 'Alexus', person)   // { name: 'Alexus', age: 25 }
```

::: tip
It always returns new `object`
:::

## `slice`

Returns sliced sub`array` of a specified `array`

```js
import { slice } from 'nanoutils'

const queue = ['Alex', 'Anton', 'Mikel', 'Ksenia']

slice(1, Infinity, queue)   // ['Anton', 'Mikel', 'Ksenia']
```

::: tip
It returns empty `array` if specified indices are not integer `number`s
:::

::: warning
Out-of-bounds indices are transformed into `0` and length of `array` respectively
:::

## `snakeCase`

Returns `string` in a snake case style

```js
import { snakeCase } from 'nanoutils'

snakeCase('-to snakeCase')  // to_snake_case
```

::: tip
Also see [`camelCase`](#camelCase) and [`kebabCase`](#kebabCase)
:::

## `sort`

Returns sorted `array`

```js
import { az, identity, sort } from 'nanoutils'

const names = ['Mike', 'David', 'Alex']

sort(az(identity), names)     // ['Alex', 'David', 'Mike']
```

## `sortBy`

Returns sorted `array` by a specified comparator

```js
import { ascend, az, prop, sortBy } from 'nanoutils'

const consultants = [
  { name: 'Mike', age: 30 },
  { name: 'David', age: 35 },
  { name: 'Alex', age: 25 }
]

sortBy(az(prop('name')), consultants)     // [{ name: 'Alex', age: 25 }, { name: 'David', age: 35 }, { name: 'Mike', age: 30 }]
sortBy(ascend(prop('age')), consultants)     // [{ name: 'Alex', age: 25 }, { name: 'Mike', age: 30 }, { name: 'David', age: 35 }]
```

## `sortWith`

Returns sorted `array` by a specified `array` of comparators

```js
import { ascend, az, prop, sortWith } from 'nanoutils'

const consultants = [
  { name: 'Mike', age: 30 },
  { name: 'David', age: 35 },
  { name: 'Alex', age: 25 },
  { name: 'Louis', age: 35 }
]

const sortByNameAndAge = sortWith([
  ascend(prop('age')),
  az(prop('name'))
])

sortByNameAndAge(consultants)     // [{ name: 'Alex', age: 25 }, { name: 'Mike', age: 30 }, { name: 'David', age: 35 }, { name: 'Louis', age: 35 }]
```

::: tip
Comparison is taken by the first comparator. If values equal, next comparator is taken and so on.
:::

::: tip
`sortWith([comparator], array)` equals to `sortBy(comparator, array)`
:::

## `split`

Splits `string` by a specified separator

```js
import { split } from 'nanoutils'

const path = '/usr/local/bin/node'

split('/', path)    // ['', 'usr', 'local', 'bin', 'node']
```

::: tip
If a given separator is not found in a string, `split` returns `array` with whole `string` as unique element
:::

## `splitAt`

Splits `string` or `array` at a specified index

```js
import { splitAt } from 'nanoutils'

const people = ['Alex', 'Anton', 'Mikel', 'Ksenia']

splitAt(people.length / 2, people)    // [['Alex', 'Anton'], ['Mikel', 'Ksenia']]
```

::: tip
For `string`s it returns `array` of 2 `string`s

```js
import { spiltAt } from 'nanoutils'

const line = 'This is first line'

splitAt(line.length / 2, line)    // ['This is f', 'irst line']
```
:::

## `splitEvery`

Splits `string` or `array` into sub`string`s or sub`array`s of a specified length

```js
import { splitEvery } from 'nanoutils'

const people = ['Alex', 'Anton', 'Mikel', 'Ksenia', 'John']

splitEvery(3, people)   // [['Alex', 'Anton', 'Mikel'], ['Ksenia', 'John']]
```

## `splitWhen`

Splits `string` or `array` when a specified predicate returns `true`

```js
import { splitWhen } from 'nanoutils'

const euroExchangeRateHistory = [78.1, 78.3, 79.0, 78.7, 78.9]

let previous = null
const isGoingDown = value => {
  if (!previous || (previous <= value)) {
    previous = value
    return false
  }
  return true
}

splitWhen(isGoingDown, euroExchangeRateHistory)   // [[78.1, 78.3, 79.0], [78.7, 78.9]]
```

## `startsWith`

A predicate, returns `true` if `string` or `array` has a specified prefix

```js
import { startsWith } from 'nanoutils'

const names = ['Alex Ivanov', 'Max Borisov']
const isMax = startsWith('Max')

isMax(names[0])   // false
isMax(names[1])   // true
```

## `subtract`

Returns a subtraction of two values

```js
import { subtract } from 'nanoutils'

subtract(1, 1)          // 0
subtract(1)(1)          // 0
subtract('1')(1)        // 0
subtract('1')('1')      // 0
subtract(-1)(0)         // -1
subtract(1)('a')        // NaN
subtract(null)(null)    // 0
subtract(false)(false)  // 0
subtract(true)(true)    // 0
subtract([])([])        // 0
subtract([2])([1])      // 1
```

::: tip JS-friendly
If you pass non-`number` values, it tries to convert them to `number`s and to return a subtraction. Otherwise, it returns `NaN`
:::

## `sum`

Adds values of `array`

```js
import { sum } from 'nanoutils'

sum([])             // 0
sum([1, 2, 3, 4])   // 10
```

## `symmetricDifference`

Returns values which are not included in both `array`s

```js
import { symmetricDifference } from 'nanoutils'

symmetricDifference([1, 2, 3], [1, 2, 3, 4])            // [4]
symmetricDifference([1, 2, 3], [1, 2])                  // [3]
difference([{ a: 1 }, { b: 2 }], [{ b: 2 }, { c: 3 }])  // [{ a: 1 }, { c: 3 }]
```

::: tip
`symmetricDifference` includes values from first `array` which are not included in second `array` and vice versa. While `difference` takes only those values which are present on first `array` but not second one
:::

## `symmetricDifferenceWith`

Given a comparator returns a symmetric difference between `array`s

```js
import { symmetricDifferenceWith } from 'nanoutils'

const withPropA = symmetricDifferenceWith((obj1, obj2) => obj1.a === obj2.a)

withPropA([{ a: 1, b: 2 }], [{ a: 1 }])   // []
withPropA([{ a: 1, b: 2 }], [{ a: 2 }])   // [{ a: 1, b: 2 }, { a: 2 }]
```

## `T`

Always returns `true`

```js
import { T } from 'nanoutils'

T()       // true
T(1)      // true
T(false)  // true
```

## `tail`

Returns `string` or `array` but first letter or value of it respectively

```js
import { tail } from 'nanoutils'

const queue = ['Adam', 'David', 'Margaret', 'Adam']
const name = 'Adam'

tail(queue)   // ['David', 'Margaret', 'Adam']
tail(name)    // 'dam'
```

## `take`

Takes a specified `number` of values from the beginning of `string` or `array`

```js
import { take } from 'nanoutils'

const queue = ['Adam', 'David', 'Margaret', 'Adam']
const name = 'Adam'

take(2, queue)  // ['Adam', 'David']
take(1, name)   // 'A'
```

::: tip
Returns same `string` or `array` if a number is negative
:::

## `takeLast`

Takes a specified `number` of values from the end of `string` or `array`

```js
import { takeLast } from 'nanoutils'

const queue = ['Adam', 'David', 'Margaret', 'Adam']
const name = 'Adam'

takeLast(2, queue)  // ['Margaret', 'Adam']
takeLast(1, name)   // 'm'
```

::: tip
Returns same `string` or `array` if a number is negative
:::

## `takeLastWhile`

Takes values from the end of `string` or `array` while a given predicate returns `true`

```js
import { takeLastWhile } from 'nanoutils'

const takeWhileLess3 = takeLastWhile(value => value < 3)

takeWhileLess3('1234')       // '12'
takeWhileLess3([1, 2, 3, 4]) // [1, 2]
```

::: tip
Always returns a copy of `string` or `array`
:::

## `takeT`

Creates a `take`-like transducer with a specified number of accepting values

```js
import { takeT } from 'nanoutils'

const transducer = takeT(2)
const updateBankAccount = transducer((bank, value) => {
  array.push(value)
  return array
})

updateBankAccount([], 1)      // [1]
updateBankAccount([1], 2)     // [1, 2]
updateBankAccount([1, 2], 3)  // [1, 2]
```

## `takeWhile`

Takes values from the beginning of `string` or `array` while a given predicate returns `true`

```js
import { takeWhile } from 'nanoutils'

const takeWhileLess3 = takeWhile(value => value < 3)

takeWhileLess3('1234')       // '12'
takeWhileLess3([1, 2, 3, 4]) // [1, 2]
```

::: tip
Always returns a copy of `string` or `array`
:::

## `takeWhileT`

Creates a `take`-like transducer with a given predicate

```js
import { takeWhileT } from 'nanoutils'

const transducer = takeWhileT(value => value < 3)
const updateBankAccount = transducer((bank, value) => {
  array.push(value)
  return array
})

updateBankAccount([], 1)      // [1]
updateBankAccount([1], 2)     // [1, 2]
updateBankAccount([1, 2], 3)  // [1, 2]
updateBankAccount([1, 2], 2)  // [1, 2]
updateBankAccount([1, 2], 1)  // [1, 2]
```

::: warning
Once a given predicate returns `false` it doesn't accept any other values

It you want a different behaviour, have a look at [`dropWhileT`](#dropwhilet) [`filterT`](#filtert)
:::

## `tap`

Applies specified value to a specified function and then returns value

```js
import { map, tap } from 'nanoutils'

const log = value => console.log(value)
const accounts = [
  { name: 'Mike', balance: 350 },
  { name: 'Alice', balance: 200 }
]

map(log, accounts)  // [{ name: 'Mike', balance: 350 }, { name: 'Alice', balance: 200 }] to log and to return
```

## `tapT`

Creates a transducer with a specified side-effect function

```js
import { tapT } from 'nanoutils'

const transducer = tapT(console.log)
const logEverything = transducer((bank, value) => {
  array.push(value)
  return array
})

logEverything([], 1)      // returns [1] and logs 1, []
logEverything([1], 2)     // returns [1, 2] and logs 2, [1]
logEverything([1, 2], 3)  // returns [1, 2, 3] and logs 3, [1, 2]
```

## `test`

Predicate, returns `true` if `string` corresponds to a specified regular expression

```js
import { test } from 'nanoutils'

test(/[\w]/g, 'man')   // true
test(/[\d]/g, 'man')   // false
```

## `throttle`

Calls a specified function and prohibits calling it within a specified `number` of milliseconds

```js
import { throttle } from 'nanoutils'

let calls = 0
const SEC = 1000
const callInSecond = throttle(SEC, () => {
  calls++
})

calls               // 0
callInSecond()      // callback is waiting a sec...
calls               // 1
callInSecond()      // callback is not called
setTimeout(() => {
  callInSecond()    // callback is waiting a sec...
  calls             // 2
  callInSecond()    // callback is not called
}, 1000)
```

::: tip
If a throttled function is called more than 1 times within a specified number of milliseconds, the first call will only be run
:::

## `times`

Returns `array` of a specified length with values which are formed by a specified function

```js
import { times } from 'nanoutils'

const generateAge = age => ({ age })

times(generateAge, 5)   // [{ age: 0 }, { age: 1 }, { age: 2 }, { age: 3 }, { age: 4 }]
```

## `toLower`

Returns `string` in a lower-case version

```js
import { toLower } from 'nanoutils'

toLower('David')    // 'david'
```

## `toPairs`

Returns `array` of pairs from `object`

```js
import { toPairs } from 'nanoutils'

const john = {
  name: 'John Parker',
  age: 18
}

toPairs(john)   // [['name', 'John Parker'], ['age', 18]]
```

## `toPairsIn`

Returns `array` of pairs from `object` including `prototype`

```js
import { toPairsIn } from 'nanoutils'

const dna = {
  father: {
    name: 'Nick Parker',
    age: 36
  }
}
const john = {
  name: 'John Parker',
  age: 18,
  __proto__: dna
}

toPairsIn(john)   // [['name', 'John Parker'], ['age', 18], ['father', { name: 'Nick Parker', age: 36 }]]
```

## `toString`

Returns `string` for any value

```js
import { toString } from 'nanoutils'

const toStringArgs = function() {
  return toString(arguments)
}

toString('Mark')                        // 'Mark'
toString(18)                            // '18'
toString(true)                          // 'true'
toString(null)                          // 'null'
toString(undefined)                     // 'undefined'
toString(NaN)                           // 'NaN'
toString({ name: 'Nick' })              // '{"name": "Nick"}'
toString(['Nick', 'Mark'])              // '["Nick", "Mark"]'
toString(function(){ return 'Mark'})    // 'function() { return 'Mark'}'
toString(toStringArgs('Nick', 'Mark'))  // '(function() { return arguments; }('Nick', 'Mark'))'
toString(new Date('11-12-13'))          // 'new Date("2013-11-11T21:00:00.000Z")'
```

## `toUpper`

Returns `string` in a upper-case version

```js
import { toUpper } from 'nanoutils'

toLower('David')    // 'DAVID'
```

## `transduce`

Applies a given reducer function to a specified transducer function having initial value and a collection (see [`reduce`](#reduce))

```js
import { append, flip, takeT, transduce } from 'nanoutils'

const queue = ['Adam', 'David', 'Margaret']

transduce(takeT(2), flip(append), [], queue)    // ['Adam', 'David']
```

::: tip See also
* [`composeT`](#composet)
* [`dropT`](#dropt)
* [`dropWhileT`](#dropwhilet)
* [`filterT`](#filtert)
* [`mapT`](#mapt)
* [`pipeT`](#pipet)
* [`takeT`](#taket)
* [`takeWhileT`](#takewhilet)
* [`tapT`](#tapt)
:::

## `transduceRight`

Applies a given reducer function to a specified transducer function having initial value and a collection (see [`reduceRight`](#reduceright))

```js
import { append, flip, takeT, transduceRight } from 'nanoutils'

const queue = ['Adam', 'David', 'Margaret']

transduceRight(takeT(2), flip(append), [], queue)    // ['Margaret', 'David']
```

::: tip See also
* [`composeT`](#composet)
* [`dropT`](#dropt)
* [`dropWhileT`](#dropwhilet)
* [`filterT`](#filtert)
* [`mapT`](#mapt)
* [`pipeT`](#pipet)
* [`takeT`](#taket)
* [`takeWhileT`](#takewhilet)
* [`tapT`](#tapt)
:::

::: tip
With `transduceRight` it's possible to immitate several methods

For instance
* `transduce(dropLastT(2), flip(append), [], queue)` equals `transduceRight(dropT(2), flip(prepend), [], queue)`
* `transduce(dropLastWhileT(2), flip(append), [], queue)` equals `transduceRight(dropWhileT(2), flip(prepend), [], queue)`
* `transduce(takeLastT(2), flip(append), [], queue)` equals `transduceRight(takeT(2), flip(prepend), [], queue)`
* `transduce(takeLastWhileT(2), flip(append), [], queue)` equals `transduceRight(takeWhileT(2), flip(prepend), [], queue)`
:::

## `transpose`

Makes `i`th-index values of sub`array`s values of `i`th-index sub`array`s

```js
import { transpose } from 'nanoutils'

const year5 = ['John', 'Mary']
const year7 = ['Emmy', 'Ann']
const year10 = ['Alex', 'Kate']

transpose([year5, year7, year10])   // [['John', 'Emmy', 'Alex'], ['Mary', 'Ann', 'Kate']]
```

::: warning
If one of sub`array`s has less values than next others, the result sub`array` may have less values than previous ones

```js
import { transpose } from 'nanoutils'

const year5 = ['John', 'Mary', 'Kate']
const year7 = ['Emmy', 'Oleg']
const year10 = ['Alex']

transpose([year5, year7, year10])   // [['John', 'Emmy', 'Alex'], ['Mary', 'Oleg'], ['Kate']]
```
:::

::: warning
Sparse sub`array`s result in different sub`array`s in final `array`

```js
import { transpose } from 'nanoutils'

const year5 = ['John', 'Mary']
const year7 = ['Emmy', undefined, 'Kate']
const year10 = ['Alex']

transpose([year5, year7, year10])   // [['John', 'Emmy', 'Alex'], ['Mary'], []]
```
:::

## `trim`

Returns `string` without white spaces and terminators

```js
import { trim } from 'nanoutils'

trim('  Hello, Jane!\n  ')    // 'Hello, Jane!'
```

::: tip
It can eliminate:
* Spaces
  * Normal  ` `
  * Nonbreaking `\u00A0`
  * Byte order mark `\uFEFF`
  * Form feed `\f`
  * Tab `\t`
  * Vertical tab `\v`
* Terminators
  * New line `\n`
  * Carriage return `\r`
  * Line separator `\u2028`
  * Paragrath separator `\u2029`
:::

## `tryCatch`

Calls `try` or `catch` if it throws error

```js
import { tryCatch } from 'nanoutils'

const EMPTY_NAME = 'Name is not specified'
const getName = tryCatch(({ name }) => name, () => EMPTY_NAME)

getName({ name: 'Alex' })     // 'Alex'
getName(null)                 // 'Name is not specified'
```

## `type`

Returns type of anything

```js
import { type } from 'nanoutils'

type('Alex')              // 'String'
type(Symbol.iterator)     // 'Symbol'
type(() => true))         // 'Function'
type(false)               // 'Boolean'
type(NaN)                 // 'Number'
```

::: tip JS-friendly
It supports:
* `Array`
* `Null`
* `RegExp`

Except for `3` types, it tries to identify type according to `typeof` operator and returns it with first upper letter
:::

## `unapply`

Passes arguments to a specified function which takes `array`

```js
import { mean, unapply } from 'nanoutils'

const meanArgs = unapply(mean)

meanArgs(1, 2, 3)  // 2
```

## `unary`

Passes exactly one argument

```js
import { unary } from 'nanoutils'

const ages = ['15yo', 'fifteen years old', 15]

ages.map(unary(parseInt))     // [15, NaN, 15]
```

## `uncurryN`

Returns uncurried function having a specified curried function

```js
import { add, uncurryN } from 'nanoutils'

const binaryAdd = uncurryN(2, add)

binaryAdd(1)      // NaN
binaryAdd(1, 2)   // 3
```

## `unfold`

Returns `array` of values with a specified generator-like function

```js
import { cond, F, lt, T, unfold } from 'nanoutils'

const gt_ = than => what => lt(than, what)

const generator = cond([
  [gt_(50), F],
  [T, value => [value, value + 10]]
])

unfold(generator, 10)   // [10, 20, 30, 40, 50]
```

::: tip
Generator-like function looks like

```js
const endPredicate = /** predicate returns false when you need to finish iteration **/
const getCurrentValue = /** **/
const getStep = /** **/

const generator = value => endPredicate(value) ? false : [getCurrentValue(value), getStep(value)]
```
:::

::: tip
A specified function can also be written like:

```js
const generator = value => endPredicate(value) && [getCurrentValue(value), getStep(value)]
```
:::

## `union`

Returns `array` with values from both `array`s excluding duplicates with `identical`

```js
import { union } from 'nanoutils'

const queue_14_30 = ['Ivan', 'Petr', 'Mike']
const queue_14_40 = ['Petr', 'Mike', 'Jane']

union(queue_14_30, queue_14_40)    // ['Ivan', 'Petr', 'Mike', 'Jane']
```

## `unionWith`

Returns `array` with values from both `array`s excluding duplicates with a specified function

```js
import { unionWith } from 'nanoutils'

const equalsByName = (first, second) => first.name === second.name

const queue_14_30 = [{ name: 'Ivan' }, { name: 'Petr' }, { name: 'Mike' }]
const queue_14_40 = [{ name: 'Petr' }, { name: 'Mike' }, { name: 'Jane' }]

unionWith(equalsByName, queue_14_30, queue_14_40)    // [{ name: 'Ivan' }, { name: 'Petr' }, { name: 'Mike' }, { name: 'Jane' }]
```

## `uniq`

Returns `array` without duplicates using `equals`

```js
import { uniq } from 'nanoutils'

const images = ['1.png', '2.png', '1.png', '2.png']

uniq(images)    // ['1.png', '2.png']
```

## `uniqBy`

Returns `array` without duplicates by a specified function using `equals`

```js
import { prop, uniqBy } from 'nanoutils'

const images = [
  { filename: '1', extension: 'png' },
  { filename: '2', extension: 'png' },
  { filename: '1', extension: 'jpeg' },
  { filename: '2', extension: 'jpeg' }
]

uniqBy(prop('filename'), images)    // ['1', '2']
```

::: tip
If you want to put `object` property into `array` and prevent all `duplicates`, that's exactly what it's doing
:::

## `uniqWith`

Returns `array` without duplicates with a specified predicate

```js
import { eqBy, prop, uniqWith } from 'nanoutils'

const eqByFilename = eqBy(prop('filename'))

const images = [
  { filename: '1', extension: 'png' },
  { filename: '2', extension: 'png' },
  { filename: '1', extension: 'jpeg' },
  { filename: '2', extension: 'jpeg' }
]

uniqWith(eqByFilename, images)    // [{ filename: '1', extension: 'png' }, { filename: '2', extension: 'png' }]
```

::: tip
If you want to compare `object`s by property but put whole `object` into `array` and prevent all `duplicates`, that's exactly what it's doing
:::

## `unless`

Returns function which can return either value itself if a specified predicate returns `true` or apply value using a given reducer

```js
import { unless } from 'nanoutils'

const buyCar = years => ['Bmw', 'Mercedes', 'Toyota'][years % 3]
const whenYouGetOlderWeWillBuyYouCar = unless(years => years < 18, buyCar)

whenYouGetOlderWeWillBuyYouCar(17)    // 17
whenYouGetOlderWeWillBuyYouCar(18)    // 'Bmw'
```

## `unnest`

Returns `array` with one level of unnesting

```js
import { unnest } from 'nanoutils'

unnest([1, [2], [3, [4]]])    // [1, 2, 3, [4]]
```

::: tip
`unnest` equals to `chain(identity)`
:::

::: warning
If not `array` is passed, it returns empty `array`
:::

## `unnestN`

Returns `array` with a specified times of unnesting

```js
import { unnestN } from 'nanoutils'

unnestN(2, [1, [2], [3, [4]]])    // [1, 2, 3, 4]
```

::: tip
`unnestN` equals to `unnest` which is applied N times
:::

::: warning
If a specified number of times is `0`, it returns `array` as is
:::

::: warning
If a specified number of times is negative, it returns empty `array`
:::

## `until`

Calls a specified function until a given predicate returns `true`

```js
import { until } from 'nanoutils'

const initialSavings = { age: 10, balance: 1000 }
const saveUpTo18yo = until(({ age }) => age >= 18, ({ age, balance }) => ({ age: age + 1, balance: balance * 2 }))

saveUpTo18yo(initialSavings)    // { age: 18, balance: 256000 }
```

## `unzip`

Combines `i`th-index sub`array` values into sub`array`s

```js
import { unzip } from 'nanoutils'

const company1 = [300e12, 350e12, 200e12]
const company2 = [400e12, 350e12, 300e12]
const revenues = [company1, company2]

unzip(revenues)   // [[300e12, 400e12], [350e12, 350e12], [200e12, 300e12]]
```

## `unzipWith`

Combines `i`th-index `array` values with a specified function

```js
import { mean, unapply, unzipWith } from 'nanoutils'

const meanArgs = unapply(mean)

const company1 = [300e12, 350e12, 200e12]
const company2 = [400e12, 350e12, 300e12]
const revenues = [company1, company2]

unzipWith(meanArgs, revenues)   // [350e12, 350e12, 250e12]
```

## `update`

Returns `array` with updated value by a specified index

```js
import { update } from 'nanoutils'

const queue = ['Alex', 'Mike', 'Jane']

update(0, 'Taylor', queue)    // ['Taylor', 'Mike', 'Jane']
```

## `updateBy`

Returns `array` with updated value by a specified predicate

```js
import { updateBy } from 'nanoutils'

const isAlex = name => name === 'Alex'
const queue = ['Alex', 'Mike', 'Jane']

update(isAlex, 'Taylor', queue)    // ['Taylor', 'Mike', 'Jane']
```

## `useWith`

Changes arguments of calling a specified function

```js
import { identity, useWith } from 'nanoutils'

const sendSalary = identity
const countSalary = [value => 0.87 * value]
const getSalary = useWith(sendSalary, countSalary)

getSalary(10000)    // 8700
```

## `values`

Returns `array` of values with a specified `object`

```js
import { values } from 'nanoutils'

const obj = {
  name: 'Adam Popov',
  __proto__: {
    dad: {
      name: 'David Popov'
    },
    mom: {
      name: 'Margaret Popova'
    }
  }
}

values(obj)   // ['Adam Popov']
```

::: tip
It doesn't iterate `prototype`s' values
:::

## `valuesIn`

Returns `array` of values with a specified `object` including `prototype`s' values

```js
import { valuesIn } from 'nanoutils' 

const obj = {
  name: 'Adam Popov',
  __proto__: {
    dad: {
      name: 'David Popov'
    },
    mom: {
      name: 'Margaret Popova'
    }
  }
}

valuesIn(obj)   // ['Adam Popov', 'David Popov', 'Margaret Popova']
```

::: tip
It iterates `prototype`s' values
:::

## `view`

Gets value with a specified `lens`-like function

```js
import { lens, view } from 'nanoutils'

const person = {
  name: 'Alexey',
  age: 25
}
const nameLens = lens(({ name }) => name, (name, person) => ({ ...person, name }))

view(nameLens, person)   // 'Alexey'
```

## `when`

Returns function which can return either value itself if a specified predicate returns `false` or apply value using a given reducer

```js
import { when } from 'nanoutils'

const buyCar = years => ['Bmw', 'Mercedes', 'Toyota'][years % 3]
const whenYouGetOlderWeWillBuyYouCar = when(years => years >= 18, buyCar)

whenYouGetOlderWeWillBuyYouCar(17)    // 17
whenYouGetOlderWeWillBuyYouCar(18)    // 'Bmw'
```

## `where`

Checks if a specified `object` of predicates validates a given `object`

```js
import { where } from 'nanoutils'

const isAgeOfMajority = age => age >= 18
const hasForeignPassport = foreignPassport => !!foreignPassport

const canTravelAbroadByHerself = where({
  age: isAgeOfMajority,
  foreignPassport: hasForeignPassport
})

canTravelAbroadByHerself({ age: 15, foreignPassport: true })    // false
canTravelAbroadByHerself({ age: 18, foreignPassport: false })   // false
canTravelAbroadByHerself({ age: 18, foreignPassport: true })    // true
```

## `whereEq`

Checks if a specified `object` of predicates validates a given `object` using `equals`

```js
import { whereEq } from 'nanoutils'

const canTravelAbroadByHerself = whereEq({
  age: 18,
  foreignPassport: true
})

canTravelAbroadByHerself({ age: 15, foreignPassport: true })    // false
canTravelAbroadByHerself({ age: 18, foreignPassport: false })   // false
canTravelAbroadByHerself({ age: 18, foreignPassport: true })    // true
```

## `without`

Returns `array` with values which are presented in second `array` but not first one

```js
import { without } from 'nanoutils'

const queue_14_30 = ['Ivan', 'Petr', 'Mike']
const queue_14_40 = ['Petr', 'Mike', 'Jane']

without(queue_14_30, queue_14_40)   // ['Jane']
```

## `xprod`

Returns subset of values from 2 `array`s

```js
import { xprod } from 'nanoutils'

const probabilities = [0.14, 0.16, 0.29, 0.41]
const values = ['⚪', '🔵']

xprod(probabilities, values)  // [[0.14, '⚪'], [0.14, '🔵'], [0.16, '⚪'], [0.16, '🔵'], [0.29, '⚪'], [0.29, '🔵'], [0.41, '⚪'], [0.41, '🔵']]
```

## `za`

Given a getter function compares values in inversed alphabetical 🔤 order

```js
import { prop, za } from 'nanoutils'

const nameComparator = za(prop('name'))

nameComparator({ name: 'Alex' }, { name: 'Tony' })  // 1
nameComparator({ name: 'Alex' }, { name: 'Alex' })  // 0
nameComparator({ name: 'Tony' }, { name: 'Alex' })  // -1
```

## `zip`

Combines `i`th-index values into sub`array`s

```js
import { zip } from 'nanoutils'

const company1 = [300e12, 350e12, 200e12]
const company2 = [400e12, 350e12, 300e12]

zip(company1, company2)   // [[300e12, 400e12], [350e12, 350e12], [200e12, 300e12]]
```

::: tip
`zip(first, second)` equals to `unzip([first, second])`
:::

## `zipObj`

Returns `object` with keys from first `array` and values from second one

```js
import { zipObj } from 'nanoutils'

zipObj(['name', 'age'], ['Alexey', 23])   // { name: 'Alexey', age: 23 }
```

::: tip
Unlike [`zip`](#zip) `zipObj` uses first values as keys and second values as values for `object`
:::

## `zipObjDeep`

Returns `object` with paths from first `array` and values from second one

```js
import { zipObjDeep } from 'nanoutils'

const keys = [
  ['childhood', 'school', 'number'],
  ['adulthood', 'uni', 'name']
]

const values = [
  76, 'SPSU'
]

zipObjDeep(keys, values)    // { childhood: { school: { number: 76 } }, adulthood: { uni: { name: 'SPSU' } } }
```

::: tip
You can specify long paths for every value
:::

## `zipWith`

Combines `i`th-index values with a specified function

```js
import { mean, unapply, zipWith } from 'nanoutils'

const meanArgs = unapply(mean)

const company1 = [300e12, 350e12, 200e12]
const company2 = [400e12, 350e12, 300e12]

zipWith(meanArgs, company1, company2)   // [350e12, 350e12, 250e12]
```

::: tip
`zipWith(cb, first, second)` equals to `unzipWith(cb, [first, second])`
:::