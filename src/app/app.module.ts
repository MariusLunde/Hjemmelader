import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';
import {MinBilPage} from '../pages/min-bil/min-bil';
import {MittSikringsskapPage} from '../pages/mitt-sikringsskap/mitt-sikringsskap';
import {TabsPage} from '../pages/tabs/tabs';
import {MittForbrukPage} from "../pages/mitt-forbruk/mitt-forbruk";
import {PrisResultatPage} from "../pages/pris-resultat/pris-resultat";

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

@NgModule({
    declarations: [
        MyApp,
        MinBilPage,
        MittSikringsskapPage,
        TabsPage,
        MittForbrukPage,
        PrisResultatPage,
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
        TabsPage,
        MittForbrukPage,
        PrisResultatPage,
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {
}