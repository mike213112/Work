import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,FormGroup, FormControlName } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

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
import { MedidasComponent } from './componentes/productos/medidas/medidas.component';
import { IngresosComponent } from './componentes/nuevos/ingresos/ingresos.component';

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
    MedidasComponent,
    IngresosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [
    ConexionService,
    LoginService,
    AngularFireAuth
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
