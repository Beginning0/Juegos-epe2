import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-estebanterrones',
  templateUrl: './estebanterrones.page.html',
  styleUrls: ['./estebanterrones.page.scss'],
})
export class EstebanterronesPage implements OnInit {

  constructor(public navController : NavController, public alertCrtl : AlertController ) { }
  ngOnInit() {
  }
  mhw: string;
  async verSelecion(){
    let alert = await this.alertCrtl.create({
      message:this.mhw,
      buttons:['Cerrar']
    });
    alert.present();
  }
  paginas(){
    this.navController.navigateForward('paginas')
  }
  
  tabs(){
    this.navController.navigateForward('tabs')
  }
}
