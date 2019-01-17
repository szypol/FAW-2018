import { Component, OnInit } from '@angular/core';
import { ListItem } from './interfaces/list-item.interface';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private items: Array<ListItem> = [
    { brand: 'brand 1', product_id: 1, product_name: 'name1' },
    { brand: 'brand 2', product_id: 2, product_name: 'name2' },
    { brand: 'brand 3', product_id: 3, product_name: 'name3' },
    { brand: 'brand 4', product_id: 4, product_name: 'name4' },
  ];

  constructor(
    private appService: AppService,
  ) {}

  public ngOnInit(): void {
    this.appService.setItems(this.items);
  }
}
