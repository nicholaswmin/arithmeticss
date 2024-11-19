/* node:coverage disable */

// @TODO Ditch this, mock module for tests, always assume browser
const IS_TEST_ENV = (process.env.NODE_ENV || '').toLowerCase().trim() === 'test'
const IS_BROWSER_ENV = typeof window !== 'undefined'
const USE_MOCKS = IS_TEST_ENV || !IS_BROWSER_ENV

const mockDocument = () => ({ body: {} })
const mockGetComputedStyle = () => ({ getPropertyValue: prop => ({ 
    '--foo': '-10', '--bar': '-5', '--baz': '0', 
    '--qux': '5', '--quux': '10', '--corge': 'serif'
  })[prop] 
})

const document = USE_MOCKS ? mockDocument : document
const getComputedStyle = USE_MOCKS ? mockGetComputedStyle : getComputedStyle
/* node:coverage enable */

export { document, getComputedStyle }
