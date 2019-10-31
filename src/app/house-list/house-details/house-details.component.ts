import { Component, OnInit } from '@angular/core';
import { HouseModel } from 'src/app/house.model';

@Component({
  selector: 'app-house-details',
  templateUrl: './house-details.component.html',
  styleUrls: ['./house-details.component.scss']
})
export class HouseDetailsComponent implements OnInit {
  hotel: HouseModel;
  zoom: 15;
  constructor() {}

  ngOnInit() {
    this.hotel = {
      image:
        'https://lh6.googleusercontent.com/proxy/0WL-95rasOV41OLof0j4YCtMzdFkDe8fMtU-2FV-ZZfdt4oy5OAQSMQ-gzMUuATTNvcnFsnc6eadVGZKxu44qBJX63Bp8NnTGGkQHhm8cRP5qux7lI-qjEYGzRFFakUuMsFCyutNtHJq-sPLiOpGc1utWBQrOA=w427-h240-k-no',
      street: 'Ngara',
      address: 'Sirona Hotel',
      price: 4646,
      rating: 2.2,
      lat: -1.2708726,
      lng: 36.8153343,
      label: '2.2'
    };
  }
}
