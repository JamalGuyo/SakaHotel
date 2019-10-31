import { Component, OnInit } from '@angular/core';
import { HouseModel } from 'src/app/house.model';
import { HouseService } from 'src/app/house.service';

@Component({
  selector: 'app-house-details',
  templateUrl: './house-details.component.html',
  styleUrls: ['./house-details.component.scss']
})
export class HouseDetailsComponent implements OnInit {
  hotel: HouseModel;
  zoom: 15;
  constructor(private houseService: HouseService) {}

  ngOnInit() {
    this.hotel = this.houseService.selectedHouse || {
      image:
        'https://lh5.googleusercontent.com/p/AF1QipP0lii4gnbubO4q0oKj5yuStaPsTY8d116frlPk=w408-h305-k-no',
      street: 'Milimani',
      address: 'Sarova Panafric',
      price: 12401,
      rating: 4.4,
      lat: -1.2900952,
      lng: 36.7948948,
      label: '4.4'
    };
  }
}
