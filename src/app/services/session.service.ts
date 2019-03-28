import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  public user: firebase.User;

  constructor() { }

  
}
