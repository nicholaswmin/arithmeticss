import test from 'node:test'
import calc from '../../index.js'
  
// @NOTE: 
// note: this is actually an integration test of 2 things: 
// tokenizer and the calculator so don't split hairs on either here.
// @REVIEW
// - needs a more formal method of testing here. 
// 
// - Do write tests/assertion first, then run it and check.
// - Do test for correctness of results, i.e is `90` or `50` etc..
// - Do test order of operations, once per logical group of tests.
// - Do test up to arity 3 for each type
// - Do test same variable for all operands 
//  
// - Dont derive assertions from results, you might be asserting a wrong result.
// - Dont test edge cases or anything that (we know) might throw. 
//   Assume user has perfect knowledge of documentation.
// - Dont test `typeof result === number` more than once 
//   per operation type/suite

/* foo, bar.. values:
'--foo': '-10', '--bar': '-5', '--baz': '0', 
'--qux': '5', '--quux': '10'
*/

test('Uniform operation type', async t => {
  t.test('Addition', async t => {
    await t.test('returns a number', async t => {
      const type = typeof calc('--foo + --bar')
      t.assert.strictEqual(type, 'number')
    })
  
    await t.test('arity 2', async t => {
      await t.test('correct', async t => {
        t.assert.strictEqual(calc('--foo + --bar'), 15)
      })
      
      await t.test('reverse operand order', async t => {
        await t.test('correct', async t => {
          t.assert.strictEqual(calc('--bar + --foo'), 15)
        })
      })
    })
    
    await t.test('arity 3', async t => {
      await t.test('correct', async t => {
        t.assert.strictEqual(calc('--foo + --bar + --foo'), 25)
      })
      
      await t.test('reverse operand order', async t => {
        await t.test('correct', async t => {
          t.assert.strictEqual(calc('--bar + --foo + --bar'), 20)
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
        t.assert.strictEqual(calc('--foo - --bar'), 5)
      })
      
      await t.test('reverse operand order', async t => {
        await t.test('correct', async t => {
          t.assert.strictEqual(calc('--bar - --foo'), -5)
        })
      })
    })
    
    await t.test('arity 3', async t => {
      await t.test('correct', async t => {
        t.assert.strictEqual(calc('--foo - --bar - --foo'), -5)
      })
      
      await t.test('reverse operand order', async t => {
        await t.test('correct', async t => {
          t.assert.strictEqual(calc('--bar - --foo - --bar'), -10)
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
        t.assert.strictEqual(calc('--foo * --bar * --foo'), 500)
      })
      
      await t.test('reverse operand order', async t => {
        await t.test('correct', async t => {
          t.assert.strictEqual(calc('--bar * --foo * --bar'), 250)
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
        t.assert.strictEqual(calc('--foo * --bar * --foo'), 500)
      })
      
      await t.test('reverse operand order', async t => {
        await t.test('correct', async t => {
          t.assert.strictEqual(calc('--bar * --foo * --bar'), 250)
        })
      })
    })
  })
})
