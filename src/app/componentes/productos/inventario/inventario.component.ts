import { Final } from './../../../models/producto/final';
import { ConexionService } from './../../../services/conexion.service';
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'work-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.scss']
})
export class InventarioComponent implements OnInit {

  ListarDatos: Final[];
  public isLogged = false;

  constructor(private autenticar: LoginService,
              public finalService: ConexionService) { }

  ngOnInit(): void {
    this.autenticar.ObtenerUsuario().subscribe(auth => {
      if(auth){
        this.isLogged = true;
      }else{
        this.isLogged = false;
      }
    });
    this.finalService.getMateriaFinal()
    .snapshotChanges()
    .subscribe(item => {
      this.ListarDatos = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["key"] = element.key;
        this.ListarDatos.push(x as Final);
      });
    });
  }

  onClickLogout(){

  }

}
