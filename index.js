import substitute from './src/tokenizer.js'
import calculate from './src/calculator.js'

const exception = (err, msg) => { throw err(`arg[0]: ${msg}`) }
const validExpr = arg => typeof arg === 'string' 
  ? !!arg.length ? !arg.includes('(') ? arg 
  : exception(SyntaxError, 'does not support parentheses (round brackets)')
  : exception(TypeError,  'cannot be empty')
  : exception(TypeError,  `must be a string, is: ${typeof arg}`)

export default (expr, mapFn) => calculate(substitute(validExpr(expr), mapFn))
