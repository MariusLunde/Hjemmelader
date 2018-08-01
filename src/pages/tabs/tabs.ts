import { Component } from '@angular/core';

import {MinBilPage} from "../min-bil/min-bil";
import {MittForbrukPage} from "../mitt-forbruk/mitt-forbruk";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
    tab1Root: any = MinBilPage;
    tab2Root: any = MittForbrukPage;

  constructor() {

  }
}
