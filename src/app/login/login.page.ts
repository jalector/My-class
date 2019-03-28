import { LoginService } from './../services/login.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public user: {
    email: string,
    password: string
  } = {
    email: 'juda@mail.com',
    password: 'una_facil'
  };

  constructor(
    private route: Router,
    private activedRouter: ActivatedRoute,
    private _loginService: LoginService,
    private _toastr: ToastController,
    private _sessionService: SessionService
  ) { }

  ngOnInit() {
  }

  public login(){
    console.log("credentials", this.user);
    this._loginService.login(this.user.email, this.user.password).then(
      (user: firebase.User) => {
        this._sessionService.user = user;
        this.route.navigate(['home']);
      }
    ).catch(
      async (errorMessage) => {        
        let toastr = await this._toastr.create({
          message: errorMessage,
          duration: 3000,
          position: 'top'
        });

        toastr.present();
      }
    )

  }
}
