# nanoutils

Tiniest JavaScript utils library

## Inspiration

We support nano-hype in JavaScript and want to create as much nano-things as possible.  
So we're starting a challenge - write Ramda clone where no one method will be over 1KB size.  
More nano's for the God of nano's!

## Basic ideas

* **Functional style**. FP is cool, isn't it? :sunglasses: So we'll add some Ramda methods too.
* **No ES6 features**. We don't use Babel to save support in older browsers and save a status of nano-library.
* Use **methods composition** only if it won't greatly increase the size of method

## Can I use it in my project?

It's production-ready, but still has following drawbacks:

* No documentation (will be available soon)
* No TS/Flow types

But as it's a Ramda-supportive, you can see both docs and types here: [Ramda docs](https://ramdajs.com/docs/)

## Roadmap

* [x] Create methods list
* [x] Complete all needed methods (we get list of methods from Ramda) with 100% tests and types coverage
* [ ] Create a tool to split nanoutils to separated packages
* [ ] Try to reduce methods sizes even more

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
