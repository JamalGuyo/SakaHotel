import { Component, OnInit, OnDestroy, TemplateRef } from '@angular/core';
import { HouseService } from '../house.service';
import { Subscription } from 'rxjs';
import { HouseModel } from '../house.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gmap',
  templateUrl: './gmap.component.html',
  styleUrls: ['./gmap.component.scss']
})
export class GmapComponent implements OnInit, OnDestroy {
  houses: HouseModel[];
  sub: Subscription;
  lat = -1.285571;
  lng = 36.8147777;
  zoom = 15;

  constructor(private houseService: HouseService, private router: Router) {}

  ngOnInit() {
    this.sub = this.houseService.getHouses().subscribe({
      next: houses => (this.houses = houses)
    });
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  openHotelDetails(h): void {
    this.router.navigate(['/hotel-detail']);
    this.houseService.selectedHouse = h;
  }
}
