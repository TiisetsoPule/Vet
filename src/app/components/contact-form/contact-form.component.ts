import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
   contactMeForm: FormGroup;

  constructor(){
    this.contactMeForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.pattern(/^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/)]),
      text: new FormControl('', [Validators.required, Validators.minLength(5)])
    })
  }

  submitMsg(){
    if(this.contactMeForm.invalid) return;

    let formValue = this.contactMeForm.value;
    console.log(formValue)


  }

}
