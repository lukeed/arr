export type Reducer<T, I> = (
	previous: I,
	current: T,
	index: number,
	arr: T[]
) => I;

export default function <ArrayItemType, ReturnType = ArrayItemType[]>(
	arr: ArrayItemType[],
	callback: Reducer<ArrayItemType, ReturnType>,
	initialValue?: ReturnType
): ReturnType;
