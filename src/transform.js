// Substitutes CSS variable names with values, within a string.
// e.g: given: `--foo + --bar - 2`, it returns: `24 + 10 - 2`, 
//   assuming there are defined css variables with these values.
//
// - units like `px`, `em` are stripped, so `40em` becomes `40`.
// - throws if value cannot be parsed to a number. 
//   This is ok: '123foobar`. `sans-serif` is not.

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

export default rawexp => 
  tokenize(rawexp).map(validate)
    .map(valueify).reduce(exchange, rawexp, '')
