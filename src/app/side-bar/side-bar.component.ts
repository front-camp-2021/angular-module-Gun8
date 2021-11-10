import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  public filters = {
    category:
      [
        {
          value: 'category=cell_phones',
          title: 'Cell Phones',
        },
        {
          value: 'category=computer_tablets',
          title: 'Computers & Tablets',
        },
        {
          value: 'category=cell_phones_accessories',
          title: 'Cell Phone Accessories',
        },
        {
          value: 'category=appliances',
          title: 'Appliances',
        },
        {
          value: 'category=audio',
          title: 'Audio',
        },
      ],
      brand: [
        {
          value: 'brand=insigni',
          title: 'Insigni',
        },
        {
          value: 'brand=samsung',
          title: 'Samsung',
        },
        {
          value: 'brand=apple',
            title: 'Apple',
        },
      ]
  };
  constructor() { }

  ngOnInit(): void {
  }

  getObjFields(obj: object){
    return Object.keys(obj);
  }

}
