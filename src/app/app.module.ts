import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/Header.component';
import { BerandaComponent } from './beranda/beranda.component';
import { FooterComponent } from './footer/footer.component';
import { FotoComponent } from './galery/foto/foto.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BerandaComponent,
    FooterComponent,
    FotoComponent
],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
