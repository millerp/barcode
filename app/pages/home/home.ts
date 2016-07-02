import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {BarcodeScanner} from 'ionic-native';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor(private navController: NavController) {
  
  }

  barcodeopen() {
    BarcodeScanner.scan().then((barcodeData) => {
      console.log('data');
    }, (err) => {
      console.log('erro');
    });

  }

}
