import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-galary',
  templateUrl: './photo-galary.component.html',
  styleUrls: ['./photo-galary.component.css']
})
export class PhotoGalaryComponent implements OnInit {

  appList: any[] = [ 
  {
    "ID": "1",
    "url": '../assets/images/mean.jpg'
 },
 {
    "ID": "2",
    "url": '../assets/images/devops.jpg'
 }, 
 {
  "ID": "3",
  "url": '../assets/images/java.jpg'
 }
];

  constructor() { }

  ngOnInit(): void {
  }

}
