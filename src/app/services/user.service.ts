import {Injectable} from '@angular/core';
import {IUser} from '../interfaces/iuser';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: IUser[] = [
    {
      id: 1,
      name: 'Duong',
      email: 'Duong@gmail.com',
      phone: 113,
      address: 'Bac Giang',
      role_id: 1
    },
    {
      id: 2,
      name: 'Cuong',
      email: 'Duong07@gmail.com',
      phone: 114,
      address: 'Dong Anh',
      role_id: 2
    },
    {
      id: 3,
      name: 'Viet Anh',
      email: 'Vietem@gmail.com',
      phone: 115,
      address: 'Cau Giay',
      role_id: 3
    }
  ];

  constructor() {
  }

  getAll(): IUser[] {
    return this.users;
  }

  findIndex(id: number): number {
    return this.users.findIndex(user => user.id === id);
  }

  remove(id: number): void {
    const index = this.findIndex(id);
    this.users.splice(index, 1);
  }

  add(user: IUser): void {
    this.users.push(user);
  }

  getUserById(id: number): IUser {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].id === id) {
        return this.users[i];
      }
    }
  }

  edit(user: IUser, id: number): void {
    this.users[this.findIndex(id)] = user;
  }
}
