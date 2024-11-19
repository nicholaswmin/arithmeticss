// Substitutes CSS variables with their values, within a string.
// i.e transforms: `--foo + --bar` to `24 + 10`

const { getComputedStyle, document } = globalThis

const getValue = prop => getComputedStyle(document.body)
  .getPropertyValue(prop)

const castable = prop => !Number.isNaN(parseInt(getValue(prop), 10))
const property = tok => tok.startsWith('--')
const complain = (err, msg) => { throw err(`CSS property: ${msg}`) }

const exchange = (str, {prop, value}) => str.replaceAll(prop, value)
const valueify = prop => ({ prop, value: parseInt(getValue(prop), 10) })
const tokenize = exp => exp.split(' ').filter(property)
const validate = prop => !!getValue(prop) ? castable(prop) ? prop 
  : complain(TypeError, `${prop} not numeric`)
  : complain(TypeError, `${prop} not defined`)

export default exp => 
  tokenize(exp).map(validate)
    .map(valueify).reduce(exchange, exp, '')
