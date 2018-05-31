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
    public hovedsikringAmpere: string;
    public ladesikringAmpere: string = "";
    public ladeKurs: string;

    public title: string = "Velg sikring for lader";
    maxAmpere: string = "20";

    public vis20Ampere: boolean = false;
    public vis32Ampere: boolean = false;


    constructor(
        public navCtrl: NavController,
        public navParams: NavParams) {

        this.valgtBil = this.navParams.get('valgtBil');
        this.hovedsikringAmpere = this.navParams.get('skapAmp');


        if (this.hovedsikringAmpere == '63') {
            this.vis32Ampere = true;
            this.vis20Ampere = true;
            this.maxAmpere = '32';
        }
        if (this.hovedsikringAmpere == '50') {
            this.vis20Ampere = true;
            this.maxAmpere = '25';
        }

    }

    ionViewWillEnter() {

    }

    selectAmp(amp) {
        this.ladesikringAmpere = amp.trim();
    }

    moveOn(kurs) {

        this.ladeKurs = kurs.trim();

        if (this.ladesikringAmpere == "") {
            alert("Du må velge styrken på ladesikringen før du går videre!");
            return;
        }

        this.navCtrl.push("ResultatPage", {
            bilvalg: this.valgtBil,
            hovedSikring: this.hovedsikringAmpere,
            laderAmpere: this.ladesikringAmpere,
            ladeKurs: this.ladeKurs
        });
    }
}
