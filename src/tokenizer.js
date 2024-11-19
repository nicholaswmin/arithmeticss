const { getComputedStyle, document } = globalThis

const exception = (err, msg) => { throw err(`CSS property: ${msg}`) }
const isdefined = prop => !!compute(prop)
const isnumeric = prop => !Number.isNaN(parseInt(compute(prop), 10)) 

const replace = (str, sub) => str.replaceAll(sub.prop, sub.value)
const hydrate = prop => ({ prop, value: numeric(compute(prop)) })
const compute = prop => getComputedStyle(document.body).getPropertyValue(prop)
const numeric = value => +value.replace(/[^.\d]/g, '') //? parseInt(str, 10)

const tokenize = expr => expr.split(' ').filter(token => token.startsWith('--'))
const validate = prop => isdefined(prop) ? isnumeric(prop) ? prop 
  : exception(TypeError, `${prop} not numeric`)
  : exception(TypeError, `${prop} not defined`)

export default expr => 
  tokenize(expr).map(validate).map(hydrate).reduce(replace, expr, '')
