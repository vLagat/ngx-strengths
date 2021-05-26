import { Component, OnInit } from '@angular/core';
import { Locations } from '../../_model/locations';
import { LocationService } from '../../_services/location.service'

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {
  locations: Locations[] = [];
  constructor(public rs: LocationService){

  }

  ngOnInit(): void {
    this.rs.getLocations().subscribe((response) => {
      this.locations=response;
    })
  }

}
