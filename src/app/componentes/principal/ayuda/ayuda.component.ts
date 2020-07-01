import { Component, OnInit } from '@angular/core';
import { LoginService } from './../../../services/login.service';

@Component({
  selector: 'work-ayuda',
  templateUrl: './ayuda.component.html',
  styleUrls: ['./ayuda.component.scss']
})
export class AyudaComponent implements OnInit {

  public isLogged = false;

  constructor(private autenticar: LoginService) { }

  ngOnInit(): void {
    this.autenticar.ObtenerUsuario().subscribe(auth => {
      if(auth){
        this.isLogged = true;
      }else{
        this.isLogged = false;
      }
    })
  }

}
