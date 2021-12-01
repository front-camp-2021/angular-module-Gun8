import {Product} from "./product-interface";

export interface FilteredBy{
  filters: Product[],
  sliders: Product[],
  search: Product[]
}
