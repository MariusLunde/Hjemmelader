import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MittSikringsskapPage} from "../mitt-sikringsskap/mitt-sikringsskap"
import { Storage } from '@ionic/storage';


@IonicPage()
@Component({
  selector: 'page-min-bil',
  templateUrl: 'min-bil.html'
})
export class MinBilPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController, public storage: Storage) {
  }



  selectCar(info) {
    let car = info.trim();
    this.navCtrl.push('MittSikringsskapPage', { valgtBil: car });
  }


}
