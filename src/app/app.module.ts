import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';
import {MinBilPage} from '../pages/min-bil/min-bil';
import {MittSikringsskapPage} from '../pages/mitt-sikringsskap/mitt-sikringsskap';
import {NEASProdukterPage} from '../pages/neasprodukter/neasprodukter';
import {TabsPage} from '../pages/tabs/tabs';
import {KontaktOssPage} from '../pages/kontakt-oss/kontakt-oss';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

@NgModule({
    declarations: [
        MyApp,
        MinBilPage,
        MittSikringsskapPage,
        NEASProdukterPage,
        TabsPage,
        KontaktOssPage,

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
        KontaktOssPage,
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {
}