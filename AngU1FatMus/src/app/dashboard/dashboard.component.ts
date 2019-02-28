import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  userListArray: string[] = ["Ronald Steele", "Nigel Walters", "Jase Sosa", "Casey Vazquez"]; //array with existing users

  onUserNameAdded(userName: string) {           
    this.userListArray.push(userName)     //push user's name input into userListArray
  }      
  onUserNameDelete() {
    this.userListArray.pop()              //remove the last element of userListArray
  }                                 
  constructor() { }

  ngOnInit() {
  }

}
