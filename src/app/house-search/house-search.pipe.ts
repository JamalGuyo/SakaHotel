import { Pipe, PipeTransform } from '@angular/core';
import { HouseModel } from '../house.model';

@Pipe({
  name: 'filterHouse'
})
export class HouseSearchPipe implements PipeTransform {
  transform(items: HouseModel[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter(it => {
      return it.street.toLocaleLowerCase().includes(searchText);
    });
  }
}
