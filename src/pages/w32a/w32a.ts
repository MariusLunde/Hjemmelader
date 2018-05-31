import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {W4600Page} from "../w4600/w4600";
import {W1140Page} from "../w1140/w1140";
import {W3680Page} from "../w3680/w3680";
import {W6900Page} from "../w6900/w6900";
import {W13800Page} from "../w13800/w13800";
import {W2300Page} from "../w2300/w2300";
import {W7360Page} from "../w7360/w7360";
import {W2280Page} from "../w2280/w2280";

@Component({
    selector: 'page-w32a',
    templateUrl: 'w32a.html'
})
export class W32APage {

    public ladeAmp: string;

    public spenning: string;

    public sikringAmpere: string = "";

    // this tells the tabs component which Pages
    // should be each tab's root Page
    constructor(public navCtrl: NavController) {
    }

    selectAmp(amp) {
        console.dir(amp);
        this.ladeAmp = amp.trim();
    }

    moveOn(valg) {
        this.spenning = valg.trim();
        if (this.ladeAmp == '10 A' && this.spenning == "230V") {
            this.navCtrl.push(W2300Page);
        } else if (this.ladeAmp == '10 A' && this.spenning == "400V1") {
            this.navCtrl.push(W2300Page);
        } else if (this.ladeAmp == '10 A' && this.spenning == "400V3") {
            this.navCtrl.push(W6900Page);
        } else if (this.ladeAmp == '16 A' && this.spenning == "230V") {
            this.navCtrl.push(W3680Page);
        } else if (this.ladeAmp == '16 A' && this.spenning == "400V1") {
            this.navCtrl.push(W3680Page);
        } else if (this.ladeAmp == '16 A' && this.spenning == "400V3") {
            this.navCtrl.push(W1140Page);
        } else if (this.ladeAmp == '20 A' && this.spenning == "230V") {
            this.navCtrl.push(W4600Page);
        } else if (this.ladeAmp == '20 A' && this.spenning == "400V1") {
            this.navCtrl.push(W4600Page);
        } else if (this.ladeAmp == '20 A' && this.spenning == "400V3") {
            this.navCtrl.push(W13800Page);
        } else if (this.ladeAmp == '32 A' && this.spenning == "230V") {
            this.navCtrl.push(W7360Page);
        } else if (this.ladeAmp == '32 A' && this.spenning == "400V1") {
            this.navCtrl.push(W7360Page);
        } else if (this.ladeAmp == '32 A' && this.spenning == "400V3") {
            console.dir("riktig");
            this.navCtrl.push(W2280Page);
        }
    }

}
