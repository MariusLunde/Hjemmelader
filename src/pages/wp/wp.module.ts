import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WpPage } from './wp';

@NgModule({
  declarations: [
    WpPage,
  ],
  imports: [
    IonicPageModule.forChild(WpPage),
  ],
})
export class WpPageModule {}
