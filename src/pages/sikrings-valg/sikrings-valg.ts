import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the SikringsValgPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-sikrings-valg',
    templateUrl: 'sikrings-valg.html',
})
export class SikringsValgPage {

    public valgtBil: string;
    public hovedsikringAmpere: number;
    public ladeKurs: string;

    maxAmpere: number;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams) {

        this.valgtBil = this.navParams.get('valgtBil');
        this.hovedsikringAmpere = this.navParams.get('skapAmp');

        this.maxAmpere = this.hovedsikringAmpere;

    }

    ionViewWillEnter() {

    }

    moveOn(alt) {
        this.navCtrl.push("TypeLaderPage", {
            bilvalg: this.valgtBil,
            laderAmpere: this.hovedsikringAmpere,
            ladeKurs: alt
        });

    }
}
