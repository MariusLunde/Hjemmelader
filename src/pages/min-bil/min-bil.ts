import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {MittSikringsskapPage} from "../mitt-sikringsskap/mitt-sikringsskap";


@Component({
  selector: 'page-min-bil',
  templateUrl: 'min-bil.html'
})
export class MinBilPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }

  selectCar(info) {
    let car = info.trim();
    this.navCtrl.push(MittSikringsskapPage, {param1: car});
  }
}
