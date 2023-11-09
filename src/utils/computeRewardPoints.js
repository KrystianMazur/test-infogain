const defaultOptions = {
  firstThreshold: 50,
  secondThreshold: 100,
  secondThresholdMultiplier: 2,
}

export const computeRewardPoints = (amount, options = defaultOptions) => {
  let points = 0
  const {
    firstThreshold,
    secondThreshold,
    secondThresholdMultiplier
  } = options

  if (amount > firstThreshold) {
    points += Math.min(amount, secondThreshold) - firstThreshold
  }
  if (amount > secondThreshold) {
    points += (amount - secondThreshold) * secondThresholdMultiplier
  }

  return points
}
