import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

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
  ListarMateria: Principio[];

  constructor(private autenticar: LoginService,
              private router: Router,
              public conexion: ConexionService,
              private toast: ToastrService) { }

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
    //Ingresar un nuevo Dato
    this.conexion.getProveedores()
    .snapshotChanges()
    .subscribe(item => {
      this.ListarProveedores = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.ListarProveedores.push(x as Proveedor);
      });
    });
    //Extraer Dato de la Base
    this.conexion.getMateriaPrima()
    .snapshotChanges()
    .subscribe(item => {
      this.ListarMateria = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.ListarMateria.push(x as Principio);
      });
    });
  }

  onClickLogout(){
    this.autenticar.Logout();
    this.router.navigate(['/principal']);
  }

  onSubmit(myform: NgForm){
    const proveedor1 = (<HTMLOptionElement>document.getElementById('provedor')).value;
    const peso = (<HTMLInputElement>document.getElementById('peso')).value;
    const codigo = (<HTMLInputElement>document.getElementById('codigo')).value;
    const envio = (<HTMLInputElement>document.getElementById("envio")).value;

    console.log(proveedor1);
    if (proveedor1 === 'Seleccione') {
      this.toast.error('No ha seleccionado ningún proveedor');
    }
    if (peso === '') {
      this.toast.error('El campo peso está vacio');
    }
    if (codigo === '') {
      this.toast.error('El campo codigo está vacio');
    }
    if (envio === '') {
      this.toast.error('El campo envio está vacio');
    }
    else{
      this.conexion.MateriaPrima(myform.value);
      this.resetForm(myform);
      this.toast.success('Dato ingresado correctamente');
    }

  }

  resetForm(myform?: NgForm){
    if (myform != null){
      myform.reset();
      this.conexion.selectNuevo = new Principio();
    }
  }

}
