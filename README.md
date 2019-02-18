# nanoutils

[![npm version](https://badge.fury.io/js/nanoutils.svg)](https://badge.fury.io/js/nanoutils)
[![npm download](https://img.shields.io/npm/dm/nanoutils.svg)](https://npmcharts.com/compare/nanoutils?minimal=true)
[![npm download](https://img.shields.io/badge/telegram-join-blue.svg)](https://tele.gg/joinchat/BcQiRFh-eUXs8pbHBj-y5g)

Tiniest JavaScript utils library

## Usage

First, install `nanoutils`:

```bash
$ npm install --save nanoutils
```

or install it with `yarn`:

```bash
$ yarn add nanoutils
```

To use ES modules we wrote a plugin [`babel-plugin-nanoutils`](https://github.com/nanoutils/babel-plugin-nanoutils)

To install:

```bash
$ npm install --save-dev babel-plugin-nanoutils
```

or

```bash
$ yarn add --dev babel-plugin-nanoutils
```

Using `.babelrc`:

```diff
{
  "preset": ["env"]
+ "plugins": ["nanoutils"]
}
```

via CLI:

```diff
{
  "scripts": {
+   "babel": "babel --plugins nanoutils app.js",
    "test": "jest && eslint ."
  }
}
```

or with Node API:

```diff
const babel = require('babel-core')

babel.transform('code', {
+ plugins: ['nanoutils']
})
```

## Examples

### Sort array of values by name alphabetically or by age

```js
import { ascend, az, prop, sortBy } from 'nanoutils'

const sortByName = sortBy(az(prop('name')))
const sortByAge = sortBy(ascend(prop('age')))

const consultants = [
  { name: 'Mike', age: 30 },
  { name: 'David', age: 35 },
  { name: 'Alex', age: 25 }
]

sortByName(consultants)     // [{ name: 'Alex', age: 25 }, { name: 'David', age: 35 }, { name: 'Mike', age: 30 }]
sortByAge(consultants)     // [{ name: 'Alex', age: 25 }, { name: 'Mike', age: 30 }, { name: 'David', age: 35 }]
```

### Find sum of all ages which will be even next year

```js
import { add, filterT, mapT, pipeT, prop, transduce } from 'nanoutils'

const isEven = value => value % 2 === 0

const sumOfAllEvenAgesNextYear = array => transduce(
  pipeT(
    mapT(prop('age')),
    mapT(add(1)),
    filterT(isEven),
  ),
  add,
  0,
  array
)

const consultants = [
  { name: 'Mike', age: 30 },
  { name: 'David', age: 35 },
  { name: 'Alex', age: 25 }
]

sumOfAllEvenAgesNextYear(ages)   // 62
```

### Return memoized mean

```js
import { ascend, identity, join, mean, memoizeWith, sort } from 'nanoutils'

const getHash = pipe(
  sort(ascend(identity)),
  join('-')
)
const memoizedMean = memoizeWith(getHash, mean)

memoizedMean([1, 2, 3])   // 2
memoizedMean([1, 2, 3])   // 2 (extracts from memoizeWith function with hash='1-2-3')
memoizedMean([3, 1, 2])   // 2 (extracts from memoizeWith function with hash='1-2-3')
```

## Inspiration

We support nano-hype in JavaScript and want to create as much nano-things as possible.  
So we're starting a challenge - write Ramda clone where no one method will be over 1KB size.  
More nano's for the God of nano's!

## Basic ideas

* **Functional style**. FP is cool, isn't it? :sunglasses: So we'll add some Ramda methods too.
* **No ES6 features**. We don't use Babel to save support in older browsers and save a status of nano-library.
* Use **methods composition** only if it won't greatly increase the size of method

## Can I use it in my project?

It's production-ready but still has following drawbacks:

* No TS/Flow types

It's also a Ramda-supportive, you can see both docs and types here: [Ramda docs](https://ramdajs.com/docs/)

## Roadmap

* [x] Create methods list
* [x] Complete all needed methods (we get list of methods from Ramda) with 100% tests and types coverage
* [x] Add documentation for all methods
* [ ] Create a tool to split nanoutils to separated packages
* [ ] Cover all methods with performance tests
* [ ] Reduce methods sizes even more
* [ ] Compare to `lodash`, `underscore` (?)

## NPM scripts

If you want to help, here are some tools for you.

### Shortcut for new methods

```
npm run method:add <...methods> -- [flags]
yarn method:add <...methods> -- [flags]

Params:
    methods           List with method names (separated by space)

Flags:
    -f                Overwrite methods (if exists)
    --curried         Add curried method
                      you can use --curried=<N> to add curryN
    --types           Add index.d.ts and index.js.flow for method typings
    --perf            Add <method>.performance.js for performance test of method
```

It will create `lib/method` dir with following files:

```
index.js                File with method
index.d.ts              TypeScript typings (if --types passed)
index.js.flow           Flow type declaration (if --types passed)
method.test.js          Test for method (I use Jest)
method.performance.js   Performance test for method (if --perf passed)
```

### Check sizes of methods

```
npm run size <...methods>
yarn size <...methods>

Params
methods           List of method names (separated by space) you want to check.
                  If no methods it will check size of all methods
```

### Check time of methods

```
npm run time <...methods>
yarn time <...methods>


Params
methods           List of method names (separated by space) you want to check.
                  If no methods it will check time of all possible methods (which have *.performance.js file)
                  If type is set as no_perf (by default), it will throw an error: max.performance.js must have data to return
```

### Check ramda/nanoutils diff

```
npm run method:check <type>
yarn method:check <type>

Params
type           What to display?
               - both: display methods that are both in ramda and nanoutils
               - nano: display nanoutils methods that ramda doesn't have
               - ramda: display ramda methods that nanoutils doesn't have
```

We use [size-limit](https://github.com/ai/size-limit) to check the size of methods.
