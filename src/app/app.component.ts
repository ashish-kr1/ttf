import { Component } from '@angular/core';
import { services } from './service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  n_number: number = 1;
  words:any;
  constructor(private services:services) { }
  ngOnInit() {

  }
  send() {
    this.services.send(this.n_number).subscribe(data=>{
      this.words=data;
    },err=>console.log("error",err));
  }
}
