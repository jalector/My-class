import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { User } from '../interface/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private userCollection: AngularFirestoreCollection<User>;


  constructor(
    private _fireAuth: AngularFireAuth,
    private _fireStore: AngularFirestore
  ) {
    this.userCollection = this._fireStore.collection('users');
  }

  public login(email: string, password: string): Promise <firebase.User> {
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

  public register(newUser: User): Promise<firebase.User>{
    return new Promise(
      (good, bad) => {
        this._fireAuth.auth.createUserWithEmailAndPassword(newUser.email, newUser.password).then(
          (user: firebase.auth.UserCredential) => {
            this.userCollection.doc(this._fireStore.createId()).set(newUser);
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
