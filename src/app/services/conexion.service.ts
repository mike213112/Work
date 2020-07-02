import { Perfil } from './../models/producto/nuevos/perfil';
import { Medida } from './../models/producto/nuevos/medida';
import { Horario } from './../models/producto/nuevos/horario';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

import { Final } from './../models/producto/final';
import { Intermedio } from './../models/producto/intermedio';
import { Principio } from './../models/producto/principio';


import { Proveedor } from './../models/producto/nuevos/proveedor';

@Injectable({
  providedIn: 'root'
})
export class ConexionService {

  ListarMateriaPrima: AngularFireList<any>;
  ListarMateriaIntermedia: AngularFireList<any>;
  ListarMateriaFinal: AngularFireList<any>;

  ObtenerProveedores: AngularFireList<any>;
  ObtenerHorario: AngularFireList<any>;
  ObtenerPerfil: AngularFireList<any>;
  ObtenerMedidas: AngularFireList<any>;

  selectFinal: Final = new Final();
  selectIntermedio: Intermedio = new Intermedio();
  selectNuevo: Principio = new Principio();

  constructor(private database: AngularFireDatabase) { }

  getProveedores(){
    return this.ObtenerProveedores = this.database.list('Proveedores');
  }

  getHorario(){
    return this.ObtenerHorario = this.database.list('Horarios');
  }

  getPerfil(){
    return this.ObtenerPerfil = this.database.list('Perfiles');
  }

  getMedidas(){
    return this.ObtenerMedidas = this.database.list('Medidas');
  }

  getMateriaPrima(){
    return this.ListarMateriaPrima = this.database.list('MateriaPrima');
  }

  getMateriaIntermedia(){
    return this.ListarMateriaIntermedia = this.database.list('MateriaIntermedia');
  }

  getMateriaFinal(){
    return this.ListarMateriaFinal = this.database.list('MateriaFinal');
  }
  
  Proveedores(proveedo: Proveedor){
    this.ObtenerProveedores.push({
      proveedor: proveedo.proveedor
    });
  }  

  Horarios(horario: Horario){
    this.ObtenerHorario.push({
      horario: horario.horario
    })
  }

  Medidas(medida: Medida){
    this.ObtenerMedidas.push({
      medida: medida.medida
    })
  }

  Perfiles(perfil: Perfil){
    this.ObtenerPerfil.push({
      perfil: perfil.perfil
    })
  }

  MateriaPrima(prima: Principio){
    this.ListarMateriaPrima.push({
      
    })
  }

}
