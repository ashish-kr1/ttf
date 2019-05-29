import { Component } from '@angular/core';
import { services } from './service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  n_number: number = 1;
  words: any;
  error: any;
  constructor(private services: services) { }
  ngOnInit() {

  }
  send() {
    this.words = [];
    if (this.n_number < 0) {
      this.error = "Number should be positive"
    }else if(this.n_number==0){
      this.error="Please enter number greater than 0"
    }
    else {
      this.error="";
      this.services.send(this.n_number).subscribe(data => {
        this.words = data;
      }, err => this.error=err.error.message);
    }
  }
}
