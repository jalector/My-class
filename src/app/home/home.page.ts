import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public selectedPath: string; 
  public pages = [
    {title: 'Anuncios', url: '/home/announcements', icon: 'chatbubbles'},
    {title: 'Groups', url: '/home/groups', icon: 'people'},
    {title: 'Añadir grupo', url: '/home/add-group', icon: 'add-circle'}
  ]

  constructor(
    private route: Router
  ) { 
    this.route.events.subscribe((event: RouterEvent) => {
      this.selectedPath = event.url;
    })
  }


}
