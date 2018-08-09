import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MinBilPage} from "../min-bil/min-bil";
import {Storage} from "@ionic/storage";

/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {

  }



    ionViewDidLoad() {
        let sliderShown = this.storage.get('sliderShown');
        if(sliderShown) {
            this.storage.set('sliderShown', true);
        }
    }

    goToNext() {
        this.storage.set('sliderShown', true);
        this.navCtrl.setRoot(MinBilPage);
    }


}
