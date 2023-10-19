/**
 * Desc: this function helps to find y-coordinates of a point M (x, y) given x-coordinate already on a circle
 * @param x x-coordinate of M
 * @param r radius of the circle
 * @returns
 */
export const findM = ({ x, r, centerPoint }: Param): Result => {
  const canHaveValue = centerPoint.x - r <= x && x <= centerPoint.x + r
  if (canHaveValue) {
    const y1 =
      Math.sqrt(r ** 2 - Math.pow(x - centerPoint.x, 2)) + centerPoint.y

    const y2 =
      -Math.sqrt(r ** 2 - Math.pow(x - centerPoint.x, 2)) + centerPoint.y
    return { val1: y1, val2: y2 }
  }

  return undefined
}
