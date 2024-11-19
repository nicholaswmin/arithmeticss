import test from 'node:test'

import '../window.js'
import calc from '../../index.js'
  
/* test data in './window.js' */

test('Uniform operation type', async t => {
  t.test('Addition', async t => {
    await t.test('returns a number', async t => {
      const type = typeof calc('--foo + --bar')
      t.assert.strictEqual(type, 'number')
    })
  
    await t.test('arity 2', async t => {
      await t.test('correct', async t => {
        t.assert.strictEqual(calc('--foo + --bar'), -15)
      })
      
      await t.test('reverse operand order', async t => {
        await t.test('correct', async t => {
          t.assert.strictEqual(calc('--bar + --foo'), -15)
        })
      })
    })
    
    await t.test('arity 3', async t => {
      await t.test('correct', async t => {
        t.assert.strictEqual(calc('--foo + --bar + --foo'), -25)
      })
      
      await t.test('reverse operand order', async t => {
        await t.test('correct', async t => {
          t.assert.strictEqual(calc('--bar + --foo + --bar'), -20)
        })
      })
    })
  })
  
  await t.test('Subtraction', async t => {
    await t.test('returns a number', async t => {
      const type = typeof calc('--foo - --bar')
      t.assert.strictEqual(type, 'number')
    })
  
    await t.test('arity 2', async t => {
      await t.test('correct', async t => {
        t.assert.strictEqual(calc('--foo - --bar'), -5)
      })
      
      await t.test('reverse operand order', async t => {
        await t.test('correct', async t => {
          t.assert.strictEqual(calc('--bar - --foo'), 5)
        })
      })
    })
    
    await t.test('arity 3', async t => {
      await t.test('correct', async t => {
        t.assert.strictEqual(calc('--foo - --bar - --foo'), 5)
      })
      
      await t.test('reverse operand order', async t => {
        await t.test('correct', async t => {
          t.assert.strictEqual(calc('--bar - --foo - --bar'), 10)
        })
      })
    })
  })
  
  await t.test('Multiplication', async t => {
    await t.test('returns a number', async t => {
      const type = typeof calc('--foo * --bar')
      t.assert.strictEqual(type, 'number')
    })
  
    await t.test('arity 2', async t => {
      await t.test('correct', async t => {
        t.assert.strictEqual(calc('--foo * --bar'), 50)
      })
      
      await t.test('reverse operand order', async t => {
        await t.test('correct', async t => {
          t.assert.strictEqual(calc('--bar * --foo'), 50)
        })
      })
    })
    
    await t.test('arity 3', async t => {
      await t.test('correct', async t => {
        t.assert.strictEqual(calc('--foo * --bar * --foo'), -500)
      })
      
      await t.test('reverse operand order', async t => {
        await t.test('correct', async t => {
          t.assert.strictEqual(calc('--bar * --foo * --bar'), -250)
        })
      })
    })
  })
  
  await t.test('Division', async t => {
    await t.test('returns a number', async t => {
      const type = typeof calc('--foo / --bar')
      t.assert.strictEqual(type, 'number')
    })
  
    await t.test('arity 2', async t => {
      await t.test('correct', async t => {
        t.assert.strictEqual(calc('--foo / --bar'), 2)
      })
      
      await t.test('reverse operand order', async t => {
        await t.test('correct', async t => {
          t.assert.strictEqual(calc('--bar / --foo'), 0.5)
        })
      })
    })
    
    await t.test('arity 3', async t => {
      await t.test('correct', async t => {
        t.assert.strictEqual(calc('--foo * --bar * --foo'), -500)
      })
      
      await t.test('reverse operand order', async t => {
        await t.test('correct', async t => {
          t.assert.strictEqual(calc('--bar * --foo * --bar'), -250)
        })
      })
    })
  })
})
