import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the CehPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ceh',
  templateUrl: 'ceh.html',
})
export class CehPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

    getThere(site) {
        this.navCtrl.push(site);

    }
}
