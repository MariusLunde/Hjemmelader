import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PrisResultatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pris-resultat',
  templateUrl: 'pris-resultat.html',
})
export class PrisResultatPage {

  public pris: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pris = this.navParams.get('pris');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrisResultatPage');
  }

}
