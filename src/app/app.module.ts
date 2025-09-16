import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FaqsComponent } from './views/client-view/faqs/faqs.component';
import { ListingsComponent } from './views/client-view/listings/listings.component';
import { ContactComponent } from './views/client-view/contact/contact.component';
import { AboutComponent } from './views/client-view/about/about.component';
import { ListingDetailsComponent } from './views/client-view/listing-details/listing-details.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { DashboardComponent } from './shared/dashboard/dashboard.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    FaqsComponent,
    ListingsComponent,
    ContactComponent,
    AboutComponent,
    ListingDetailsComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
