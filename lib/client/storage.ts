function get<T>(key: string): T | null {
  if (typeof window === 'undefined') return null

  const val = window.localStorage.getItem(key)

  try {
    return JSON.parse(val)
  } catch (_) {
    return val as any
  }
}

function set(key: string, val: any): void {
  if (typeof window === 'undefined') return

  if (!key || val == null) {
    throw new Error(`Invalid params, key: '${key}', val: '${val}'`)
  }

  window.localStorage.setItem(key, typeof val === 'object' ? JSON.stringify(val) : val)
}

export default { get, set }
