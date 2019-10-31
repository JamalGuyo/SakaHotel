import { Component, OnInit, OnDestroy } from '@angular/core';
import { HouseService } from '../house.service';
import { HouseModel } from '../house.model';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-house-list',
  templateUrl: './house-list.component.html',
  styleUrls: ['./house-list.component.scss']
})
export class HouseListComponent implements OnInit, OnDestroy {
  houses: HouseModel[];
  sub: Subscription;
  searchText = '';

  constructor(private houseService: HouseService, private router: Router) {}

  ngOnInit(): void {
    this.sub = this.houseService.getHouses().subscribe({
      next: houses => (this.houses = houses),
      error: err => console.log(err)
    });
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  onSearch(data) {
    this.searchText = data;
  }
  openHotelDetails(h): void {
    this.router.navigate(['/hotel-detail']);
    this.houseService.selectedHouse = h;
  }
}
