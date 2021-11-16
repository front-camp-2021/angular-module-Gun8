import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public pagination = {
    currentPage: 1,
    totalPages: 10,
    pageLimit: 12
  };

  changePage(num: number){
    this.pagination = {
      ...this.pagination,
      currentPage: num
    }
  }
}
