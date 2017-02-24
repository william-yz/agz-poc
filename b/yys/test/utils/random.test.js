import { satisfy } from '../../src/utils/random'

test('satisfy()', () => {
  let s = satisfy('10%')
  expect(s === true || s === false).toBe(true)
})