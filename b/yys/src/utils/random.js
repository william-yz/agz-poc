export function nextInt (n) {
  return Math.floor(Math.random() * n)
}

export function satisfy (n) {
  if (typeof n === 'string' && n.trim().endsWith('%')) {
    n = parseFloat(n) * 100
  }
  return n > nextInt(10000)
}

export function oneOf (arr) {
  return arr[nextInt(arr.length)]
}
