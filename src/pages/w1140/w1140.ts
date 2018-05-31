import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-w1140',
  templateUrl: 'w1140.html'
})
export class W1140Page {

  resultatTekst: string = "";

  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {

    this.resultatTekst = ""

  }
  
}
