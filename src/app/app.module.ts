import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { ReservationComponent } from './reservation/reservation.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './about/about.component';
import { SightsComponent } from './sights/sights.component';
import { FooterComponent } from './footer/footer.component';
import {SlideshowModule} from 'ng-simple-slideshow';
import { AnimalsComponent } from './animals/animals.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    GalleryComponent,
    ContactComponent,
    ReservationComponent,
    HomeComponent,
    AboutComponent,
    SightsComponent,
    FooterComponent,
    AnimalsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlideshowModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
  ],
  providers: [MenuComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
