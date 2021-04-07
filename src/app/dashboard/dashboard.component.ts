import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../Services/user.service';
import {User} from 'src/app/models/user.model'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [
    './dashboard.component.scss'
  ],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {

  user$ :Observable<User[]> = this.user.getUser();
  
  constructor(private user:UserService) {}

  ngOnInit() {

  }

}
