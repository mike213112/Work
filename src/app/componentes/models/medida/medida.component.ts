import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Medida } from './../../../models/producto/nuevos/medida';
import { ConexionService } from './../../../services/conexion.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'work-medida',
  templateUrl: './medida.component.html',
  styleUrls: ['./medida.component.scss']
})
export class MedidaComponent implements OnInit {

  ListarMedia: Medida[];

  constructor(public medidaService: ConexionService,
              private toast: ToastrService) { }

  @ViewChild('btnClose') btnClose: ElementRef;
  ngOnInit(): void {
    this.medidaService.getHorario()
    .snapshotChanges()
    .subscribe(item => {
      this.ListarMedia = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$id"] = element.key;
        this.ListarMedia.push(x as Medida);
      });
    });
  }

  onSubmit(myform: NgForm){
    var medida = (<HTMLInputElement>document.getElementById("medida")).value;
    if(medida == ""){
      this.toast.error("El campo está vacio");
    }else{
      this.medidaService.Medidas(myform.value);
      this.resetForm(myform);
      this.toast.success('Dato ingresado correctamente');
    }
  }

  resetForm(myform?: NgForm){
    if(myform != null)
    myform.reset();
    this.medidaService.nuevamedida = new Medida();
  }

}
