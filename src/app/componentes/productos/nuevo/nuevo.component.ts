import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'work-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.scss']
})
export class NuevoComponent implements OnInit {

  constructor(private autenticar: LoginService) { }

  public isLogged =  false;

  ngOnInit(){
    this.autenticar.ObtenerUsuario().subscribe(auth => {
      if(auth){
        this.isLogged = true;
      }else{
        this.isLogged = false;
      }
    });
  }

  onClickLogout(){

  }

  onSubmit(myform: NgForm){

  }

  resetForm(myform?: NgForm){

  }

}
