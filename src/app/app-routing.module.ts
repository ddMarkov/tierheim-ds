import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ContactComponent} from './contact/contact.component';
import {ReservationComponent} from './reservation/reservation.component';
import {AboutComponent} from './about/about.component';
import {SightsComponent} from './sights/sights.component';
import {AnimalsComponent} from "./animals/animals.component";

const routes: Routes = [
    {
      path: '',
      component: HomeComponent
    },
    {
      path: 'animals',
      component: AnimalsComponent,
   },
    {
      path: 'contact',
      component: ContactComponent,
    },
    {
      path: 'gallery',
      component: ReservationComponent
    },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'news',
    component: SightsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
