import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'
@Injectable({
    providedIn: 'root'
})
export class services {
    constructor(private http: HttpClient) { }
    header() {
        return new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
    }
    send(n) :Observable<any>{
        console.log(n)
        return this.http.post(`http://localhost:3000/send/${n}`, { header: this.header() })
    }
}