declare function filter<T, S extends T>(arr: T[], callback: (val: T, idx: number, arr: T[]) => val is S): S[];
declare function filter<T>(arr: T[], callback: (val: T, idx: number, arr: T[]) => unknown): T[];
export default filter;
