import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminguardService implements CanActivate {

  constructor(private userService: UserService, private authService: AuthService) { }

  canActivate(): Observable<boolean> {
    return this.authService.getCurrentUser().pipe(map(user => { return user.isAdmin }));


  }
}
