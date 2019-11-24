import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import config from '../../../app.config.json';


@Injectable({ providedIn: 'root' })
export class TicketService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<any[]>(`${config.apiUrl}/tickets`);
    }

    create(ticket) {
        return this.http.post(`${config.apiUrl}/tickets/create`, ticket);
    }

    delete(id) {
        return this.http.delete(`${config.apiUrl}/tickets/${id}`);
    }
}
