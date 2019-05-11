import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from './user.service';
import { Observable, of } from 'rxjs';
import { appUser } from './models/appUser';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private userService: UserService, private af: AngularFireAuth, private route: ActivatedRoute, private router: Router) { }

  login() {

    let returnUrl: any = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    console.log(returnUrl);
    localStorage.setItem('returnUrl', returnUrl);
    this.af.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  getCurrentStatus() {
    return this.af.authState;
  }

  getCurrentUser(): Observable<appUser> {

    return this.getCurrentStatus().pipe(switchMap(user => {
      if (user) {
        return this.userService.get(user.uid).valueChanges();
      }
      else
        return of<null>();


    }));
  }

  logout() {
    this.af.auth.signOut();
    this.router.navigate(['/login']);

  }

}
