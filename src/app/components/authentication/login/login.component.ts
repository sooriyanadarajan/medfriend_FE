import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {HttpService} from '../../../shared/HttpServices';
import {AuthSerice} from '../../../shared/auth.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  checked = true;
  constructor(private router: Router,private http:HttpService,private auth:AuthSerice,private message: NzMessageService,private cookie:CookieService) { }
  signinForm!: FormGroup;
  public error!: string;
  ngOnInit(): void {
    this.signinForm = new FormGroup({
      email : new FormControl('',[ Validators.required,
                                     Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
                                    ]
                               ),
      password : new FormControl('',[Validators.required,
                                   Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-8])(?=.*[$@#)$^(!%*?&])[A-Za-z\d$@#~`$)!%(^~`*?&].{7,}')
                                      ]
                                 ),                        
    })
  }
  onSubmit(form: FormGroup) {
    console.log(this.signinForm.value.email);
    let val={
      email:this.signinForm.value.email,
      password:this.signinForm.value.password,
    }
  
    this.http.logIn(val).subscribe((res:any)=>{
      if(res.success){
        this.auth.isLoggedIn=true;
        res['success'] && this.message.success(res['message']);
        this.router.navigate(['/auth/doctor-profile']);
        form.reset();
      }
      else{
        this.auth.isLoggedIn=false;
        this.router.navigate(['/auth/signup']);
      }
    }, (error: { error: { message: string | TemplateRef<void>; }; }) => {
      this.message.error(error.error.message);
    });
  }
  get f() { return this.signinForm.controls; }
}


