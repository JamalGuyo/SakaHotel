import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GmapComponent } from './gmap/gmap.component';
import { HouseListComponent } from './house-list/house-list.component';
import { HouseSearchComponent } from './house-search/house-search.component';
import { WelcomeComponent } from './welcome/welcome.component';
// agm
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    GmapComponent,
    HouseListComponent,
    HouseSearchComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA6IHN7s5lp-kjREVy6setIPdrKJgoOkts'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
