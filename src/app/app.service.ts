import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";

import {Product} from '../interfaces/product-interface';

const URL = 'http://localhost:3001';
const PRODUCTS_PATH = '/products';
const CATEGORIES_PATH = '/categories';
const BRANDS_PATH = '/brands';

@Injectable()
export class AppService {
  constructor(private http: HttpClient){}

  getProducts() : Observable<Product[]>{
    return this.http.get<Product[]>(URL + PRODUCTS_PATH)
  }

  getCategories() : Observable<string[]>{
    return this.http.get<string[]>(URL + CATEGORIES_PATH)
  }

  getBrands() : Observable<string[]>{
    return this.http.get<string[]>(URL + BRANDS_PATH)
  }
}
