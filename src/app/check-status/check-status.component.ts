import { Component, OnInit } from '@angular/core';

import{UsersDataService} from '../services/users-data.service'


@Component({
  selector: 'app-check-status',
  templateUrl: './check-status.component.html',
  styleUrls: ['./check-status.component.css']
})
export class CheckStatusComponent implements OnInit {

  users:any;
  constructor(private userData:UsersDataService)
  {
    userData.users().subscribe((data)=>{
      console.log("data",data);
      this.users=data
    });
  }

  ngOnInit(): void {
  }

}
