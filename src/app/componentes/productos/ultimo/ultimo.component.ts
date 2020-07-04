import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

import { LoginService } from '../../../services/login.service';
import { ConexionService } from './../../../services/conexion.service';
import { Final } from './../../../models/producto/final';
import { Medida } from './../../../models/producto/nuevos/medida';
import { Intermedio } from 'src/app/models/producto/intermedio';
import { Perfil } from './../../../models/producto/nuevos/perfil';
import { Horario } from './../../../models/producto/nuevos/horario';

@Component({
  selector: 'work-ultimo',
  templateUrl: './ultimo.component.html',
  styleUrls: ['./ultimo.component.scss']
})
export class UltimoComponent implements OnInit {

  ListarFinal: Final[];
  ListarHorario: Horario[];
  ListarPerfil: Perfil[];
  ListarIntermedio: Intermedio[];
  ListarMedidas: Medida[];

  public isLogged = false;

  constructor(private autenticar: LoginService,
              public finalService: ConexionService,
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
    //
    this.finalService.getHorario()
    .snapshotChanges()
    .subscribe(item => {
      this.ListarHorario = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.ListarHorario.push(x as Horario);
      });
    });
    //
    this.finalService.getPerfil()
    .snapshotChanges()
    .subscribe(item => {
      this.ListarPerfil = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.ListarPerfil.push(x as Perfil);
      });
    });
    //
    this.finalService.getMateriaIntermedia()
    .snapshotChanges()
    .subscribe(item => {
      this.ListarIntermedio = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.ListarIntermedio.push(x as Intermedio);
      });
    });
    //
    this.finalService.getMedidas()
    .snapshotChanges()
    .subscribe(item => {
      this.ListarMedidas = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.ListarMedidas.push(x as Medida);
      });
    });
    //
    this.finalService.getMateriaFinal()
    .snapshotChanges()
    .subscribe(item => {
      this.ListarFinal = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.ListarFinal.push(x as Final);
      });
    });
  }

  onClickLogout(){
    this.autenticar.Logout();
    this.router.navigate(['/principal']);
  }

  onSubmit(productForm: NgForm){
    const operador = (<HTMLInputElement>document.getElementById('operador')).value;
    const linea = (<HTMLInputElement>document.getElementById('linea')).value;
    const horario = (<HTMLOptionElement>document.getElementById('horario')).value;
    const perfil = (<HTMLOptionElement>document.getElementById("perfil")).value;
    const fecha = (<HTMLInputElement>document.getElementById("fecha")).value;
    const codigo = (<HTMLOptionElement>document.getElementById("codigo")).value;
    const medidas = (<HTMLOptionElement>document.getElementById("medidas")).value;
    
    if (operador === '') {
      this.toast.error('El campo operador está vacio');
    }
    if (linea === '') {
      this.toast.error('El campo linea está vacio');
    }
    if (horario === 'Seleccione') {
      this.toast.error('No ha seleccionado ningún horario');
    }
    if (perfil === 'Seleccione') {
      this.toast.error('No ha seleccionado ningún perfil');
    }
    if (fecha === '') {
      this.toast.error('El campo fecha está vacio');
    }
    if (codigo === 'Seleccione') {
      this.toast.error('No ha seleccionado ningún codigo');
    }
    if (medidas === 'Seleccione') {
      this.toast.error('No ha seleccionado ninguna medidas');
    }
    else{
      this.finalService.MateriaFinal(productForm.value);
      this.resetForm(productForm);
      this.toast.success('Dato ingresado correctamente');
    }

  }
  resetForm(productForm?: NgForm){
    if (productForm != null){
      productForm.reset();
      this.finalService.selectFinal = new Final();
    }
  }

}
