import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { HomeComponent } from './views/home/home.component';
import { ProductsCrudComponent } from './views/home/products-crud/products-crud.component'; /* sempre importar os componentes pelo caminho da raiz */




const routes: Routes = [
  {
    path: "", /* path vazio que vai ser o path raiz da aplicação */
    component: HomeComponent     /* primeira rota */
  },
  {                              /* com isso ele consegue apontar dentro dos link a rota */
    path: "products",
    component: ProductsCrudComponent  /* segunda rota */
  },
  {
    path: "product/create",
    component: ProductCreateComponent
  },
  {
    path: "products/update/:id",
    component: ProductUpdateComponent
  },
  {
    path: "products/delete/:id",
    component: ProductDeleteComponent
  },
] /* deifnir as routes no angular ctlr space conseguimos ver o code complete */

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
