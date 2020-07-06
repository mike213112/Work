import { MateriaintermediaComponent } from './componentes/productos/inventario/materiaintermedia/materiaintermedia.component';
import { MateriaprimaComponent } from './componentes/productos/inventario/materiaprima/materiaprima.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AyudaComponent } from './componentes/principal/ayuda/ayuda.component';
import { ContactoComponent } from './componentes/principal/contacto/contacto.component';
import { NuestrosProductosComponent } from './componentes/principal/nuestros-productos/nuestros-productos.component';
import { ReciboComponent } from './componentes/productos/recibo/recibo.component';
import { UltimoComponent } from './componentes/productos/ultimo/ultimo.component';
import { IntermedioComponent } from './componentes/productos/intermedio/intermedio.component';
import { NuevoComponent } from './componentes/productos/nuevo/nuevo.component';
import { LoginComponent } from './componentes/users/login/login.component';
import { PrincipalComponent } from './componentes/principal/principal/principal.component';
import { IngresosComponent } from './componentes/nuevos/ingresos/ingresos.component';
import { InventarioComponent } from './componentes/productos/inventario/inventario.component';
import { MateriafinalComponent } from './componentes/productos/inventario/materiafinal/materiafinal.component';


const routes: Routes = [
  { path: 'principal', component: PrincipalComponent },
  { path: 'user/login', component: LoginComponent },
  { path: 'principal/user/insert', component: NuevoComponent },
  { path: 'principal/user/intermediate', component: IntermedioComponent },
  { path: 'principal/user/final', component: UltimoComponent },
  { path: 'principal/user/inventory', component: InventarioComponent },
  { path: 'principal/user/raw_inventory', component: MateriaprimaComponent },
  { path: 'principal/user/intermediate_inventory', component: MateriaintermediaComponent },
  { path: 'principal/user/final_inventory', component: MateriafinalComponent },
  { path: 'principal/user/receipt', component: ReciboComponent },
  { path: 'principal/nuestros_productos', component: NuestrosProductosComponent },
  { path: 'principal/contacto', component: ContactoComponent },
  { path: 'principal/ayuda', component: AyudaComponent },
  { path: 'admin/nuevosdatos', component: IngresosComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'principal' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
