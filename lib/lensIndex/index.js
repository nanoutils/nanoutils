import lens from '../lens'

export default function lensIndex(index) {
  return lens(
    array => array[index],
    (newValue, array) => { array[index] = newValue }
  )
}
