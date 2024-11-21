import test from 'node:test'

import './window.js'
import calc from '../src/index.js'

// @NOTE: 
// - Do test for both type and message.
// 
// - Don't test entire error message, try picking just the 
//   min. sensible x-section that validates its message is specific
// - Don't test actual results, this isn't the place

test('Invalid arguments throw appropriate errors', async t => {
  await t.test('no argument is passed', async t => {
    await t.test('throws descriptive TypeError', async t => {
      t.assert.throws(() => calc(), {
        name: 'TypeError',
        message: /string, is: undefined/
      })
    })
  })

  await t.test('argument 0 is not a string', async t => {
    await t.test('throws descriptive TypeError', async t => {
      t.assert.throws(() => calc(0), {
        name: 'TypeError',
        message: /must be a string, is: number/
      })
    })
  })
  
  await t.test('expression is empty', async t => {
    await t.test('throws descriptive TypeError', async t => {
      t.assert.throws(() => calc(''), {
        name: 'TypeError',
        message: /empty/
      })
    })
  })
  
  await t.test('expression is syntactically invalid', async t => {    
    await t.test('contains unsupported symbols', async t => {
      await t.test('throws descriptive SyntaxError', t => {
        t.assert.throws(() => calc('--foo > --bar'), {
          name: 'SyntaxError',
          message: /unparsable expression/
        })
      })
    })
  })

  await t.test('expression is syntactically valid', async t => {    
    await t.test('none of variables are defined CSS variables', async t => {
      await t.test('throws descriptive TypeError', t => {
        t.assert.throws(() => calc('--blaz + --xuux'), {
          name: 'TypeError',
          message: /blaz not defined/
        })
      })
    })
    
    await t.test('only some variables are defined CSS variables', async t => {
      await t.test('throws descriptive TypeError', t => {
        t.assert.throws(() => calc('--bar + --quuz'), {
          name: 'TypeError',
          message: /quuz not defined/
        })
      })
    })
    
    await t.test('all variables are defined CSS variables', async t => {
      await t.test('some cannot be casted to numeric', async t => {
        await t.test('throws descriptive TypeError', t => {
          t.assert.throws(() => calc('--foo + --corge'), {
            name: 'TypeError',
            message: /corge not numeric/
          })
        })
      })
      
      await t.test('all are casteable to numbers', async t => {
        // `doesNotThrow` tests make no sense but its consistent, 
        // and this isn't the place to test correctness of results.
        await t.test('does not throw', t => {
          t.assert.doesNotThrow(() => calc('--foo + --bar'))
        })
      })
    })
  })
})
