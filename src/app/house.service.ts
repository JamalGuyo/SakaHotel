import { Injectable } from '@angular/core';
import { HouseModel } from './house.model';

@Injectable({
  providedIn: 'root'
})
export class HouseService {
  constructor() {}

  getHouses(): HouseModel[] {
    return [
      {
        image: '../assets/david-veksler-VW5YwCYbPyk-unsplash.jpg',
        street: '76 Street',
        address: 'Westlands',
        price: 1250,
        lat: 1.2675,
        lng: 36.812,
        label: 'A'
      },
      {
        image: '../assets/evelyn-paris-XJnP4L958ds-unsplash.jpg',
        street: '22 Street',
        address: 'Kilimani',
        price: 1450,
        lat: 1.2893,
        lng: 36.7869,
        label: 'B'
      },
      {
        image: '../assets/flo-pappert-kspRwqFxOms-unsplash.jpg',
        street: '33 Street',
        address: 'Westlands',
        price: 1350,
        lat: 1.2599,
        lng: 36.8179,
        label: 'C'
      },
      {
        image: '../assets/gus-ruballo-h5QNclJUiA8-unsplash.jpg',
        street: '86 Street',
        address: 'Ngara',
        price: 1150,
        lat: 1.2781,
        lng: 36.8304,
        label: 'D'
      },
      {
        image: '../assets/gustavo-zambelli-nEvzSXBIhiU-unsplash.jpg',
        street: '76 Street',
        address: 'Muthaiga',
        price: 1500,
        lat: 1.2501,
        lng: 36.8213,
        label: 'E'
      },
      {
        image:
          '../assets/ialicante-mediterranean-homes-2d4lAQAlbDA-unsplash.jpg',
        street: '53 Street',
        address: 'Runda',
        price: 1750,
        lat: 1.2156,
        lng: 36.815,
        label: 'F'
      },
      {
        image: '../assets/irina-murza-PJMbzWAz26M-unsplash.jpg',
        street: '98 Street',
        address: 'Karen',
        price: 1650,
        lat: 1.3169,
        lng: 36.6903,
        label: 'G'
      },
      {
        image: '../assets/jesse-roberts-561igiTyvSk-unsplash.jpg',
        street: '76 Street',
        address: 'Runda',
        price: 1550,
        lat: 1.2156,
        lng: 36.815,
        label: 'H'
      }
    ];
  }
}
