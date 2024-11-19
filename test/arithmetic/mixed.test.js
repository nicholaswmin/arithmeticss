import test from 'node:test'
import calc from '../../index.js'
  
// @NOTE: 
// - Do test just 1 mixed function for each operation type.
// - Do stay consistent in the pattern you choose throughout.

/* foo, bar.. values:
'--foo': '-10', '--bar': '-5', '--baz': '0', 
'--qux': '5', '--quux': '10'
*/

test('Mixed operation types', async t => {
  await t.test('foo + bar - baz * qux / quux', async t => {
    const result = calc('--foo + --bar - --baz * --qux / --quux')
    
    await t.test('correct', async t => {
      t.assert.strictEqual(result, 15)
    })
  })

  await t.test('foo - bar + baz * qux / quux', async t => {
    const result = calc('--foo - --bar + --baz * --qux / --quux')
  
    await t.test('correct', async t => {
      t.assert.strictEqual(result, 5)
    })
  })

  
  await t.test('foo * bar + baz - qux / quux', async t => {
    const result = calc('--foo * --bar + --baz - --qux / --quux')
  
    await t.test('correct', async t => {
      t.assert.strictEqual(result, 49.5)
    })
  })

  await t.test('foo / bar * baz + qux - quux', async t => {
    const result = calc('--foo / --bar * --foo + --bar - --foo')
  
    await t.test('correct', async t => {
      t.assert.strictEqual(result, 15)
    })
  })
})
