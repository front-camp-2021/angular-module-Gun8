export interface Filters {
  category: Array<filterField>;
  brand: Array<filterField>;
}

export interface filterField {
  value: string,
  title: string
}
