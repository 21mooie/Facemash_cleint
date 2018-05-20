import { Http } from '@angular/http';
import { Injectable } from '@angular/core'

@Injectable()
export class ApiService{
    messages = [];
    constructor (private http: Http) {}

    getMessages() {
        this.http.get('http://127.0.0.1:3000/posts').subscribe(res =>{
            this.messages=res.json();
        })
    }
}