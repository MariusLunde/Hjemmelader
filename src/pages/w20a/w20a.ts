import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MinBilPage } from '../min-bil/min-bil';

@Component({
  selector: 'page-w20a',
  templateUrl: 'w20a.html'
})
export class W20APage {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    constructor(public navCtrl: NavController) {


    }
}
