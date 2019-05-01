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
        redirectTo: 'announcements'
      },
      {
        path: '',
        component: HomePage,
        children: [
          {path: 'announcements', loadChildren: '../pages/announcement/announcement.module#AnnouncementPageModule'},
          {path: 'groups', loadChildren: '../pages/groups/groups.module#GroupsPageModule'},
          {path: 'add-group', loadChildren: '../pages/add-group/add-group.module#AddGroupPageModule'},
        ]
      }
    ])
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
