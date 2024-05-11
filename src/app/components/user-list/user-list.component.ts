import { Component, Output, EventEmitter, Input } from '@angular/core';
import { IUser } from '../../interfaces/user/user.interface';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {
  displayedColumns: string[] = ['name', 'date', 'status'];
  
  @Input({ required: true }) usersList: IUser[] = [];

  @Output('userSelected') userSelectedEmitt = new EventEmitter<IUser>();

  onUserSelected(user: IUser) {
    console.log('user', user);

    this.userSelectedEmitt.emit(user);
  }
}
