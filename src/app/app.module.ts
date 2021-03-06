import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,FormGroup, FormControlName } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ToastrModule } from 'ngx-toastr';

//Componentes
import { LoginComponent } from './componentes/users/login/login.component';
import { NuevoComponent } from './componentes/productos/nuevo/nuevo.component';
import { IntermedioComponent } from './componentes/productos/intermedio/intermedio.component';
import { UltimoComponent } from './componentes/productos/ultimo/ultimo.component';
import { ReciboComponent } from './componentes/productos/recibo/recibo.component';
import { NuestrosProductosComponent } from './componentes/principal/nuestros-productos/nuestros-productos.component';
import { ContactoComponent } from './componentes/principal/contacto/contacto.component';
import { AyudaComponent } from './componentes/principal/ayuda/ayuda.component';
import { PrincipalComponent } from './componentes/principal/principal/principal.component';
import { InventarioComponent } from './componentes/productos/inventario/inventario.component';

//Servicios
import { LoginService } from './services/login.service';
import { ConexionService } from './services/conexion.service';

//Bases de datos
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

//Variable de configuracion
import { environment } from '../environments/environment';
import { IngresosComponent } from './componentes/nuevos/ingresos/ingresos.component';
import { ProveedorComponent } from './componentes/models/proveedor/proveedor.component';
import { HorarioComponent } from './componentes/models/horario/horario.component';
import { PerfilComponent } from './componentes/models/perfil/perfil.component';
import { MedidaComponent } from './componentes/models/medida/medida.component';
import { MateriaprimaComponent } from './componentes/productos/inventario/materiaprima/materiaprima.component';
import { MateriaintermediaComponent } from './componentes/productos/inventario/materiaintermedia/materiaintermedia.component';
import { MateriafinalComponent } from './componentes/productos/inventario/materiafinal/materiafinal.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NuevoComponent,
    IntermedioComponent,
    ReciboComponent,
    NuestrosProductosComponent,
    ContactoComponent,
    AyudaComponent,
    PrincipalComponent,
    InventarioComponent,
    UltimoComponent,
    IngresosComponent,
    ProveedorComponent,
    HorarioComponent,
    PerfilComponent,
    MedidaComponent,
    MateriaprimaComponent,
    MateriaintermediaComponent,
    MateriafinalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    ToastrModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [
    ConexionService,
    LoginService,
    AngularFireAuth
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
