import lens from '../lens'

export default function lensIndex(index) {
  return lens(
    function(array) {
      return array[index]
    },
    function(newValue, array) {
      array[index] = newValue
    }
  )
}
