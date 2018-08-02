import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';
import {MinBilPage} from '../pages/min-bil/min-bil';
import {MittSikringsskapPage} from '../pages/mitt-sikringsskap/mitt-sikringsskap';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {MainPage} from "../pages/main/main";

@NgModule({
    declarations: [
        MyApp,
        MinBilPage,
        MittSikringsskapPage,
        MainPage,
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
        MainPage,
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {
}