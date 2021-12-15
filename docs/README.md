# Introduction

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
import { ascend, az, prop, sortBy } from "nanoutils";

const sortByName = sortBy(az(prop("name")));
const sortByAge = sortBy(ascend(prop("age")));

const consultants = [
  { name: "Mike", age: 30 },
  { name: "David", age: 35 },
  { name: "Alex", age: 25 },
];

sortByName(consultants); // [{ name: 'Alex', age: 25 }, { name: 'David', age: 35 }, { name: 'Mike', age: 30 }]
sortByAge(consultants); // [{ name: 'Alex', age: 25 }, { name: 'Mike', age: 30 }, { name: 'David', age: 35 }]
```

### Find sum of all ages which will be even next year

```js
import { add, filterT, mapT, pipeT, prop, transduce } from "nanoutils";

const isEven = (value) => value % 2 === 0;

const sumOfAllEvenAgesNextYear = (array) =>
  transduce(
    pipeT(mapT(prop("age")), mapT(add(1)), filterT(isEven)),
    add,
    0,
    array
  );

const consultants = [
  { name: "Mike", age: 30 },
  { name: "David", age: 35 },
  { name: "Alex", age: 25 },
];

sumOfAllEvenAgesNextYear(ages); // 62
```

### Return memoized mean

```js
import { ascend, identity, join, mean, memoizeWith, sort } from "nanoutils";

const getHash = pipe(
  sort(ascend(identity)),
  join("-")
);
const memoizedMean = memoizeWith(getHash, mean);

memoizedMean([1, 2, 3]); // 2
memoizedMean([1, 2, 3]); // 2 (extracts from memoizeWith function with hash='1-2-3')
memoizedMean([3, 1, 2]); // 2 (extracts from memoizeWith function with hash='1-2-3')
```

## Inspiration

We support nano-hype in JavaScript and want to create as much nano-things as possible.  
So we're starting a challenge - write Ramda clone where no one method will be over 1KB size.  
More nano's for the God of nano's!

## Basic ideas

- **Functional style**. FP is cool, isn't it? :sunglasses: So we'll add some Ramda methods too.
- **No ES6 features**. We don't use Babel to save support in older browsers and save a status of nano-library.
- Use **methods composition** only if it won't greatly increase the size of method

## Can I use it in my project?

It's production-ready but still has following drawbacks:

- No TS types

It's also a Ramda-supportive, you can see both docs and types here: [Ramda docs](https://ramdajs.com/docs/)
