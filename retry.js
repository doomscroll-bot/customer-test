export async function withRetry(fn, attempts = 3) {
  for (let i = 1; ; i++) {
    try { return await fn() } catch (error) { if (i >= attempts) throw error }
  }
}
