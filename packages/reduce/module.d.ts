export type Reducer<T> = (previous: T, current: T, index: number, arr: T[]) => T;
export default function<T>(arr: T[], callback: Reducer<T>, initialValue?: T): T;
