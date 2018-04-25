import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

 
@Injectable()
export class ListService {

    private url: string = 'https://task-collection.mybluemix.net';
 
    constructor(
        private http: HttpClient
    ) {}
 
    getTasks(user_id): Promise<any> {
        return this
            .http
            .get(this.url + '/getTasks', { params : { user_id: user_id}})
            .toPromise()
            .then(response => {
                return response;
            })
            .catch(error => {
                return Promise.reject(error);
            });
    } 
    
    addTask(task): Promise<any> {
        return this
            .http
            .post(this.url + '/addTask', task)
            .toPromise()
            .then(response => {
                return response;
            })
            .catch(error => {
                return Promise.reject(error);
            });
    }

    updateTask(task): Promise<any> {
        return this
            .http
            .post(this.url + '/updateTask', task)
            .toPromise()
            .then(response => {
                return response;
            })
            .catch(error => {
                return Promise.reject(error);
            });
    }
    
    deleteTask(task): Promise<any> {
        return this
            .http
            .post(this.url + '/deleteTask', task)
            .toPromise()
            .then(response => {
                return response;
            })
            .catch(error => {
                return Promise.reject(error);
            });
    }
}