[![tests](https://github.com/nicholaswmin/arithmeticss/actions/workflows/tests.yml/badge.svg)](https://github.com/nicholaswmin/arithmeticss/actions/workflows/tests.yml)

arithmetic expressions on CSS variables

expression is tokenized & calculated in userland, without `eval`-like tricks.     
No dependencies, `~960 bytes`.

## example

```bash
npm i https://github.com/nicholaswmin/arithmeticss.git
```

Assuming `something.css`:

```css
:root {
  --foo: 10px;
  --bar: 5;
  --baz: 2;
}
```

then in `script.js`:

```js
import calc from '@nicholaswmin/arithmeticss'

console.log(calc('--foo * --bar + --baz * 3'))
// 100
```

... thats it. The end.

## gotchas

- It's unitless. `50% + 100em` is `150`. That's wrong.   
  I didn't need fancy units so I didn't bother. Theres tests. Extend it.[^1]
- Doesn't support parentheses. i.e: `--foo * (--bar + 5)` is invalid.  
  Fancy arithmetic needs a [shunting-yard][syard] impl. which is 10x code. Pass.

## test

```bash
node --run test
```

> requires 100% coverage 

## authors

[@nicholaswmin][wmin]

## license

> MIT License
>
> Copyright (c) 2024 Nicholas Kyriakides  
> @nicholaswmin
>
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.

[calc-source]: ./src/calculator.js
[sub-source]: ./src/transformer.js
[syard]: https://en.wikipedia.org/wiki/Shunting_yard_algorithm

[wmin]: https://github.com/nicholaswmin
[calc]: https://developer.mozilla.org/en-US/docs/Web/CSS/calc
[mit]: https://developer.mozilla.org/en-US/docs/Web/CSS/calc


## footnotes

[^1]: `em` is based on the font-size of the parent. Easy.
      `rem` is based on the font-size of the root. Easy.
      `%` is based on the ??? ... percent is gonna be tricky because 
      its based on the property where the variable is assigned. Tricky.
