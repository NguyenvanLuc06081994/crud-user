import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {RoleService} from '../../services/role.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users = [];
  roles = [];
  message: string;

  constructor(private userService: UserService,
              private roleService: RoleService) {
  }

  ngOnInit(): void {
    this.users = this.userService.getAll();
    this.roles = this.roleService.getAll();
  }

  // tslint:disable-next-line:typedef
  search(value) {
    this.users = value ? this.filterUser(value) : this.userService.getAll();
  }

  // tslint:disable-next-line:typedef
  filterUser(keyword) {
    return this.userService.getAll().filter(user => {
      // tslint:disable-next-line:triple-equals
      return user.name.toLowerCase().indexOf(keyword) != -1;
    });
  }

  remove(id: number): void {
    if (confirm('are you sure?')) {
      this.userService.remove(id);
      this.message = 'Delete success';
    }
  }
}
