

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile: Array<any>
  desc: Array<any>

  email: string;
  constructor(private http: HttpClient) {
       

  }

  ngOnInit(): void {
    this.prod()
    this.http.get<any>("http://localhost:3001/signupUsers")
      .subscribe(res => {
        console.log(res[0])
        this.profile = res
      })
  }
  prod()
  {
    this.http.get<any>("http://localhost:3001/products")
    .subscribe(res => {
      console.log(res)
      this.desc = res
    })
    
}
// getListValue(index: number, data: any) {      
//            this.list_value[index].active = !this.list_value[index].active
//        }
}