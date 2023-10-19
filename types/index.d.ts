interface Param {
  x: number
  r: number
  centerPoint: { x: number; y: number }
}

interface Result {
  val1: number
  val2: number
}

declare module 'find-m' {
  export function findM(param: Param): Result | undefined
}
