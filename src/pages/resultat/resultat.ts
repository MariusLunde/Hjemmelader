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
    public hovedSikring: string;
    public ladeAmpere: string;
    public ladeKurs: string;
    public effect: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.bilValg = this.navParams.get('bilvalg');
      this.hovedSikring = this.navParams.get('hovedSikring');
      this.ladeAmpere = this.navParams.get('laderAmpere');
      this.ladeKurs = this.navParams.get('ladeKurs');

      if(this.ladeKurs == '400V3'){
        this.effect = 690 * parseInt(this.ladeAmpere);
      }else {
        this.effect = 230 * parseInt(this.ladeAmpere);
      }
  }

  ionViewDidLoad() {
      console.dir(this.effect);
  }


}
