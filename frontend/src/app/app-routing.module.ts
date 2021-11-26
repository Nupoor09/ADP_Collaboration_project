import { ProductUpdateComponent } from './shared/components/product-crud/product-update/product-update.component';
import { ProductDeleteComponent } from './shared/components/product-crud/product-delete/product-delete.component';
import { ProductCreateComponent } from './shared/components/product-crud/product-create/product-create.component';
import { ProductCrudComponent } from './shared/components/product-crud/product-crud.component';
import { HomeComponent } from './shared/components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './core/components/profile/profile.component';

import { ForgotComponent } from './core/components/forgot/forgot.component';
import { ResetComponent } from './core/components/reset/reset.component';
import { CommentCreateComponent } from './shared/components/product-crud/comment-create/comment-create.component';

const routes: Routes = [
  {
    path: "",
    redirectTo:'login', pathMatch:'full'
  },
  {
    path: "login",
    component: LoginComponent
  }
  ,
  {
    path: "signup",
    component: SignupComponent
  },
  {
    path: "products",
    component: ProductCrudComponent
  },

  {
    path: "products/create",
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
  {
    path: "profile", 
    component: ProfileComponent
  },
 
  {
    path: "forgot", 
    component:ForgotComponent
  },
  // {
  //   path: "reset/:token", 
  //   component:ResetComponent
  //  }
   {
    path: "reset", 
    component:ResetComponent
   },
   {
    path: "products/comment", 
    component:CommentCreateComponent
   }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
