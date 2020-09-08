import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UserService} from '../../services/user.service';
import {RoleService} from '../../services/role.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  id = +this.active.snapshot.paramMap.get('id');
  formEditUser: FormGroup;
  roles = [];

  constructor(private userService: UserService,
              private roleService: RoleService,
              private fb: FormBuilder,
              private active: ActivatedRoute,
              private route: Router) {
  }

  ngOnInit(): void {
    this.roles = this.roleService.getAll();
    const user = this.userService.getUserById(this.id);
    this.formEditUser = this.fb.group({
      id: [user.id],
      name: [user.name],
      email: [user.email],
      phone: [user.phone],
      address: [user.address],
      role_id: [user.role_id]
    });
  }
  edit(): void{
  this.userService.edit(this.formEditUser.value, this.id);
  this.route.navigate(['users']);
}
}
