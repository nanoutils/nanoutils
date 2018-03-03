# nanoutils

Tiniest JavaScript utils library

## Inspiration

I support nano-hype in JavaScript and want to create as much nano-things as possible.  
So I'm starting a challenge - write Ramda clone where no one method will be over 1KB size.  
More nano's for the God of nano's!

## Basic ideas

* **Functional style**. FP is cool, isn't it? :sunglasses: So I'll add some Ramda methods too.
* **No ES6 features**. We don't use Babel to save support in older browsers and save a status of nano-library.
* Use **methods composition** only if it won't greatly increase the size of method

## Can I use it in my project?

Not yet. I can't give you any promises that something won't be changed on this stage.
But you can boost progress with your contributions. You can view this repo to see the progress.  
Also I'll be especially grateful for someone who'll help me with TS/Flow typings because I'm not typings guru.

## Roadmap

* [ ] Create methods list
* [ ] Complete all needed methods (we get list of methods from Ramda) with 100% tests and types coverage
* [ ] Create a tool to split nanoutils to separated packages
* [ ] Try to reduce methods sizes even more

## NPM scripts

If you want to help, here are some tools for you.

### Shortcut for new methods

```
npm run method:add <...methods> -- [flags]

Params:
    methods           List with method names (separated by space)

Flags:
    -f                Overwrite methods (if exists)
    --curried         Add curried method
                      you can use --curried=<N> to add curryN
    --types           Add index.d.ts and index.js.flow for method typings
```

It will create `lib/method` dir with following files:

```
index.js        File with method
index.d.ts      TypeScript typings (if --types passed)
index.js.flow   Flow type declaration (if --types passed)
method.test.js  Test for method (I use Jest)
```

### Check sizes of methods

```
npm size <...methods>

Params
methods           List of method names (separated by space) you want to check.
                  If no methods it will check size of all methods
```

### Check time of methods

```
npm time <...methods>

Params
methods           List of method names (separated by space) you want to check.
                  If no methods it will check time of all methods
```

### Check ramda/nanoutils diff

```
npm check <type>

Params
type           What to display?
               - both: display methods that are both in ramda and nanoutils
               - nano: display nanoutils methods that ramda doesn't have
               - ramda: display ramda methods that nanoutils doesn't have
```

I use [size-limit](https://github.com/ai/size-limit) to check the size of methods.
