import { LoginService } from '../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { SessionService } from '../../services/session.service';

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
    email: 'juan@mail.com',
    password: 'una_facil'
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private _loginService: LoginService,
    private _toastr: ToastController,
    private _sessionService: SessionService
  ) { }

  ngOnInit() {
  }

  /**
   * @author Juda Alector
   * @since Mar 29, 2019
   * @description This function start the session.
   */
  public login(){
    console.log("credentials", this.user);
    this._loginService.login(this.user.email, this.user.password).then(
      (user: firebase.User) => {
        this._sessionService.user = user;
        this.router.navigate(['home']);
      }
    ).catch(
      async (errorMessage) => {        
        let toastr = await this._toastr.create({
          message: errorMessage,
          duration: 3000,
          position: 'top'
        });

        toastr.present();
        this.router.navigate(['home']);
      }
    )

  }

  public register(){
    this.router.navigate(['register']);
  }

  /**
   * @author Juda Alector
   * @since Mar 29, 2019
   * @description This function send the user to register view.
   */
  public signup(){
    this.route
  }
}
