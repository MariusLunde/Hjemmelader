import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MittSikringsskapPage } from "./mitt-sikringsskap";

@NgModule({
  declarations: [
      MittSikringsskapPage,
  ],
  imports: [
    IonicPageModule.forChild(MittSikringsskapPage),
  ],
})
export class MittSikringsskapPageModule {}
