import { Component } from '@angular/core';

import {MinBilPage} from "../min-bil/min-bil";
import {MittSikringsskapPage} from "../mitt-sikringsskap/mitt-sikringsskap";
import {NEASProdukterPage} from "../neasprodukter/neasprodukter";
import {KontaktOssPage} from "../kontakt-oss/kontakt-oss";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
    tab1Root: any = MinBilPage;
    tab2Root: any = MittSikringsskapPage;
    tab3Root: any = NEASProdukterPage;
    tab4Root: any = KontaktOssPage;

  constructor() {

  }
}
