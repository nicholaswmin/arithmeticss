import test from 'node:test'

import './window.js'
import calc from '../index.js'
  
// @NOTE: 
// - Do test for both error type and message.
// - Do test actual results if appropriate.

// @REVIEW:
// - There must be some generic set of edge cases for these parsers, 
//   and I don't know much about parsing so i'm freestyling it

test('Edge cases', async t => {
  await t.test('no whitespace between tokens', async t => {
    await t.test('throws descriptive TypeError', async t => {
      t.assert.throws(() => calc('--foo+--bar'), {
        name: 'TypeError'
      })
    })
  })
  
  await t.test('whitespace at start', async t => {
    await t.test('returns a correct result', async t => {
      t.assert.strictEqual(calc('--foo + --bar  '), 15)
    })
  })
  
  await t.test('whitespace at end', async t => {
    await t.test('returns correct result', async t => {
      t.assert.strictEqual(calc('  --foo + --bar'), 15)
    })
  })
  
  await t.test('numeric value is a negative number', async t => {
    await t.test('returns correct result', async t => {
      t.assert.strictEqual(calc('  --foo + --bar'), 15)
    })
  })
})
