export interface Filters {
  category: Array<FilterField>;
  brand: Array<FilterField>;
}

export interface FilterField {
  value: string;
  title: string;
  checked: boolean;
}
