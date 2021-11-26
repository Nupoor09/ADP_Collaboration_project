import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { ProductService } from '../shared/services/product.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm !: FormGroup;

  constructor(private formbuilder: FormBuilder,private productService:ProductService,  private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      email: ['' ,Validators.required] ,
      password: ['',Validators.required]
    }
    )
  }

  login() {
    this.http.get<any>("http://localhost:3001/signupUsers")
      .subscribe(res => {
        const user = res.find((a: any) => {
          return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
        });
        if (user) {
        this.productService.showMessage('Login Successful');
          this.loginForm.reset()
          this.router.navigate(['products'])
        } else {
          alert("User not found")
        }
      }, err => {
        alert("Something went wrong")
    })
      
  }
}
