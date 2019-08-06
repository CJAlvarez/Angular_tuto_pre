import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {Routes, RouterModule } from '@angular/router';

// Componentes
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { InicioComponent } from './inicio/inicio.component';
import { HeaderComponent } from './header/header.component';
import { AddproveeComponent } from './proveedores/addprovee/addprovee.component';
import { AddpresComponent } from './presupuestos/addpres/addpres.component';

// Servicios
import { ProveedoresService } from './servicios/proveedores.service';

// Modulos

// Routing
const routes: Routes = [
{path: '', component: InicioComponent},
{path:'proveedores', component: ProveedoresComponent},
{path:'addprovee', component: AddproveeComponent},
{path:'addpres', component: AddpresComponent},
{path:'**', component: NotFoundComponent}
];

@NgModule({
	declarations: [
	AppComponent,
	ProveedoresComponent,
	InicioComponent,
	NotFoundComponent,
	HeaderComponent,
	AddproveeComponent,
	AddpresComponent
	],
	imports: [
	BrowserModule,
	RouterModule.forRoot(routes),
	FormsModule,
	ReactiveFormsModule
	],
	providers: [
	ProveedoresService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
