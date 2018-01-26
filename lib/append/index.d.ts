import { CurriedFunction2 } from '../../misc/types/fn';

export default function append<T>(): CurriedFunction2<T, T[], T[]>