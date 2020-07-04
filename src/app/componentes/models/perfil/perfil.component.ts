import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Perfil } from './../../../models/producto/nuevos/perfil';
import { ConexionService } from './../../../services/conexion.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'work-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  ListarPerfil: Perfil[];

  constructor(public perfilService: ConexionService,
              private toast: ToastrService) { }

  @ViewChild('btnClose') btnClose: ElementRef;
  ngOnInit(): void {
    this.perfilService.getPerfil()
    .snapshotChanges()
    .subscribe(item => {
      this.ListarPerfil = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$id"] = element.key;
        this.ListarPerfil.push(x as Perfil);
      });
    });
  }

  onSubmit(myform: NgForm){
    var perfil = (<HTMLInputElement>document.getElementById("perfil")).value;
    if(perfil == ""){
      this.toast.error("El campo está vacio");
    }else{
      this.perfilService.Perfiles(myform.value);
      this.resetForm(myform);
      this.toast.success('Dato ingresado correctamente');
    }
  }

  resetForm(myform?: NgForm){
    if(myform != null)
    myform.reset();
    this.perfilService.nuevoperfil = new Perfil();
  }

}
