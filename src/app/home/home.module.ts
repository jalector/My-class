import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        redirectTo: 'menu/announcements'
      },
      {
        path: 'menu',
        component: HomePage,
        children: [
          {path: 'announcements', loadChildren: '../pages/announcement/announcement.module#AnnouncementPageModule'},
          {path: 'groups', loadChildren: '../pages/groups/groups.module#GroupsPageModule'}
        ]
      }
    ])
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
