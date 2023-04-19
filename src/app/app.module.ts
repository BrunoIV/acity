import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BottomBarComponent } from './components/ui/bottom-bar/bottom-bar/bottom-bar.component';
import { GameComponent } from './components/layers/game/game.component';
import { ZoneDemandComponent } from './components/ui/bottom-bar/zone-demand/zone-demand.component';
import { DateControlComponent } from './components/ui/bottom-bar/date-control/date-control.component';

@NgModule({
  declarations: [
    AppComponent,
    BottomBarComponent,
    GameComponent,
    ZoneDemandComponent,
    DateControlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
