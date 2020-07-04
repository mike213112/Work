import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Proveedor } from './../../../models/producto/nuevos/proveedor';
import { ConexionService } from './../../../services/conexion.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'work-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.scss']
})
export class ProveedorComponent implements OnInit {

  ListarProveedor: Proveedor[];
 
  constructor(public proveedorservice: ConexionService,
              private toast: ToastrService) { }

  @ViewChild('btnClose') btnClose: ElementRef;
  ngOnInit(): void {
    this.proveedorservice.getProveedores()
    .snapshotChanges()
    .subscribe(item => {
      this.ListarProveedor = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$id"] = element.key;
        this.ListarProveedor.push(x as Proveedor);
      });
    });
  }

  onSubmit(myform: NgForm){
    var proveedor = (<HTMLInputElement>document.getElementById("proveedor")).value;
    if(proveedor == ""){
      this.toast.error("El campo está vacio");
    }else{
      this.proveedorservice.Proveedores(myform.value);
      this.resetForm(myform);
      this.toast.success('Dato ingresado correctamente');
    }
  }

  resetForm(myform?: NgForm){
    if(myform != null)
    myform.reset();
    this.proveedorservice.nuevoproveedor = new Proveedor();
  }

}
