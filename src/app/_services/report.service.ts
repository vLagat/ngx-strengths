import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reports } from '../_model/reports';

@Injectable({
    providedIn: 'root'
})
export class ReportService {
    constructor(private http: HttpClient){ }

    url: string = "http://localhost:3000/api/pt4a/reports";

    getReports() {
        return this.http.get<Reports[]>(this.url);
    }
}