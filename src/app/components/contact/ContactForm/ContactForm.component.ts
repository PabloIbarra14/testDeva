import { Component, OnInit,Input } from '@angular/core';
import {FormControl, Validators,FormGroup,FormBuilder} from '@angular/forms';
import { DataService } from '../../../service/data.service';

@Component({
  selector: 'app-ContactForm',
  templateUrl: './ContactForm.component.html',
  styleUrls: ['./ContactForm.component.css']
})
export class ContactFormComponent implements OnInit {
  @Input() url: string="";
  myformGroup: FormGroup;
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  messageFormControl = new FormControl('', [Validators.required, Validators.maxLength(255)]);
  telFormControl = new FormControl('', [Validators.required,Validators.pattern('^[+][0-9]{2}[0-9]{10}$')]);
  nameFormControl = new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]*$')]);

  constructor(  
    private formBuilder: FormBuilder,
    private dataService: DataService) { 
     this.myformGroup = this.formBuilder.group({
      name: this.nameFormControl,
      email: this.emailFormControl,
      message: this.messageFormControl,
      tel: this.telFormControl
    });
  }

  ngOnInit() {
    console.log(this.url)
  }

  onSubmit() {
    console.log(this.myformGroup.value);
    this.dataService.sendData(this.myformGroup.value,this.url).subscribe(data => {
      console.log(data);
    }
    );
  }

  


}
