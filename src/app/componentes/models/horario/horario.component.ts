import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Horario } from './../../../models/producto/nuevos/horario';
import { ConexionService } from './../../../services/conexion.service';

@Component({
  selector: 'work-horario',
  templateUrl: './horario.component.html',
  styleUrls: ['./horario.component.scss']
})
export class HorarioComponent implements OnInit {

  listarHorario: Horario[];

  constructor(public horarioService: ConexionService) { }

  @ViewChild('btnClose') btnClose: ElementRef;
  ngOnInit(){
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
    this.horarioService.Horarios(myform.value);
    this.resetForm(myform);
  }

  resetForm(myform?: NgForm){
    if(myform != null)
    myform.reset();
    this.horarioService.nuevohorario = new Horario();
  }

}
