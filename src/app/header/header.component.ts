import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', '../styles/colors.component.scss','../styles/utils.component.scss']
})
export class HeaderComponent implements OnInit {
  public pagesHistory = ['eCommerce','Electronics'];
  constructor() { }

  ngOnInit(): void {
  }

  getCurrentPage(){
    return this.pagesHistory.slice(this.pagesHistory.length - 1, this.pagesHistory.length);
  }

  getPageHistoryWithoutCurrent(){
    return this.pagesHistory.slice(0,this.pagesHistory.length - 1);
  }

}
