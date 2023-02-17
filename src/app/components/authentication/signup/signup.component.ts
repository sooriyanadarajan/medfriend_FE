import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, AbstractControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../../../shared/HttpServices';
import { MustMatch } from '../../../shared/must-match.validator';
import { NzMessageService } from 'ng-zorro-antd/message';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  constructor(private router: Router, private httpservice: HttpService,private message: NzMessageService,private formBuilder: FormBuilder) { }
  public check!: boolean;
  submitted = false;
  SignUp!:FormGroup;
  public error!: string;
  isLoginMode = true;
  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }
  ngOnInit(): void {
    
    this.SignUp=  this.formBuilder.group({   
      name: ['',[Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern('^[a-zA-Z ]*$')]],
      email : ['',[Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      mobileNumber: ['', [ Validators.required,Validators.pattern("^[0-9]*$"),Validators.minLength(10), Validators.maxLength(10)]],
      password: ['',[Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-8])(?=.*[$#@$!)%~`*?(&^])[A-Za-z\d$@#)$!~`%(*?&^].{7,}')]],
      confirmPassword : ['',[Validators.required,  Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-8])(?=.*[$@#$~`)!%*?(&^])[A-Za-z\d$@@$!~`)%*^(?&].{7,}')]],

    },{
      Validator: MustMatch('Password', 'confirmPassword')
    }
    )
  }
 
  Sign() {
    let val= {
      name:this.SignUp.get('name')?.value,
      email:this.SignUp.get('email')?.value,
      mobileNumber:this.SignUp.get('mobileNumber')?.value,
      password:this.SignUp.get('password')?.value,
      confirmPassword :this.SignUp.get('confirmPassword')?.value,
      role:"DOCTOR"
    }
    console.log(val)
    this.httpservice.signUp(val).subscribe((res:any)=>{
      console.log(res.message);
      if(res.success){
        res['success'] && this.message.success(res['message']);
        this.router.navigate(['auth/login'])
        this.SignUp.reset();
      }else{}
    },error =>{
      this.message.error(error.error.message);
    })
  }

   get f() { return this.SignUp.controls; }
}

