import {Component, OnInit, Input, Output,EventEmitter} from '@angular/core';
import {FilterField} from '../../interfaces/filters-interfaces';

@Component({
  selector: 'app-filters-list',
  templateUrl: './filters-list.component.html',
  styleUrls: ['./filters-list.component.scss']
})

export class FiltersListComponent implements OnInit {
  @Input() public filter : FilterField[] = [];
  @Input() public isLastChild : boolean = false;
  @Output() filterChange = new EventEmitter<FilterField[]>();

  constructor() { }

  ngOnInit(): void {
  }

  getTitle(){
    const title = this.filter[0].value.split("=")[0];
    return title.charAt(0).toUpperCase() + title.slice(1);
  }

  onFilterChange(item: FilterField){
    this.filterChange.emit(
      this.filter.map(filterItem => item.title === filterItem.title ? item : filterItem)
    );
  }
}
