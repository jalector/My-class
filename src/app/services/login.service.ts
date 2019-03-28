import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private _fireAuth: AngularFireAuth
  ) { }

  public login(email: string, password: string) {
    return new Promise(
      (good, bad) => {
        this._fireAuth.auth.signInWithEmailAndPassword(email, password).then(
          (user: firebase.auth.UserCredential) => {
            good(user.user);
          }
        ).catch(
          (error) => {
            bad(error.message);
          }
        )
      }
    );
  }
}
