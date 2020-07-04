import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Horario } from './../../../models/producto/nuevos/horario';
import { ConexionService } from './../../../services/conexion.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'work-horario',
  templateUrl: './horario.component.html',
  styleUrls: ['./horario.component.scss']
})
export class HorarioComponent implements OnInit {

  listarHorario: Horario[];
  
  constructor(public horarioService: ConexionService,
              private toast: ToastrService) { }

  @ViewChild('btnClose') btnClose: ElementRef;
  ngOnInit(){
    //Ingresar Nuevo Dato a la Base
    this.horarioService.getHorario()
    .snapshotChanges()
    .subscribe(item => {
      this.listarHorario = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$id"] = element.key;
        this.listarHorario.push(x as Horario);
      });
    });
  }

  onSubmit(myform: NgForm){
    var horario = (<HTMLInputElement>document.getElementById("horario")).value;
    if(horario == ""){
      this.toast.error("El campo está vacio");
    }else{
      this.horarioService.Horarios(myform.value);
      this.resetForm(myform);
      this.toast.success('Dato ingresado correctamente');
    }
  }

  resetForm(myform?: NgForm){
    if(myform != null)
    myform.reset();
    this.horarioService.nuevohorario = new Horario();
  }

}
