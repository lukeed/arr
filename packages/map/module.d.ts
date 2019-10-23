export default function<T, U>(arr: T[], callback: (val: T, idx: number, arr: T[]) => U): U[];
