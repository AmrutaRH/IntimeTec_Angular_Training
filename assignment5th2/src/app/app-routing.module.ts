import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ContactComponent } from './components/contact/contact.component';
const routes: Routes = [
  {path:"contact",component:ContactComponent},
  {path:"product",component:ProductComponent,children: [{ path: "productdetail", component: ProductDetailsComponent }]},
  {path:"home",component:HomeComponent},
  {path:"productdetail/:id", component:ProductDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
