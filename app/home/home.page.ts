import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { User } from 'src/app/user';
import { UserService } from 'src/app/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

@Injectable({
  providedIn: 'root'
})

export class HomePage  implements OnInit {
constructor(private router:Router, private http: HttpClient) {}
  getfirstname: string;
  getlastname: string;
  getemail: string;
  getpassword: string;
  public message;

  public regClicked(){
    let postData = {
                      firstName: this.getfirstname,
                      lastName: this.getlastname,
                      email: this.getemail,
                      password: this.getpassword
                    };

    if(this.getfirstname == "" || this.getlastname == "" || this.getemail == "" || this.getpassword == "") {
      this.message = "Please Fill All Fields!";
    } else {
        this.http.post<any>("http://localhost:8080/user/reg", postData).toPromise().then(
              data =>{console.log(data)},
              (error: HttpErrorResponse) => {
                      alert(error.message);
                    }
              );
       this.router.navigate(['reg']);
       this.getfirstname="";
       this.getlastname="";
       this.getemail="";
       this.getpassword="";
       this.message = "";
    }
  }


  ngOnInit() {
  }

}
