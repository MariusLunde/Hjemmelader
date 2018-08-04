import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

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
    private stromRegner: FormGroup;
    public ladeTid: number;
    public fixedPris: string;
    public ladeKap: number;


  constructor(public navCtrl: NavController, public navParams: NavParams,  private formBuilder: FormBuilder) {

      this.ladeTid = this.navParams.get('ladeTid');
      this.ladeKap = this.navParams.get('ladeKap');

      this.stromRegner = this.formBuilder.group({
          strompris : ['0.70', Validators.required],
          ladeTid: [this.ladeKap / 1000, Validators.required]
      });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MittForbrukPage');
  }

  Regnut() {
      if(this.stromRegner.valid){
          this.pris = this.stromRegner.controls['strompris'].value * (this.ladeKap / 1000);

          this.fixedPris = this.pris.toFixed(1);

          this.navCtrl.push( "PrisResultatPage", {
              pris: this.fixedPris
          });
      }else{
          alert("Alle feltene må fylles ut");
      }
  }

}

