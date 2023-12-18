import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit{
  userList: any[] = [];
  constructor(private userService: UserService){}

  ngOnInit(): void {
    this.userService.getUsers().subscribe(resp => {
      this.userList = resp;
      console.log(this.userList);
    })
  }
}
