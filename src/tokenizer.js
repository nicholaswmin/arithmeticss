const { getComputedStyle, document } = globalThis

const throwError = (err, msg) => { throw err(`CSS property: ${msg}`) }
const castNumber = str => +str.replace(/[^.\d]/g, '') //? parseInt(str, 10)
const substitute = (str, sub) => str.replaceAll(sub.prop, sub.value)
const toValueobj = prop => ({ prop, value: castNumber(vcomputed(prop)) })

const vcomputed = prop => getComputedStyle(document.body).getPropertyValue(prop)
const isdefined = prop => !!vcomputed(prop)
const isnumeric = prop => !Number.isNaN(parseInt(vcomputed(prop), 10)) 

const tokenize = expr => expr.split(' ').filter(token => token.startsWith('--'))
const validate = prop => isdefined(prop) ? isnumeric(prop) ? prop 
  : throwError(TypeError, `${prop} not numeric`)
  : throwError(TypeError,  `${prop} not defined`)

export default expr => tokenize(expr)
    .map(validate)
    .map(toValueobj)
    .reduce(substitute, expr, '')
