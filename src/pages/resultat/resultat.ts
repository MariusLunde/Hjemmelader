import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ResultatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-resultat',
  templateUrl: 'resultat.html',
})
export class ResultatPage {

    public bilValg: string;
    public ladeAmpere: number;
    public ladeKurs: string;
    public effect: number;
    public ladeKap: number;
    public midLade: number;
    public ladeTid: string;
    public resEffect: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.bilValg = this.navParams.get('bilvalg');
      this.ladeAmpere = this.navParams.get('ladeAmpere');
      this.ladeKurs = this.navParams.get('ladeKurs');
      this.ladeKap = this.navParams.get('ladeKap');
      this.effect = this.navParams.get('effect');
      this.resEffect = this.navParams.get('resEffect');

      this.midLade = this.ladeKap / this.effect;

      this.ladeTid = this.midLade.toFixed(1);
  }

  tilutregning() {
      this.navCtrl.push("MittForbrukPage", {
          ladeTid: this.ladeTid,
          ladeKap: this.ladeKap
      });
  }

  ionViewDidLoad() {

  }


}
