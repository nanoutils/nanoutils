declare function Mapper<T1, T2>(t1: T1): T2;
export default function map<T1, T2>(mapper: Mapper<T1, T2>, arr: T1[]): T2[]
