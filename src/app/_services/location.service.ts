import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Locations } from '../_model/locations';

@Injectable({
    providedIn: 'root'
})
export class LocationService {
    constructor(private http: HttpClient){ }

    url: string = "http://localhost:3000/locations";

    getLocations() {
        return this.http.get<Locations[]>(this.url);
    }
}