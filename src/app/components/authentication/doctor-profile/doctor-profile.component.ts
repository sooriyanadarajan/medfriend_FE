import { Component, OnInit } from '@angular/core';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { Observable, Observer } from 'rxjs';
import { FormControl, FormGroup, FormBuilder, AbstractControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../../../shared/HttpServices';
import { NzMessageService } from 'ng-zorro-antd/message';
@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.scss']
})
export class DoctorProfileComponent implements OnInit {
  // start-modal
  isVisible = false;
  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
  // end-modal
  current = 0;
  pre(): void {
    this.current -= 1;
  }
  next(): void {
    this.current += 1;
  }
  done(): void {
    console.log("done");
  }
  // select-option
  selectedValue = null;

  

  // upload-file
  transformFile = (file: NzUploadFile) => {
    return new Observable((observer: Observer<Blob>) => {
      const reader = new FileReader();
      // tslint:disable-next-line:no-any
      reader.readAsDataURL(file as any);
      reader.onload = () => {
        const canvas = document.createElement('canvas');
        const img = document.createElement('img');
        img.src = reader.result as string;
        img.onload = () => {
          const ctx = canvas.getContext('2d')!;
          ctx.drawImage(img, 0, 0);
          ctx.fillStyle = 'red';
          ctx.textBaseline = 'middle';
          ctx.fillText('Ant Design', 20, 20);
          canvas.toBlob(blob => {
            observer.next(blob!);
            observer.complete();
          });
        };
      };
    });
  };

  // radio 
  radioValue = 'own';
  isShown: boolean = true ; // hidden by default
  toggleShow() {
  }

  constructor(private router: Router, private httpservice: HttpService,private message: NzMessageService,private formBuilder: FormBuilder) { }
  signinProfile!:FormGroup;
  ngOnInit(): void {
    this.signinProfile=  this.formBuilder.group({   
      name: ['',[Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern('^[a-zA-Z ]*$')]],
      gender:['',[Validators.required]],
      place:['',[Validators.required]],
      registrationNumber:['',[Validators.required]],
      registrationCouncil:['',[Validators.required]],
      registrationYear:['',[Validators.required]],
      degree:['',[Validators.required]],
      college:['',[Validators.required]],
      degreeCompletion:['',[Validators.required]],
      experience:['',[Validators.required]],
      establishmentName:['',[Validators.required]],
      city:['',[Validators.required]],
      locality:['',[Validators.required]],
    })
  }
  
 
  Sign() {
    let val= {
      name:this.signinProfile.get('name')?.value,
      gender:this.signinProfile.get('gender')?.value,
      place:this.signinProfile.get('place')?.value,
      registrationNumber:this.signinProfile.get('registrationNumber')?.value,
      registrationCouncil:this.signinProfile.get('registrationCouncil')?.value,
      registrationYear:this.signinProfile.get('registrationYear')?.value,
      degree:this.signinProfile.get('degree')?.value,
      college :this.signinProfile.get('college')?.value,
      degreeCompletion:this.signinProfile.get('degreeCompletion')?.value,
      experience:this.signinProfile.get('experience')?.value,
      establishmentName:this.signinProfile.get('establishmentName')?.value,
      city:this.signinProfile.get('city')?.value,
      locality:this.signinProfile.get('locality')?.value,
    }
    console.log(val)
    this.httpservice.doctorDetails(val).subscribe((res:any)=>{
    console.log(res.message);
    if(res.success){
      res['success'] && this.message.success(res['message']);
      this.router.navigate(['auth/login'])
      this.signinProfile.reset();
    }else{}
  },error =>{
    this.message.error(error.error.message);
  })
}
 get f() { return this.signinProfile.controls; }
}
