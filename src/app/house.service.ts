import { Injectable } from '@angular/core';
import { HouseModel } from './house.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HouseService {
  public selectedHouse: HouseModel;

  constructor() {}

  getHouses(): Observable<HouseModel[]> {
    return of([
      {
        image:
          'https://lh5.googleusercontent.com/p/AF1QipP0lii4gnbubO4q0oKj5yuStaPsTY8d116frlPk=w408-h305-k-no',
        street: 'Milimani',
        address: 'Sarova Panafric',
        price: 12401,
        rating: 4.4,
        lat: -1.2900952,
        lng: 36.7948948,
        label: '4.4'
      },
      {
        image:
          'https://lh6.googleusercontent.com/proxy/0WL-95rasOV41OLof0j4YCtMzdFkDe8fMtU-2FV-ZZfdt4oy5OAQSMQ-gzMUuATTNvcnFsnc6eadVGZKxu44qBJX63Bp8NnTGGkQHhm8cRP5qux7lI-qjEYGzRFFakUuMsFCyutNtHJq-sPLiOpGc1utWBQrOA=w427-h240-k-no',
        street: 'Ngara',
        address: 'Sirona Hotel',
        price: 4646,
        rating: 2.2,
        lat: -1.2708726,
        lng: 36.8153343,
        label: '2.2'
      },
      {
        image:
          'https://lh5.googleusercontent.com/p/AF1QipOdgUIQYnMqK7wNtS_48AeVFtJ-iQ6JGW9NDpUL=w408-h293-k-no',
        street: 'Westlands',
        address: 'Villa Rosa Kempinski',
        price: 23789,
        rating: 4.9,
        lat: -1.2718144,
        lng: 36.8085497,
        label: '5.0'
      },
      {
        image:
          'https://images.trvl-media.com/hotels/24000000/23460000/23451900/23451840/cbcd97b4_z.jpg',
        street: 'Ngara',
        address: 'Southern Blue',
        price: 2500,
        rating: 2.2,
        lat: -1.2772633,
        lng: 36.8136137,
        label: '2.2'
      },
      {
        image:
          'https://lh3.googleusercontent.com/proxy/u0pDyweJ2_7ctTXpQVLql5j8eLIkvea_ICEOmXAP-GyzrK5Pl5NH5ucQdN9cbL8aUW7OU6PuSSo2UmSxUYTao4yKXI9XxQTyti8ZXuhlEnENuEzRTXrzox9GYdkgg5BRHTGEjIzebv7fV93DLzmzTEi-VZ6azQ=w408-h269-k-no',
        street: 'Ngara',
        address: 'Hotel Boulevard',
        price: 10833,
        rating: 3.1,
        lat: -1.2751626,
        lng: 36.8112593,
        label: '3.1'
      },
      {
        image:
          'https://lh5.googleusercontent.com/p/AF1QipMDlIVazgCTqwmWB1uC_geaU0wCjH9W59hHJPQa=w426-h240-k-no',
        street: 'UpperHill',
        address: 'Radisson Blue',
        price: 16530,
        rating: 4.5,
        lat: -1.2788508,
        lng: 36.8061894,
        label: '4.5'
      },
      {
        image: '../assets/irina-murza-PJMbzWAz26M-unsplash.jpg',
        street: 'CBD',
        address: 'Chester Hotel & Suite',
        price: 6596,
        rating: 4.2,
        lat: -1.2806313,
        lng: 36.8107599,
        label: '4.2'
      },
      {
        image:
          'https://lh5.googleusercontent.com/p/AF1QipOHwge3MKmhhHE4YnsEIBjf5MGJDB-Xy8wPWqKg=w408-h330-k-no',
        street: 'CBD',
        address: 'Hilton',
        price: 10080,
        rating: 4.4,
        lat: -1.2841066,
        lng: 36.8169182,
        label: '4.4'
      }
    ]);
  }
}
