export default function wrapFunctionality<T extends (...args: any[]) => any>(
  fnName: string,
  fn: T
): T | void {
  if (fnName in window) {
    return fn()
  }
}
