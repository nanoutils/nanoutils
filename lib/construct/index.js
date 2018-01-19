import constructN from '../constructN'

export default function construct(constructor) {
  return constructN(constructor.length, constructor)
}
