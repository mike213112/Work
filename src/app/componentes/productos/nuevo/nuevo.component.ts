import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { LoginService } from '../../../services/login.service';
import { ConexionService } from './../../../services/conexion.service';
import { Principio } from './../../../models/producto/principio';
import { Proveedor } from './../../../models/producto/nuevos/proveedor';

@Component({
  selector: 'work-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.scss']
})
export class NuevoComponent implements OnInit {

  ListarProveedores: Proveedor[];

  constructor(private autenticar: LoginService,
              private router: Router,
              public conexion: ConexionService) { }

  public isLogged =  false;
  public email: string;

  ngOnInit(){
    //Autenticar si el usuario esta logueado
    this.autenticar.ObtenerUsuario().subscribe(auth => {
      if(auth){
        this.isLogged = true;
        this.email = auth.email;
      }else{
        this.isLogged = false;
      }
    });
    //Ingresar la nueva Materia
    this.conexion.getMateriaPrima();
    //Obtener los proveedores
    this.conexion.getProveedores()
    .snapshotChanges()
    .subscribe(item => {
      this.ListarProveedores = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.ListarProveedores.push(x as Principio);
      })
    })
  }

  onClickLogout(){
    this.autenticar.Logout();
    this.router.navigate(['/principal']);
  }

  onSubmit(myform: NgForm){
    this.conexion.MateriaPrima(myform.value);
    this.resetForm(myform);
  }

  resetForm(myform?: NgForm){
    if (myform != null){
      myform.reset();
      this.conexion.selectNuevo = new Principio();
    }
  }

}
