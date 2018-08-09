import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
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
      this.storage.get('mainShown').then((mainShown) => {
          if (mainShown) {
              this.navCtrl.push('MinBilPage');
          }
      });
  }

    goToNext() {
        this.storage.set( 'mainShown', true);
        this.navCtrl.push('MinBilPage');
    }


}
