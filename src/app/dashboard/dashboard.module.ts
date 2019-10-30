import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
// components
import { DashboardComponent } from './dashboard.component';
import { GmapComponent } from '../gmap/gmap.component';
import { HouseListComponent } from '../house-list/house-list.component';
import { HouseSearchComponent } from '../house-search/house-search.component';

// agm
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    GmapComponent,
    HouseListComponent,
    HouseSearchComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: DashboardComponent
      }
    ]),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA6IHN7s5lp-kjREVy6setIPdrKJgoOkts'
    })
  ]
})
export class DashboardModule {}
