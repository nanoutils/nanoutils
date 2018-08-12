# CLI

These methods are mostly used to improve the process of the development.

## Add new method

There are several possible ways of adding new method along with other auxiliary files:

* Add folder with method and test files:
```{2}
npm run method:add coolMethod
yarn method:add coolMethod
```

::: warning
It creates `index.js` and `coolMethod.test.js` inside a folder `coolMethod`
:::

::: warning 
If method already exists, you probably need to use extra flag `-f` to replace the old implementation with new one
:::

* Add folder with curried method and test files:
```{2}
npm run method:add coolMethod --curried
yarn method:add coolMethod --curried
```

::: warning 
By default, it uses `curryN`. If you need an arity of `2` or `3`, better to specify them as methods will be optimised in size

```{2}
npm run method:add coolMethod --curried=2
yarn method:add coolMethod --curried=2
```
:::

* Add folder with method, type and test files:
```{2}
npm run method:add coolMethod --types
yarn method:add coolMethod --types
```
::: warning 
In addition it adds `index.d.ts` and `index.js.flow` files for TS / Flow types
:::

* Add folder with method and test (including performance test) files:
```{2}
npm run method:add coolMethod --perf
yarn method:add coolMethod --perf
```

::: warning 
It creates `coolMethod.performance.js` to generate test output which is used in `TIMES.md`
:::

## Check size

You can check the size of separate or all methods

* Size of list of methods (`any`, `all` and `find`):
```{2}
npm run size any all find
yarn size any all find
```

* Size of all methods
```{2}
npm run size
yarn size
```
::: warning
It's a behaviour by default if no method is specified
:::

## Check performance

Performance check is working the same way. Just replace `size` with `time`

::: warning
If `<method>.performance.js` exists, it will be checked

For now, there is no way to skip it
:::

::: danger
By default, the returning `type` of performance test is `no_perf`

If it's not replaced with any correct `type`, it will throw error `coolMethod.performance.js must have data to return`
:::

## Check not implemented methods

As nanoutils is a Ramda-compatible, it needs to show a diff between implemented methods.

* Display methods which are both in nanoutils and Ramda:
```{2}
npm run method:check both
yarn method:check both
```

* Display nanoutils' methods which are absent in Ramda
```{2}
npm run method:check nano
yarn method:check nano
```

* Display Ramda's methods which are absent in nanoutils
```{2}
npm run method:check ramda
yarn method:check ramda
```

We use [size-limit](https://github.com/ai/size-limit) to check the size of methods.