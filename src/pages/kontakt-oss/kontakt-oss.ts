import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-kontakt-oss',
  templateUrl: 'kontakt-oss.html'
})
export class KontaktOssPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }

  callUs() {
      document.location.href = 'tel:+47 71 56 55 25';
  }

  mailUs() {
      document.location.href = 'mailto: neas@neas.mr.no';
  }
  
}
