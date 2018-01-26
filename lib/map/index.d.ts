import { 
  CurriedFunction1,
  CurriedFunction2,
} from '../../misc/types/fn';

export default function map<T1, T2>(): CurriedFunction2mapper<CurriedFunction1<T1, T2>, T1[], T2[]>;
