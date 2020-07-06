import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { LoginService } from './../../../../services/login.service';
import { ConexionService } from './../../../../services/conexion.service';

import { Principio } from './../../../../models/producto/principio';

@Component({
  selector: 'work-materiaprima',
  templateUrl: './materiaprima.component.html',
  styleUrls: ['./materiaprima.component.scss']
})
export class MateriaprimaComponent implements OnInit {

  ListarPrima: Principio[];

  public isLogged = false;
  email: string;
  constructor(private autenticar: LoginService,
              public primaSevice: ConexionService,
              private router: Router,
              private toast: ToastrService) { }

  ngOnInit(): void {
    this.autenticar.ObtenerUsuario().subscribe(auth => {
      if(auth){
        this.isLogged = true;
        this.email = auth.email;
      }else{
        this.isLogged = false;
      }
    });
    this.primaSevice.getMateriaPrima()
    .snapshotChanges()
    .subscribe( item => {
      this.ListarPrima = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$id"] = element.key;
        this.ListarPrima.push(x as Principio);
      });
    });
  }

  onClickLogout() {

  }

}
