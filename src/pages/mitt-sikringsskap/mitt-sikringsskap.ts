import {Component} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'page-mitt-sikringsskap',
    templateUrl: 'mitt-sikringsskap.html'
})
export class MittSikringsskapPage {

    public valgtBil: string;

    // this tells the tabs component which Pages
    // should be each tab's root Page
    constructor(
        public navCtrl: NavController,
        public navParams: NavParams
    ) {

        this.valgtBil = this.navParams.get('valgtBil');
    }

    selectAmp(alt) {
        console.log(alt);
        this.navCtrl.push("SikringsValgPage", {
            valgtBil: this.valgtBil,
            skapAmp: alt});
    }

}
