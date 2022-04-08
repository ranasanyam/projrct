import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  title = 'Angular Form Validation';
  angForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }
   createForm() {
    this.angForm = this.fb.group({
       name: ['', Validators.required ],
       address: ['', Validators.required ]
    });
  }

  ngOnInit(): void {
  }

}
