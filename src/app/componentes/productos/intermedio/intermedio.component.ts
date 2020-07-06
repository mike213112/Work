import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ConexionService } from './../../../services/conexion.service';
import { ToastrService } from 'ngx-toastr';

import { LoginService } from '../../../services/login.service';
import { Intermedio } from 'src/app/models/producto/intermedio';

@Component({
  selector: 'work-intermedio',
  templateUrl: './intermedio.component.html',
  styleUrls: ['./intermedio.component.scss']
})
export class IntermedioComponent implements OnInit {

  ListarIntermedia: Intermedio[];
  public isLogged = false;

  constructor(public intermedioConexion: ConexionService,
              private autenticar: LoginService,
              private router: Router,
              private toast: ToastrService) { }

  ngOnInit(): void {
    this.autenticar.ObtenerUsuario().subscribe(auth => {
      if(auth){
        this.isLogged = true;
      }else{
        this.isLogged = false;
      }
    });
    this.intermedioConexion.getMateriaIntermedia()
    .snapshotChanges()
    .subscribe(item => {
      this.ListarIntermedia = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.ListarIntermedia.push(x as Intermedio);
      });
    });
  }

  onClickLogout(){
    this.autenticar.Logout();
    this.router.navigate(['/principal']); 
  }

  onSubmit(productForm: NgForm){
    const fecha = (<HTMLInputElement>document.getElementById('fecha')).value;
    const peso = (<HTMLInputElement>document.getElementById('peso')).value;
    const codigo = (<HTMLInputElement>document.getElementById('codigo')).value;

    if (fecha === '') {
      this.toast.error('No ha definido una fecha');
    }
    else if (peso === '') {
      this.toast.error('El campo peso está vacio');
    }
    else if (codigo === '') {
      this.toast.error('El campo codigo está vacio');
    }
    else{
      this.intermedioConexion.MateriaIntermedia(productForm.value);
      this.resetForm(productForm);
      this.toast.success('Dato ingresado correctamente');
    }

  }

  resetForm(productForm?: NgForm){
    if (productForm != null){
      productForm.reset();
      this.intermedioConexion.selectIntermedio = new Intermedio();
    }
  }

}
