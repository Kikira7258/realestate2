import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/client-view/home/home.component';
import { ContactComponent } from './views/client-view/contact/contact.component';
import { AboutComponent } from './views/client-view/about/about.component';
import { FaqsComponent } from './views/client-view/faqs/faqs.component';
import { ListingsComponent } from './views/client-view/listings/listings.component';

const routes: Routes = [
  // Client views
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'listings', component: ListingsComponent },
  { path: 'listing-details', component: ListingsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'faqs', component: FaqsComponent }


  // Portal views
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
