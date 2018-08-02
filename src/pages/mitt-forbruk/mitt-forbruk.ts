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


  constructor(public navCtrl: NavController, public navParams: NavParams,  private formBuilder: FormBuilder) {

      this.ladeTid = this.navParams.get('ladeTid');

      console.log(this.ladeTid);

      this.stromRegner = this.formBuilder.group({
          strompris : ['0.70', Validators.required],
          ladeTid: [this.ladeTid, Validators.required]
      });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MittForbrukPage');
  }

  Regnut() {
      if(this.stromRegner.valid){
          this.pris = this.stromRegner.controls['strompris'].value * this.stromRegner.controls['ladeTid'].value;

          this.navCtrl.push( "PrisResultatPage", {
              pris: this.pris
          });
      }else{
          alert("Alle feltene må fylles ut");
      }
  }

}

