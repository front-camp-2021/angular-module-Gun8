import { Component, OnInit, Input } from '@angular/core';
import {filterField} from '../side-bar/side-bar';

@Component({
  selector: 'app-filters-list-item',
  templateUrl: './filters-list-item.component.html',
  styleUrls: ['./filters-list-item.component.scss']
})
export class FiltersListItemComponent implements OnInit {
  @Input() public item : filterField = {value: '', title: ''};
  public checked = false;
  constructor() { }

  ngOnInit(): void {
  }

  getFilterName(){
    return this.item.value.split("=")[0];
  }

  getItemName(){
    return this.item.value.split("=")[1];
  }

  onChange(){
    this.checked = !this.checked;
  }
}
