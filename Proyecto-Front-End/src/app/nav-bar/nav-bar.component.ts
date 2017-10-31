import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  user: User;

  constructor(private router: Router, private us: UserService) {}

  ngOnInit() {
    this.us.user.subscribe(data => {
      this.user = data;
    });
  }

  logout(){
    this.router.navigate([""]);
    window.location.reload();
  }
}
