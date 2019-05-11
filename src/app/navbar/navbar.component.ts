import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { appUser } from '../models/appUser';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user$: Observable<firebase.User>;
  appUser: appUser;
  constructor(private authService: AuthService) {
    //this.user$ = this.authService.getCurrentStatus();
    this.authService.getCurrentUser().subscribe(user => { this.appUser = user; });
    //this.af.authState.subscribe(user => this.user = user);
  }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();

  }

}
