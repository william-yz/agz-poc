export default function (n, cb) {
  for (let i = 0; i < n; i++) {
    if (typeof cb === 'function') {
      if (cb(i) === false) {
        break
      }
    }
  }
}