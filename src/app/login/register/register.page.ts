import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { SessionService } from 'src/app/services/session.service';
import { ToastController } from '@ionic/angular';
import { User } from 'src/app/interface/user.interface';

@Component({
  selector: 'app-register',
  styleUrls: ['./register.page.scss'],
  templateUrl: './register.page.html'
})
export class RegisterPage implements OnInit {
  public user: User =  {
    name: null,
    type: null,
    second: null,
    email: null,
    password: null
  }

  constructor(
    public _loginService: LoginService,
    public _sessionService: SessionService,
    public _toastr: ToastController
  ) { }

  ngOnInit() {
  }


  register(){ 
    this._loginService.register(this.user).then(
      async (user: firebase.User) => {
        this._sessionService.user = user;
        let toastr = await this._toastr.create({
          message: "Usuario creado con éxito",
          duration: 3000,
          position: 'top'
        });

        toastr.present();
      }
    ).catch(
      async (errorMenssage) => {
        let toastr = await this._toastr.create({
          message: errorMenssage,
          duration: 3000,
          position: 'top'
        });

        toastr.present();
      }
    )
  }
}
