import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private user: User;

  constructor(private service: UserService) {}

  ngOnInit() {
    this.service.user.subscribe(data => {
      this.user = data;
    });
  }

}
