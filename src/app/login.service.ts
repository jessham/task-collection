import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

 
@Injectable()
export class LoginService {

    private url: string = 'https://task-collection.mybluemix.net';
 
    constructor(
        private http: HttpClient
    ) {}

    signup(user) {
        return this
            .http
            .post(this.url + '/addUser', user)
            .toPromise()
            .then(response => {
                return response;
            })
            .catch(error => {
                return Promise.reject(error);
            });
    }

    login(user) {
        return this
            .http
            .post(this.url + '/login', user)
            .toPromise()
            .then(response => {
                return response;
            })
            .catch(error => {
                return Promise.reject(error);
            });
    }
}