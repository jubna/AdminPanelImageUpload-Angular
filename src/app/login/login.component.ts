import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ProfileService } from "src/app/services/profile.service";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({ 
    email:['',[Validators.required,Validators.email]],
   /*  username:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]] , */
    password:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  })
  constructor(private fb:FormBuilder, private profilesService: ProfileService,private router:Router) { }

  ngOnInit(): void {
  }
  login(){
    if(this.loginForm.valid){
    
      var email="admin@mail.com";
    //  var email=this.loginForm.value.email;
      /* var username=this.loginForm.value.username; */
     // var password=this.loginForm.value.password;
      var password="admin";
      this. profilesService.login(email,password)
      .subscribe((result:any)=>{
        if(result){
          alert(result.message);
          this.router.navigateByUrl("adminPanel") 
         
          console.log(email);
        }
      },
      (result)=>{
        alert(result.error.message)
      })
    }
    else{
      alert("Invalid Form")
    } 
  }
}
