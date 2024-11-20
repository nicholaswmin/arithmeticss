[![tests](https://github.com/nicholaswmin/arithmeticss/actions/workflows/tests.yml/badge.svg)](https://github.com/nicholaswmin/arithmeticss/actions/workflows/tests.yml)
[![100% coverage](https://github.com/nicholaswmin/arithmeticss/actions/workflows/coverage.yml/badge.svg)](https://github.com/nicholaswmin/arithmeticss/actions/workflows/coverage.yml)

arithmetic expressions on CSS variables,   
[tokenized][subs-src] & [calculated][calc-src] in userland, w/o `eval`-like 
tricks.    

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

console.log(result)
// 56
```

...thats it. The end.

## gotchas

### It's unitless.   

For example: `50% + 100em = 150`, which is wrong.

I didn't need fancy units so I didn't bother but it should be fairly 
easy to extend.[^1]

### No parentheses

e.g: `--foo * (--bar + 5)` is invalid.    

Fancy arithmetic requires [shunting-yard][syard] implementation, 
i.e 10x more code. I'll pass.  

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

## authors

[@nicholaswmin][author]

## license

> MIT License
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

[author]: https://github.com/nicholaswmin

[calc-src]: ./src/calculator.js
[subs-src]: ./src/transformer.js
[syard]: https://en.wikipedia.org/wiki/Shunting_yard_algorithm
[calc]: https://developer.mozilla.org/en-US/docs/Web/CSS/calc
[mit]: https://developer.mozilla.org/en-US/docs/Web/CSS/calc


## footnotes

[^1]: `em` is based on the font-size of the parent. Easy.
      `rem` is based on the font-size of the root. Easy.
      `%` is based on the ??? ... this is tricky because 
      its based on the property where the variable is assigned.  
      It's doable but the syntax is gonna look like crap.
