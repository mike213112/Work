import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'work-nuestros-productos',
  templateUrl: './nuestros-productos.component.html',
  styleUrls: ['./nuestros-productos.component.scss']
})
export class NuestrosProductosComponent implements OnInit {

  constructor(private autenticar: LoginService) { }

  public isLogged = false;

  ngOnInit(): void {
    this.autenticar.ObtenerUsuario().subscribe(auth => {
      if(auth){
        this.isLogged = true;
      }else{
        this.isLogged = false;
      }
    });
  }

}
