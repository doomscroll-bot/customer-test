export function withTimeout(promise, ms) {
  let timer
  const timeout = new Promise((_, reject) => { timer = setTimeout(() => reject(new Error(`timed out after ${ms} ms`)), ms) })
  return Promise.race([promise, timeout]).finally(() => clearTimeout(timer))
}
