import lens from '../lens'

export default (index) =>
  lens(
    (array) => array[index],
    (newValue, array) => {
      array[index] = newValue
    },
  )
