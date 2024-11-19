// Mock browser `window`.  
// Simulates browser env. with required methods as mocks.
// - import it *before* SUT: '../index.js' in tests

/* node:coverage disable */
class HTMLElement {}

globalThis.document = { body: new HTMLElement() }
globalThis.getComputedStyle = element => {
  if (typeof element === 'undefined')
    throw new TypeError('missing element arg.')
  if (!(element instanceof HTMLElement))
    throw new TypeError('element not instanceof HTMLElement')
  
  return {
    // - must return string, hyphen-case
    // - if not found return ''
    getPropertyValue: prop => ({ 
      // must include, at least:
      // - 0, as string, i.e: '0'
      // - suffixed number, as string, i.e: '50%'
      // - negative number, as string, i.e: '-10'
      // - positive number, as string, i.e: '20'
      // - non-numeric, i.e 'sans-serif'
      '--foo': '-10', '--bar': '-5', '--baz': '0', 
      '--qux': '5', '--quux': '10', '--corge': 'serif'
    })[prop] || ''
  }
}

/* node:coverage enable */
export default globalThis
