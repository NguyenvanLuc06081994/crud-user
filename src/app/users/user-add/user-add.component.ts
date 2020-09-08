import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UserService} from '../../services/user.service';
import {RoleService} from '../../services/role.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  formAddUser: FormGroup;
  roles = [];
  constructor(private userService: UserService,
              private roleService: RoleService,
              private fb: FormBuilder,
              private route: Router) {
  }

  ngOnInit(): void {
    this.roles = this.roleService.getAll();
    this.formAddUser = this.fb.group(
      {
        id: [''],
        name: [''],
        email: [''],
        phone: [''],
        address: [''],
        role_id: ['']
      }
    );
  }

  // tslint:disable-next-line:typedef
  add() {
    this.userService.add(this.formAddUser.value);
    this.route.navigate(['/users']);
  }

}
