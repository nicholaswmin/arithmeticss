[![tests](https://github.com/nicholaswmin/arithmeticss/actions/workflows/tests.yml/badge.svg)](https://github.com/nicholaswmin/arithmeticss/actions/workflows/tests.yml)
[![100% coverage](https://github.com/nicholaswmin/arithmeticss/actions/workflows/coverage.yml/badge.svg)](https://github.com/nicholaswmin/arithmeticss/actions/workflows/coverage.yml)

arithmetic expressions on CSS variables,   
[tokenized][subs-src] & [calculated][calc-src] in userland, w/o 
[`eval`][eval]-like tricks.    

zero deps, `~900 bytes`.

## example

```bash
npm i https://github.com/nicholaswmin/arithmeticss.git
```

Assuming `some.css`:

```css
:root {
  --foo: 10px;
  --bar: 5;
  --baz: 2;
}
```

then in `some.js`:

```js
import calc from '@nicholaswmin/arithmeticss'

const res = calc('--foo * --bar + --baz * 3')

console.log(res) // logs: 56
```

...thats all.

## gotchas

### It's unitless

For example: `50% + 100em = 150`, which is wrong.

I didn't need fancy units, so I didn't bother, but it should be fairly 
easy to extend.[^1]

### No parentheses

e.g: `--foo * (--bar + 5)` is invalid.    

Fancy arithmetic requires a [shunting-yard][syard] implementation, 
i.e., 10x more code. I'll pass.  

### don't squash expressions

won't work: `--foo+--bar`. It's ambiguous.     
works: `--foo + --bar`.  

Parsing errors throw a [`SyntaxError`][synterr], the rest will either 
be a [`TypeError`][typesrr] or (rarely) a [`RangeError`][rangerr].


## test

> requires node `v23+`

unit tests:

```bash
node --run test
```

coverage:

```bash
node --run coverage
```

### contributing

[Guide for Contributors][conrib]

## build

Bundling & minification are application-level concerns,  
not module-level concerns so there's no `build` or `dist/`
here.

That being said, you can do:

```bash
npx esbuild index.js --bundle --minify --analyze --format=esm --outfile="dist/arithmeticss.js"
```

and move: `dist/arithmeticss.js` to your own project.

then simply `import`, with:

```html
<!-- ... some html -->s

<script type="module">
  import calc from './arithmeticss.js'
  window.calc = calc
  console.log(calc())
</script>

<!-- more html ... -->
```

## authors

[@nicholaswmin][author]

## license

> MIT LicenseS
>
> Copyright (c) 2024 Nicholas Kyriakides   
>
> Permission is hereby granted, free of charge, to any person obtaining a 
> copyof this software and associated documentation files (the "Software"), 
> to deal in the Software *without restriction*, 
> including without limitation the rights to: 
> use, copy, modify, merge, publish, distribute, sublicense, and/or sell 
> copies of the Software, and to permit persons to whom the Software is 
> furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be
> included in all copies or substantial portions of the Software.


## footnotes

[^1]: `em` is based on the font-size of the parent. Easy.
      `rem` is based on the font-size of the root. Also easy.
      `%` is based on the ??? ... this is tricky because 
      its based on the property where the variable is assigned.  
      It's doable but the syntax is gonna look like crap.
      


<!-- References -->

[author]: https://github.com/nicholaswmin

[calc-src]: ./src/calculate.js
[subs-src]: ./src/transform.js
[syard]: https://en.wikipedia.org/wiki/Shunting_yard_algorithm
[eval]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval#never_use_direct_eval!
[calc]: https://developer.mozilla.org/en-US/docs/Web/CSS/calc
[mit]: https://en.wikipedia.org/wiki/MIT_License

[rangerr]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RangeError
[typesrr]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError
[synterr]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError
