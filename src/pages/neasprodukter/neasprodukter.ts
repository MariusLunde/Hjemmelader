import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-neasprodukter',
  templateUrl: 'neasprodukter.html'
})
export class NEASProdukterPage {
  
  public sendTo: string;
  
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  
  goTo(page) {
    this.sendTo = page.trim().charAt(0).toUpperCase() + page.slice(1) + "Page";
    this.navCtrl.push(this.sendTo);
  }
  
}
