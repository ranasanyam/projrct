import { Component, OnInit } from '@angular/core';
import { User } from './user.interface';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  public user!: User; // our model

  ngOnInit(): void {
  
  this.user = {
    name: '',
    designation:'',
    phone: '',
    email:'',
    // address: {
    // street: '',
    // postcode: '8000' // set default value to 8000
    // }
    };
    }
    save(model: User, isValid: boolean) 
    { 
    // check if model is valid// if valid, call API to save customer
    console.log(model, isValid);
    }

}
