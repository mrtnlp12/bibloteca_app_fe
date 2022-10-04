import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarLibroComponent } from './biblioteca/pages/actualizar-libro/actualizar-libro.component';
import { HomeComponent } from './biblioteca/pages/home/home.component';
import { LibrosComponent } from './biblioteca/pages/libros/libros.component';
import { LoginComponent } from './biblioteca/pages/login/login.component';
import { PrestamoComponent } from './biblioteca/pages/prestamo/prestamo.component';
import { RegistrarLibroComponent } from './biblioteca/pages/registrar-libro/registrar-libro.component';
import { SignupComponent } from './biblioteca/pages/signup/signup.component';
import { VerDetallesComponent } from './biblioteca/pages/ver-detalles/ver-detalles.component';
import { VerPrestamosComponent } from './biblioteca/pages/ver-prestamos/ver-prestamos.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'libros',
    component: LibrosComponent,
  },
  {
    path: 'prestamo',
    component: PrestamoComponent,
  },
  {
    path: 'ver-prestamos',
    component: VerPrestamosComponent,
  },
  {
    path: 'ver-detalles/:id',
    component: VerDetallesComponent,
  },
  {
    path: 'registrar-libro',
    component: RegistrarLibroComponent,
  },
  {
    path: 'actualizar-libro/:id',
    component: ActualizarLibroComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
