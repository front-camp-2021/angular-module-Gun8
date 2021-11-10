import { Component, OnInit, Input } from '@angular/core';
import {filterField} from '../side-bar/side-bar';

@Component({
  selector: 'app-filters-list',
  templateUrl: './filters-list.component.html',
  styleUrls: ['./filters-list.component.scss']
})
export class FiltersListComponent implements OnInit {
  @Input() public filter : Array<filterField> = [];
  @Input() public isLastChild : boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  getTitle(){
    const title = this.filter[0].value.split("=")[0];
    return title.charAt(0).toUpperCase() + title.slice(1);
  }

}
