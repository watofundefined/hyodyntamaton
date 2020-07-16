/*
 * Use inside arr.filter
 * Example: myArr.filter(unique<MyType>('keyInObj'))
 */
export default function unique<T>(key: keyof T) {
  const acc: T[] = []
  return function _unique(item: T): boolean {
    if (acc.some((i) => i[key] === item[key])) return false

    acc.push(item)
    return true
  }
}
