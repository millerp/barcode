import {Component} from '@angular/core';
import {ionicBootstrap} from 'ionic-angular';
import {HomePage} from './pages/home/home';

@Component({
    template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class MyApp {

    private rootPage:any;

    constructor() {
        this.rootPage = HomePage;
    }
}
ionicBootstrap(MyApp);