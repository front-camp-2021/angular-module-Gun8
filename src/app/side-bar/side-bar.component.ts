import {Component, Input, OnInit, OnChanges} from '@angular/core';
import {Filters, FilterField} from "../../interfaces/filters-interfaces";
import {Sliders, Slider} from '../../interfaces/sliders-interfaces';
import {Product} from "../../interfaces/product-interface";
import {AppService} from "../app.service";

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})

export class SideBarComponent implements OnInit, OnChanges {

  public filters : Filters = {
    category: [],
    brand: []
  };

  public sliders!: Sliders;

  @Input() products!: Product[];

  constructor(private service : AppService) { }

  ngOnChanges(){
    const prices = this.products.map(product => product.price);

    this.sliders = {
      price: {
        min: Math.min(...prices),
        max: Math.max(...prices),
        formatValue: value => value + '₴',
        selected: {
          from: Math.min(...prices),
          to: Math.max(...prices),
        },
        precision: 0,
        filterName: 'Price'
      }
    }
  }

  ngOnInit(): void {
    this.service.getCategories()
      .subscribe(data => this.changeCategories(data));

    this.service.getBrands()
      .subscribe(data => this.changeBrands(data));
  }

  changeCategories(data: string[]){
    const categories = this.prepareFilters(data, 'categories');

    this.filters = {
      ...this.filters,
      category: categories
    }
  }

  changeBrands(data: string[]){
    const brands = this.prepareFilters(data, 'brands');

    this.filters = {
      ...this.filters,
      brand: brands
    }
  }

  prepareFilters(arr : string[], prefix: string){
    return arr.map(item => {
      return {
        value: `${prefix}=` + item.toLowerCase().split(' ').join('_'),
        title: item,
        checked: false
      }
    });
  };

  reset(){
    const thumbLeft = document.querySelectorAll('.range-slider__thumb-left');
    const thumbRight = document.querySelectorAll('.range-slider__thumb-right');
    const progress = document.querySelectorAll('.range-slider__progress');

    this.resetFilters();
    this.resetSliders();

    Object.values(this.sliders).map((slider,i) => {
      (<HTMLSpanElement>thumbLeft.item(i)).style.left = (<HTMLSpanElement>progress.item(i)).style.left = 0 + 'px';
      (<HTMLSpanElement>thumbRight.item(i)).style.right = (<HTMLSpanElement>progress.item(i)).style.right = 0 + 'px';
    });
  }

  resetFilters(){
    const newFilters = {...this.filters};

    for (const [key, value] of Object.entries(newFilters)) {
      newFilters[(<keyof Filters>key)] = (<FilterField[]>value).map(item => {
        return {
          ...item,
          checked: false
        }
      });
    }

    this.filters = {...newFilters};
  }

  resetSliders(){
    const newSliders = {...this.sliders};

    for (const [key, value] of Object.entries(newSliders)) {
      newSliders[(<keyof Sliders>key)] = {
        ...newSliders[(<keyof Sliders>key)],
        selected: {
          from: value.min,
          to: value.max
        }
      }
    }

    this.sliders = {...newSliders};
  }

  onSliderChange(slider: Slider){
    const key = Object.keys(this.sliders)
                      .find(key => this.sliders[(<keyof Sliders>key)].filterName === slider.filterName);

    this.sliders = {
      ...this.sliders,
      [(<keyof Sliders>key)]: slider
    }
  }

  onFilterChange(item: FilterField[]){
    const key = Object.keys(this.filters)
                      .find(key => this.filters[(<keyof Filters>key)][0].title === item[0].title);

    this.filters = {
      ...this.filters,
      [(<keyof Filters>key)]: item
    }
  }

}
