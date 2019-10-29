import { Injectable } from '@angular/core';
import { HouseModel } from './house.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HouseService {
  constructor() {}

  getHouses(): Observable<HouseModel[]> {
    return of([
      {
        image: '../assets/mr-autthaporn-pradidpong-EFV7e9r7Dfg-unsplash.jpg',
        street: '76th Street',
        address: 'Westlands',
        price: 1250,
        capacity: '1 bedroom',
        lat: 1.2675,
        lng: 36.812,
        label: 'A'
      },
      {
        image: '../assets/evelyn-paris-XJnP4L958ds-unsplash.jpg',
        street: '22nd Street',
        address: 'Kilimani',
        price: 1450,
        capacity: '1 bedroom',
        lat: 1.2893,
        lng: 36.7869,
        label: 'B'
      },
      {
        image: '../assets/flo-pappert-kspRwqFxOms-unsplash.jpg',
        street: '33rd Street',
        address: 'Westlands',
        price: 1350,
        capacity: '1 bedroom',
        lat: 1.2599,
        lng: 36.8179,
        label: 'C'
      },
      {
        image: '../assets/gus-ruballo-h5QNclJUiA8-unsplash.jpg',
        street: '86th Street',
        address: 'Ngara',
        price: 1150,
        capacity: '1 bedroom',
        lat: 1.2781,
        lng: 36.8304,
        label: 'D'
      },
      {
        image: '../assets/gustavo-zambelli-nEvzSXBIhiU-unsplash.jpg',
        street: '76th Street',
        address: 'Muthaiga',
        price: 1500,
        capacity: '1 bedroom',
        lat: 1.2501,
        lng: 36.8213,
        label: 'E'
      },
      {
        image:
          '../assets/ialicante-mediterranean-homes-2d4lAQAlbDA-unsplash.jpg',
        street: '53rd Street',
        address: 'Runda',
        price: 1750,
        capacity: '1 bedroom',
        lat: 1.2156,
        lng: 36.815,
        label: 'F'
      },
      {
        image: '../assets/irina-murza-PJMbzWAz26M-unsplash.jpg',
        street: '98th Street',
        address: 'Karen',
        price: 1650,
        capacity: '1 bedroom',
        lat: 1.3169,
        lng: 36.6903,
        label: 'G'
      },
      {
        image: '../assets/jesse-roberts-561igiTyvSk-unsplash.jpg',
        street: '76th Street',
        address: 'Runda',
        price: 1550,
        capacity: '1 bedroom',
        lat: 1.2156,
        lng: 36.815,
        label: 'H'
      }
    ]);
  }
}
