import transform from './src/transformer.js'
import calculate from './src/calculator.js'

const complain = (err, msg) => { throw err(`arg[0]: ${msg}`) }
const validate = arg => typeof arg === 'string' 
  ? !!arg.length ? arg 
  : complain(TypeError, 'cannot be empty')
  : complain(TypeError, `must be a string, is: ${typeof arg}`)

export default (raw, valuefn) => calculate(transform(validate(raw), valuefn))
