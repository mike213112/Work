import { InventarioComponent } from './componentes/productos/inventario/inventario.component';
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

const routes: Routes = [
  { path: 'principal', component: PrincipalComponent },
  { path: 'user/login', component: LoginComponent },
  { path: 'principal/user/insert', component: NuevoComponent },
  { path: 'principal/user/intermediate', component: IntermedioComponent },
  { path: 'principal/user/final', component: UltimoComponent },
  { path: 'principal/user/receipt', component: ReciboComponent },
  { path: 'principal/user/inventory', component: InventarioComponent },
  { path: 'principal/nuestros-productos', component: NuestrosProductosComponent },
  { path: 'principal/contacto', component: ContactoComponent },
  { path: 'principal/ayuda', component: AyudaComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'principal' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
