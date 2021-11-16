import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {FilterField} from '../side-bar/side-bar';

@Component({
  selector: 'app-filters-list-item',
  templateUrl: './filters-list-item.component.html',
  styleUrls: ['./filters-list-item.component.scss']
})
export class FiltersListItemComponent implements OnInit {
  @Input() public filterItem : FilterField  = {value: '', title: '', checked: false};
  @Output() filterItemChange : EventEmitter<FilterField> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  getFilterName(){
    return this.filterItem.value.split("=")[0];
  }

  getItemName(){
    return this.filterItem.value.split("=")[1];
  }

  onFilterItemChange(){
    this.filterItemChange.emit({
      ...this.filterItem,
      checked: !this.filterItem.checked
    });
  }
}
