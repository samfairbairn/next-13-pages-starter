function clamp(min, input, max) {
  return Math.max(min, Math.min(input, max))
}

function mapRange(in_min, in_max, input, out_min, out_max) {
  return ((input - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}

function lerp(start, end, amt) {
  return (1 - amt) * start + amt * end
}

function truncate(value, decimals) {
  return parseFloat(value.toFixed(decimals))
}

function wrap(min, max, v) {
  const rangeSize = max - min
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min
}

/*
 *  More from THREE.js MathUtils
 */

// http://www.rorydriscoll.com/2016/03/07/frame-rate-independent-damping-using-lerp/
function damp(start, end, lambda, delta) {
  return lerp(start, end, 1 - Math.exp(-lambda * delta))
}

// Random integer from <low, high> interval
function randInt(low, high) {
  return low + Math.floor(Math.random() * (high - low + 1))
}

// Random float from <low, high> interval
function randFloat(low, high) {
  return low + Math.random() * (high - low)
}

// Random float from <-range/2, range/2> interval
function randFloatSpread(range) {
  return range * (0.5 - Math.random())
}

// Deterministic pseudo-random float in the interval [ 0, 1 ]
function seededRandom(s) {
  if (s !== undefined) _seed = s
  // Mulberry32 generator
  let t = (_seed += 0x6d2b79f5)
  t = Math.imul(t ^ (t >>> 15), t | 1)
  t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296
}

function degToRad(degrees) {
  return degrees * DEG2RAD
}

function radToDeg(radians) {
  return radians * RAD2DEG
}

const Maths = {
  lerp,
  clamp,
  mapRange,
  truncate,
  damp,
  randInt,
  randFloat,
  randFloatSpread,
  seededRandom,
  degToRad,
  radToDeg,
  wrap,
}

export {
  lerp,
  clamp,
  mapRange,
  truncate,
  damp,
  randInt,
  randFloat,
  randFloatSpread,
  seededRandom,
  degToRad,
  radToDeg,
  wrap,
}
export default Maths
