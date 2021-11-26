import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup,FormControl,Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';


@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {

  form !: FormGroup;
  // public form !: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
 
      email: ''
      
    });
  }

  submit(): void {
    // 'http://localhost:3001/forgot'
    this.http.post('http://127.0.0.1:8025',this.form.getRawValue())
      // .subscribe( next : () => {
      .subscribe(next => {
        console.log("Success!!!");

      }
      )
  }

}

