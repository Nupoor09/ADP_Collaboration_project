import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { MainComponent } from './core/components/main/main.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { SectionComponent } from './shared/components/section/section.component';
import { HomeComponent } from './shared/components/home/home.component';
import { ProductCrudComponent } from './shared/components/product-crud/product-crud.component';
import { ProductCreateComponent } from './shared/components/product-crud/product-create/product-create.component';
import { ProductReadComponent } from './shared/components/product-crud/product-read/product-read.component';
import { ProductUpdateComponent } from './shared/components/product-crud/product-update/product-update.component';
import { ProductDeleteComponent } from './shared/components/product-crud/product-delete/product-delete.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

import { MatSortModule } from '@angular/material/sort';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatPaginatorModule } from '@angular/material/paginator';

import '@angular/common/locales/global/pt';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './core/components/profile/profile.component';

import { ForgotComponent } from './core/components/forgot/forgot.component';
import { ResetComponent } from './core/components/reset/reset.component';
import { CommentCreateComponent } from './shared/components/product-crud/comment-create/comment-create.component';


registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductCrudComponent,
    ProductReadComponent,
    ProductUpdateComponent,
    ProductDeleteComponent,
    ProductCreateComponent,
    MainComponent,
    SectionComponent,
    SignupComponent,
    LoginComponent,
    ProfileComponent,
 
    ForgotComponent,
    ResetComponent,
    CommentCreateComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
