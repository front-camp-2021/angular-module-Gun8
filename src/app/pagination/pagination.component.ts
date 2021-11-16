import {Component, Input, OnInit, AfterViewInit, EventEmitter, Output} from '@angular/core';
import Pagination from "../../interfaces/pagination-interface";

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit, AfterViewInit {
  @Input() pagination!: Pagination;
  @Output() changePage = new EventEmitter<number>();
  public pages: number[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.pages = Array(this.pagination.totalPages).fill(0).map((x,i)=>i+1);
  }

  toPrevPage(){
    if(this.pagination.currentPage > 1){
      window.scrollTo(0, 0);
      this.changePage.emit(this.pagination.currentPage - 1);
    }
  };

  toNextPage(){
    if(this.pagination.currentPage < this.pagination.totalPages){
      window.scrollTo(0, 0);
      this.changePage.emit(this.pagination.currentPage + 1);
    }
  };

  toPage(num: number){
    if(num !== this.pagination.currentPage){
      window.scrollTo(0, 0);
      this.changePage.emit(num);
    }
  };


}
