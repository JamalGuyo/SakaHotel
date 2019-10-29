import { Component, OnInit, OnDestroy } from '@angular/core';
import { HouseService } from '../house.service';
import { Subscription } from 'rxjs';
import { HouseModel } from '../house.model';

@Component({
  selector: 'app-gmap',
  templateUrl: './gmap.component.html',
  styleUrls: ['./gmap.component.scss']
})
export class GmapComponent implements OnInit, OnDestroy {
  houses: HouseModel[];
  sub: Subscription;
  lat = 1.2921;
  lng = 36.8219;

  constructor(private houseService: HouseService) {}

  ngOnInit() {
    this.sub = this.houseService.getHouses().subscribe({
      next: houses => (this.houses = houses)
    });
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`);
  }
}
