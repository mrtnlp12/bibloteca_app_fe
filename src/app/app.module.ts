import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BibliotecaModule } from './biblioteca/biblioteca.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, BibliotecaModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
