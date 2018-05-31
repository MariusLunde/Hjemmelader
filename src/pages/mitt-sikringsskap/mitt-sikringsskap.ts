import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {W20APage} from '../w20a/w20a';
import {W25APage} from '../w25a/w25a';
import {W32APage} from '../w32a/w32a';

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

    selectAmpere(alt) {
        console.dir(alt);

        if (alt == "20A") {
            this.navCtrl.push(W20APage, {valgtBil: this.valgtBil, skapAmp: alt});
        } else if (alt == "25A") {
            this.navCtrl.push(W25APage, {valgtBil: this.valgtBil});
        } else if (alt == "32A") {
            this.navCtrl.push(W32APage, {valgtBil: this.valgtBil});
        }
    }

}
