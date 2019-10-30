import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HouseModel } from '../house.model';
import { HouseService } from '../house.service';

@Component({
  selector: 'app-house-search',
  templateUrl: './house-search.component.html',
  styleUrls: ['./house-search.component.scss']
})
export class HouseSearchComponent implements OnInit {
  @Output() sendSearchText: EventEmitter<string> = new EventEmitter<string>();
  listFilter = '';
  constructor() {}

  ngOnInit() {
    console.log();
  }

  onSearch() {
    this.sendSearchText.emit(this.listFilter);
  }
}
