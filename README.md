`calc`

tiny (but more stupid) implementation of [CSS calc()][calc] in ES6

calculates expressions: `--foo * --bar + --baz` based on CSS variables.  

Not based on `eval`; it tokenizes and parses the expression in userland.
No deps, `~1kb`.

For example:

in `foo.css`:

```css
:root {
  --foo: 10px;
  --bar: 5;
  --baz: 2;
}
```

and in `foo.js`:

```js
import calc from '@nicholaswmin/calc'

console.log(calc('--foo * --bar + --baz'))
// 100
```

## install 

```bash
npm i https://github.com/nicholaswmin/calc.git
```

## test

`node --run test`

> requires 100% coverage through thresholds

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


[wmin]: https://github.com/nicholaswmin
[calc]: https://developer.mozilla.org/en-US/docs/Web/CSS/calc
[mit]: https://developer.mozilla.org/en-US/docs/Web/CSS/calc
