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
              private login: LoginService) { }

  ngOnInit(){

  }

  onSubmitLogin(){
    this.login.Login(this.email, this.password)
    .then((res) => {
      this.router.navigate(['/principal']);
    }).catch((error) => {
      this.router.navigate(['/user/login']);
    });
  }

}
