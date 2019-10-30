import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
// components
import { DashboardComponent } from './dashboard.component';
import { GmapComponent } from '../gmap/gmap.component';
import { HouseListComponent } from '../house-list/house-list.component';
import { HouseSearchComponent } from '../house-search/house-search.component';
import { HouseSearchPipe } from '../house-search/house-search.pipe';
import { StarComponent } from '../shared/star/star.component';

// agm
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    GmapComponent,
    HouseListComponent,
    HouseSearchComponent,
    DashboardComponent,
    StarComponent,
    HouseSearchPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
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
