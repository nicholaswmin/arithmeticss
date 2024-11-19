import { document, getComputedStyle } from './shim.js'

const exception = (err, msg) => { throw err(`CSS property: ${msg}`) }
const parsedNum = str => +str.replace(/[^.\d]/g, '') //? parseInt(str, 10)
const valueExpr = (str, sub) => str.replaceAll(sub.prop, sub.value)
const tokenized = expr => expr.split(' ').filter(token => token.startsWith('--'))
const withValue = prop => ({ prop, value: parsedNum(propValue(prop)) })

const propValue = prop => getComputedStyle(document.body).getPropertyValue(prop)
const numerical = prop => !Number.isNaN(parseInt(propValue(prop), 10)) 
const validProp = prop => propValue(prop) ? numerical(prop) ? prop 
  : exception(TypeError, `${prop} not numeric`)
  : exception(TypeError,  `${prop} not defined`)

export default expr => tokenized(expr)
    .map(validProp)
    .map(withValue)
    .reduce(valueExpr, expr, '')
