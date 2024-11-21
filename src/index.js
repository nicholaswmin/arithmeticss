import transform from './transform.js'
import calculate from './calculate.js'

const complain = (err, msg, pos = '?') => { throw err(`arg${pos}: ${msg}`) }
const validate = (arg, pos) => typeof arg === 'string' 
  ? !!arg.length ? arg 
  : complain(TypeError, 'must be non-empty', pos)
  : complain(TypeError, `must be a string, is: ${typeof arg}`, pos)

export default (rawexp, valuefn) => 
  calculate(transform(validate(rawexp, 0), valuefn))
