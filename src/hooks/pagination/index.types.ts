export interface UsePaginationProps<T> {
  data: T[] | undefined | null;
  pageSize: number;
  initialPage?: number;
}
