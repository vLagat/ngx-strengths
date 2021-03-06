import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Patients } from '../_model/patients';

@Injectable({
    providedIn: 'root'
})
export class PatientService {
    constructor(private http: HttpClient){ }

    url: string = "http://localhost:3000/api/pt4a/patients";

    getPatients() {
        return this.http.get<Patients[]>(this.url);
    }
}