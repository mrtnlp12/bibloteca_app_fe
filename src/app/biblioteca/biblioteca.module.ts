import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { LibrosComponent } from './pages/libros/libros.component';
import { PrestamoComponent } from './pages/prestamo/prestamo.component';
import { VerDetallesComponent } from './pages/ver-detalles/ver-detalles.component';
import { VerPrestamosComponent } from './pages/ver-prestamos/ver-prestamos.component';
import { RouterModule } from '@angular/router';
import { RegistrarLibroComponent } from './pages/registrar-libro/registrar-libro.component';
import { ActualizarLibroComponent } from './pages/actualizar-libro/actualizar-libro.component';

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    HomeComponent,
    LibrosComponent,
    PrestamoComponent,
    VerDetallesComponent,
    VerPrestamosComponent,
    RegistrarLibroComponent,
    ActualizarLibroComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule],
  exports: [
    HomeComponent,
    LoginComponent,
    SignupComponent,
    LibrosComponent,
    PrestamoComponent,
    VerPrestamosComponent,
    VerDetallesComponent,
    RegistrarLibroComponent,
    ActualizarLibroComponent,
  ],
})
export class BibliotecaModule {}
