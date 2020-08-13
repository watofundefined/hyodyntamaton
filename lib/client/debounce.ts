export default function debounce(fn, ms = 300) {
  let timeout: number

  return function (...args) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const self = this
    window.clearTimeout(timeout)

    timeout = window.setTimeout(() => {
      window.clearTimeout(timeout)
      return fn.apply(self, args)
    }, ms)
  }
}
