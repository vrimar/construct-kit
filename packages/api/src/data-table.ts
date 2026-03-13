export type DataTableFilters = Record<string, string[] | undefined>;

export type DataTableSortType = "asc" | "desc" | "";

export interface DataTableParams extends Record<string, any> {
  page: number;
  pageSize: number;
  orderBy: string;
  orderType: DataTableSortType;
  filters: DataTableFilters;
}
