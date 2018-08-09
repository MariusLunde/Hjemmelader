import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormBuilder, FormGroup} from '@angular/forms';

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
    private deltaPris: number;
    public ladeTid: number;
    public fixedPris: string;
    public ladeKap: number;
    private ladeMidKap: number;
    public calc: FormGroup;


  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder) {

      this.ladeTid = this.navParams.get('ladeTid');
      this.ladeKap = this.navParams.get('ladeKap') ? this.navParams.get('ladeKap') : '0';

      this.calc = this.formBuilder.group({
          calcPris: ['1'],
          calcKap: [this.ladeKap],
          calcData: ['100'],
      });

  }


    result() {
        this.pris = this.calc.controls['calcPris'].value;

        this.ladeMidKap = this.calc.controls['calcKap'].value * (this.calc.controls['calcData'].value * 0.01);

        this.deltaPris = this.pris * (this.ladeMidKap / 1000);

        this.fixedPris = this.deltaPris.toFixed(1);

        this.navCtrl.push("PrisResultatPage", {
            pris: this.fixedPris
        });
    }

}

