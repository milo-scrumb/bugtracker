import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import config from '../../../app.config.json';


@Injectable({ providedIn: 'root' })
export class TicketService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<any[]>(`${config.apiUrl}/tickets`);
    }

    create(author, issue, description) {
        return this.http.post(`${config.apiUrl}/tickets/create`, {author, issue, description});
    }

    updateTech(id, tech) {
        console.log('into ticket service, data is id:' + id + ' tech: ' + tech)
        return this.http.post(`${config.apiUrl}/tickets/editTech`, {id, tech});
    }

    delete(id) {
        return this.http.delete(`${config.apiUrl}/tickets/${id}`);
    }
}
