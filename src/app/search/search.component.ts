import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FilteredBy} from "../../interfaces/filtered-by-interface";
import {Product} from "../../interfaces/product-interface";
import {AppService} from "../app.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  private _timer!: number;
  public products: Product[] = [];

  @Input() filteredBy!: FilteredBy;
  @Output() changeFilteredBy = new EventEmitter<FilteredBy>();

  constructor(private service : AppService) { }

  ngOnInit(): void {
    this.service.getProducts()
      .subscribe(data => this.products = data);

  }

  handleInput(func:() => void, delay: number){
      func = func.bind(this);

      if(this._timer) clearTimeout(this._timer);
      this._timer = setTimeout(func,delay);
  };

  updateSearchValue(){
    const input: HTMLInputElement = document.querySelector('.item-list-search input')!;

    if(!this.products) return;

    this.changeFilteredBy.emit({
      ...this.filteredBy,
      search: this.products.filter(product => product.title.toLowerCase().includes(input.value.toLowerCase()))
    })
  };

}
