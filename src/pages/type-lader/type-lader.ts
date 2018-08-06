import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TypeLaderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-type-lader',
  templateUrl: 'type-lader.html',
})
export class TypeLaderPage {

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
      this.ladeAmpere = this.navParams.get('laderAmpere');
      this.ladeKurs = this.navParams.get('ladeKurs');


      console.log(this.ladeKurs)
      if(this.bilValg == 'BMW i3') {
          this.ladeKap = 18800;
      }else if(this.bilValg == 'Ford Focus Electric (2013-2018)') {
          this.ladeKap = 29500;
      }else if(this.bilValg == 'Hyundai IONIQ Electric') {
          this.ladeKap = 28000;
      }else if(this.bilValg == 'Kia Soul Electric') {
          this.ladeKap = 30000;
      }else if(this.bilValg == 'Mercedes-Benz B250e (2015-2017)') {
          this.ladeKap = 28000;
      }else if(this.bilValg == 'Mitsubishi i-MiEV') {
          this.ladeKap = 16000;
      }else if(this.bilValg == 'Nissan e-NV200 Evalia') {
          this.ladeKap = 24000;
      }else if(this.bilValg == 'Nissan LEAF (24 og 30 kWh, 2011-2017)') {
          this.ladeKap = 21600;
      }else if(this.bilValg == 'Nissan LEAF (40 kWh)') {
          this.ladeKap = 36000;
      }else if(this.bilValg == 'Opel Ampera-e') {
          this.ladeKap = 17600;
      }else if(this.bilValg == 'Peugeot iOn / Citroën C-Zero') {
          this.ladeKap = 14400;
      }else if(this.bilValg == 'Renault Zoe R90 Z.E. 40') {
          this.ladeKap = 41000;
      }else if(this.bilValg == 'Smart ForFour Electric Drive') {
          this.ladeKap = 17600;
      }else if(this.bilValg == 'Tesla Model S 75 (D)') {
          this.ladeKap = 67500;
      }else if(this.bilValg == 'Tesla Model S 90D og P100D') {
          this.ladeKap = 82000;
      }else if(this.bilValg == 'Tesla Model X 90D og P100D') {
          this.ladeKap = 100000;
      }else if(this.bilValg == 'Volkswagen e-Golf') {
          this.ladeKap = 31500;
      }else if(this.bilValg == 'Volkswagen e-up!') {
          this.ladeKap = 16800;
      }else if(this.bilValg == 'Chevrolet Bolt') {
          this.ladeKap = 60000;
      }else if(this.bilValg == 'Citroën Berlingo') {
          this.ladeKap = 22500;
      }else if(this.bilValg == 'Buddy Electric Buddy') {
          this.ladeKap = 14400;
      }else if(this.bilValg == 'Smart Fortwo Electric Drive') {
          this.ladeKap = 17600;
      }else if(this.bilValg == 'Renault Twizy') {
          this.ladeKap = 6800;
      }else if(this.bilValg == 'Renault Kangoo Z.E.') {
          this.ladeKap = 24000;
      }else if(this.bilValg == 'Renault Fluence') {
          this.ladeKap = 22000;
      }else if(this.bilValg == 'Bolloré Bluecar') {
          this.ladeKap = 30000;
      }else if(this.bilValg == 'BYD Auto e6') {
          this.ladeKap = 61000;
      }else if(this.bilValg == 'Tazzari Tazzari Zero') {
          this.ladeKap = 15000;
      }else if(this.bilValg == 'Tesla Motors Roadster') {
          this.ladeKap = 53000;
      }else if(this.bilValg == 'Elbil Norge Buddy ALB') {
          this.ladeKap = 13000;
      }

      if(this.ladeKurs == '400V3'){
          this.effect = 690 * this.ladeAmpere;
      }else if (this.ladeKurs == '400V1' || this.ladeKurs == '230V'){
          this.effect = 230 * this.ladeAmpere;
      }

      this.resEffect = this.effect;
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad TypeLaderPage');
  }

  selectLader(alternativ) {
        console.log(alternativ);
      if (alternativ == '1' && this.effect > 2300) {
          this.effect = 2300;
      } else if (alternativ == '2' && this.effect > 19000) {
          this.effect = 19000;
      } else if (alternativ == '3' && this.effect > 43000) {
          this.effect = 43000;
      } else if (alternativ == '4' && this.effect > 63000) {
          this.effect = 63000;
      } else if (alternativ == '5' && this.effect > 50000) {
          this.effect = 50000;
      }

      this.resEffect = this.resEffect - this.effect;

      console.log(this.effect);


          this.midLade = this.ladeKap / this.effect;

          this.ladeTid = this.midLade.toFixed(1);

          this.navCtrl.push('ResultatPage', {
              bilvalg: this.bilValg,
              ladeAmpere: this.ladeAmpere,
              ladeKurs: this.ladeKurs,
              ladeKap: this.ladeKap,
              effect: this.effect,
              resEffect: this.resEffect
          });
  }

}
