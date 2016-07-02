import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {BarcodeScanner} from 'ionic-native';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {

  code = '123';

  constructor(private navController: NavController) {
  
  }

  barcodeopen() {
    BarcodeScanner.scan().then((barcodeData) => {
      this.code = barcodeData.text;
    }, (err) => {
      console.log('erro');
      this.code = 'erro';
    });

  }

}
