import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WbcdPage } from './wbcd';

@NgModule({
  declarations: [
    WbcdPage,
  ],
  imports: [
    IonicPageModule.forChild(WbcdPage),
  ],
})
export class WbcdPageModule {}
