import { FeedbackComponent } from './feedback/feedback.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { OurProductsComponent } from './our-products/our-products.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '',     component: HomeComponent},  
{ path: "about-us", component: AboutUsComponent},
{ path: "our-products", component: OurProductsComponent},
{ path: "contact-us", component: ContactUsComponent},
{ path: "cart", component: CartComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
