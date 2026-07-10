export function useScrollLock() {
  let previousOverflow = ''

  function lock() {
    previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
  }

  function unlock() {
    document.body.style.overflow = previousOverflow || ''
    previousOverflow = ''
  }

  return { lock, unlock }
}
