import { computeRewardPoints } from './computeRewardPoints'

it('should return 0 points under  the first threshold', () => {
  expect(computeRewardPoints(50)).toBe(0)
})

it('should return 1 point per dollar at the first threshold', () => {
  expect(computeRewardPoints(51)).toBe(1)
  expect(computeRewardPoints(100)).toBe(50)
})

it('should return additionally 2 points per 1 dollar at the second threshold', () => {
  expect(computeRewardPoints(101)).toBe(52)
})

it('should use custom options', () => {
  const options = {
    firstThreshold: 20,
    secondThreshold: 40,
    secondThresholdMultiplier: 4,
  }
  expect(computeRewardPoints(50, options)).toBe(60)
})
