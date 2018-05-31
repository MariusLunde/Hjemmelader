import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { MinBilPage } from '../pages/min-bil/min-bil';
import { MittSikringsskapPage } from '../pages/mitt-sikringsskap/mitt-sikringsskap';
import { NEASProdukterPage } from '../pages/n-easprodukter/n-easprodukter';
import { TabsPage } from '../pages/tabs/tabs';
import { W20APage } from '../pages/w20a/w20a';
import { W25APage } from '../pages/w25a/w25a';
import { W32APage } from '../pages/w32a/w32a';
import { W2300Page } from '../pages/w2300/w2300';
import { W3680Page } from '../pages/w3680/w3680';
import { W4600Page } from '../pages/w4600/w4600';
import { W7360Page } from '../pages/w7360/w7360';
import { W6900Page } from '../pages/w6900/w6900';
import { W1140Page } from '../pages/w1140/w1140';
import { W13800Page } from '../pages/w13800/w13800';
import { W2280Page } from '../pages/w2280/w2280';
import { KontaktOssPage } from '../pages/kontakt-oss/kontakt-oss';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    MinBilPage,
    MittSikringsskapPage,
    NEASProdukterPage,
    TabsPage,
    W20APage,
    W25APage,
    W32APage,
    W2300Page,
    W3680Page,
    W4600Page,
    W7360Page,
    W6900Page,
    W1140Page,
    W13800Page,
    W2280Page,
    KontaktOssPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MinBilPage,
    MittSikringsskapPage,
    NEASProdukterPage,
    TabsPage,
    W20APage,
    W25APage,
    W32APage,
    W2300Page,
    W3680Page,
    W4600Page,
    W7360Page,
    W6900Page,
    W1140Page,
    W13800Page,
    W2280Page,
    KontaktOssPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}