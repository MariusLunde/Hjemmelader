import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MittForbrukPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mitt-forbruk',
  templateUrl: 'mitt-forbruk.html',
})
export class MittForbrukPage {

    public pris: number;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MittForbrukPage');
  }

  Regnut(strompris, ladeTid) {
      this.pris = strompris * ladeTid;

      this.navCtrl.push( "PrisResultatPage", {
          pris: this.pris
      });
  }



}

