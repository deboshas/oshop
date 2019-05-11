import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'oshop';

  constructor(private userservice: UserService, private authService: AuthService, private router: Router) {
    this.authService.getCurrentStatus().subscribe(user => {
      if (user) {
        console.log(localStorage.getItem('returnUrl'));
        this.userservice.save(user);//saving the user to firebase
        this.router.navigate(['/']);
      }
    });
  }

}
