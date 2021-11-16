import { Component, OnInit } from '@angular/core';
import {Filters, FilterField} from "../../interfaces/filters-interfaces";
import {Sliders, Slider} from '../../interfaces/sliders-interfaces';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})

export class SideBarComponent implements OnInit {

  public filters : Filters = {
    category:
      [
        {
          value: 'category=cell_phones',
          title: 'Cell Phones',
          checked: false
        },
        {
          value: 'category=computer_tablets',
          title: 'Computers & Tablets',
          checked: false
        },
        {
          value: 'category=cell_phones_accessories',
          title: 'Cell Phone Accessories',
          checked: false
        },
        {
          value: 'category=appliances',
          title: 'Appliances',
          checked: false
        },
        {
          value: 'category=audio',
          title: 'Audio',
          checked: false
        },
      ],
      brand: [
        {
          value: 'brand=insigni',
          title: 'Insigni',
          checked: false
        },
        {
          value: 'brand=samsung',
          title: 'Samsung',
          checked: false
        },
        {
          value: 'brand=apple',
          title: 'Apple',
          checked: false

        },
      ]
  };

  public sliders : Sliders = {
    price: {
      min: 53,
      max: 83000,
      formatValue: (value) => value + '₴',
      selected: {
        from: 53,
        to: 83000
      },
      precision: 0,
      filterName: 'Price'
    }
  };
  constructor() { }

  ngOnInit(): void {
  }

  isLastChild(i: number){
    return i === Object.entries(this.filters).length - 1;
  }

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
