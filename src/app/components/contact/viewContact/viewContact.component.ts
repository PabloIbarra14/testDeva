import { Component, OnInit,Output } from '@angular/core';

@Component({
  selector: 'app-viewContact',
  templateUrl: './viewContact.component.html',
  styleUrls: ['./viewContact.component.css']
})
export class ViewContactComponent implements OnInit {
  url= "http://localhost:3000/contact";
  viewActive:any="table";
  constructor() { }

  ngOnInit() {
  }
  onClick(item: any) {
    this.viewActive=item;
  }
}
