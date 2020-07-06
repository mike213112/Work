import { ToastrService as ToastsService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './../../../services/login.service';

@Component({
  selector: 'work-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public email: string;
  public password: string;

  constructor(private router: Router,
              private login: LoginService,
              private toast: ToastsService) { }

  ngOnInit(){

  }

  onSubmitLogin(){
    const mail = (<HTMLInputElement>document.getElementById('email')).value;
    const pass = (<HTMLInputElement>document.getElementById('password')).value;
    if (mail === ''){
      this.toast.error('El campo email está vacio');
    }
    else if (pass === ''){
      this.toast.error('El campo password está vacio');
    } else {
      this.login.Login(this.email, this.password)
      .then(() => {
      this.router.navigate(['/principal']);
      this.toast.success('Bienvenido');
      }).catch(() => {
      this.router.navigate(['/user/login']);
      this.toast.error('Sus credenciales son incorrectas');
      });
    }
  }

}
