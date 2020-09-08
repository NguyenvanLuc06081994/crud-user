import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UserListComponent} from './users/user-list/user-list.component';
import {UserAddComponent} from './users/user-add/user-add.component';
import {UserEditComponent} from './users/user-edit/user-edit.component';

const routes: Routes = [
  {
    path: 'users',
    children: [
      {
        path: '',
        component : UserListComponent
      },
      {
        path: 'add',
        component : UserAddComponent
      },
      {
        path: ':id/edit',
        component : UserEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
