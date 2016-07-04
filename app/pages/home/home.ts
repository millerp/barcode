import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {BarcodeScanner} from 'ionic-native';
import {Http} from '@angular/http';
import 'rxjs/Rx';
import {Vibration} from 'ionic-native';
import {Screenshot} from 'ionic-native';
import {Flashlight} from 'ionic-native';
import {SocialSharing} from 'ionic-native';

@Component({
    templateUrl: 'build/pages/home/home.html'
})
export class HomePage {

    code = '';
    posts;
    customers;
    postsUrl = 'http://172.20.253.99:8000/api/v1/posts?api_token=123';
    customersApi = 'http://172.20.253.99:8000/api/v1/customers?api_token=123';

    constructor(private navController:NavController, private http:Http) {
        this.http.get(this.customersApi)
            .map(res => res.json())
            .subscribe(customers => this.customers = customers.data);

        this.http.get(this.postsUrl)
            .map(res => res.json())
            .subscribe(posts => this.posts = posts.data.data);
    }

    barcodeopen() {
        BarcodeScanner.scan().then((barcodeData) => {
            this.code = barcodeData.text;
        }, (err) => {
            this.code = 'erro';
        });

    }
    
    vibrar() {
        Vibration.vibrate(1000);
    }

    vibrarr() {
        Vibration.vibrate([2000, 1000, 2000]);
    }

    pararv() {
        Vibration.vibrate(0);
    }

    printS() {
        Screenshot.save('jpg', 90);
    }

    ligarFlash(){
        Flashlight.toggle();
    }

    share(){
        SocialSharing.share('Mensagem Teste','Assunto Qualquer', null, 'http://mpdev.com.br');
    }

}
