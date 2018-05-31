import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { W20APage } from '../w20a/w20a';
import { W25APage } from '../w25a/w25a';
import { W32APage } from '../w32a/w32a';

@Component({
  selector: 'page-mitt-sikringsskap',
  templateUrl: 'mitt-sikringsskap.html'
})
export class MittSikringsskapPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToW20A(params){
    if (!params) params = {};
    this.navCtrl.push(W20APage);
  }goToW25A(params){
    if (!params) params = {};
    this.navCtrl.push(W25APage);
  }goToW32A(params){
    if (!params) params = {};
    this.navCtrl.push(W32APage);
  }
}
