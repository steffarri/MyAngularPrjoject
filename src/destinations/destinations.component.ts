import { Component, Input, ViewChild, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { Route } from '@angular/router/src/config';
import { google } from '@agm/core/services/google-maps-types';
import {$} from 'jquery';
import {GoogleMapsAPIWrapper, AgmMap } from '@agm/core';
import { MarkersInfoComponent} from '../destinations/markersinfo';

@Component({
  selector: 'destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.scss']
})

export class DestinationsComponent {
  @ViewChild(AgmMap) myMap: AgmMap;
 
  @HostListener('window:resize')
  infoWindowOpen = null;
  public maps: GoogleMapsAPIWrapper;
  public zoom: number = 4;
  z : any;
  lat : number = 37.09024;
  lng : number = -98.712891;

  public info: string = "Marker information...";
  public label: string = "Click the Markers!"
  title : string = "Destination List";

  constructor(private router : Router, private markerinfo : MarkersInfoComponent) {

  }

  markers : marker[] = [
    {
      lat: 34.152177,
      lng: -118.336445,
      label: "Warner Brothers Studio Tour",
      draggable: false,
      info: this.markerinfo.WarnerBroInfo
      
    },
    
    {
      lat: 33.979620,
      lng: -118.466684,
      label: "Venice Beach",
      draggable: false,
      info: this.markerinfo.VeniceBeachInfo
      
    },
{
    lat: 47.614249,
    lng: -122.328225,
    label: "Seattle",
    draggable: false,
    info: this.markerinfo.Seattle
},
{
  lat: 39.286550,
  lng: -76.608241,
  label: "Baltimore",
  draggable: false,
  info: this.markerinfo.Baltimore
},
{
  lat: 25.789810,
  lng: -80.129897,
  label: "Miami",
  draggable: false,
  info: this.markerinfo.Miami
},
{
  lat: 37.820081,
  lng: -122.478244,
  label: "Golden Gate Bridge",
  draggable: false,
  info: this.markerinfo.GoldenGateBridge
},
{
  lat: 27.777484,
  lng: -82.637663,
  label: "St. Petersburg",
  draggable: false,
  info: this.markerinfo.SaintPete
},
{
  lat: 36.043615,
  lng: -112.148310,
  label: "Grand Canyon",
  draggable: false,
  info: this.markerinfo.GrandCanyon
},
{
  lat: 33.508963,
  lng: -112.031981,
  label: "Arizona",
  draggable: false,
  info: this.markerinfo.Arizona
},
{
  lat: 28.525750,
  lng: -81.379059,
  label: "Orlando",
  draggable: false,
  info: this.markerinfo.Orlando
},
{
  lat: 37.827172,
  lng: -122.422977,
  label: "Alcatraz",
  draggable: false,
  info: this.markerinfo.Alcatraz
},
{
  lat: 38.888766,
  lng: -77.015608,
  label: "Washington D.C.",
  draggable: false,
  info: this.markerinfo.WashingtonDC
},
{
  lat: 37.750893,
  lng: -122.442065,
  label: "San Francisco",
  draggable: false,
  info: this.markerinfo.SanFrancisco
},
{
  lat: 34.093319,
  lng:  -118.332830,
  label: "Hollywood",
  draggable: false,
  info: this.markerinfo.Hollywood
},
{
  lat: 24.554540,
  lng:  -81.801482,
  label: "Key West",
  draggable: false,
  info: this.markerinfo.KeyWest
},{
  lat: 40.457958,
  lng:  -106.804533,
  label: "Colorado",
  draggable: false,
  info: this.markerinfo.Colorado
},{
  lat: 38.415120,
  lng:  -79.997256,
  label: "West Virginia",
  draggable: false,
  info: this.markerinfo.WestVirginia
},
{
  lat: 36.195749,
  lng:  -81.881817,
  label: "North Carolina",
  draggable: false,
  info: this.markerinfo.NorthCarolina
},
{
  lat: 34.415719,
  lng:  -119.745918,
  label: "Santa Barbara",
  draggable: false,
  info: this.markerinfo.SantaBarbara
},
{
  lat: 34.595213,
  lng:  -120.141364,
  label: "Solvang",
  draggable: false,
  info: this.markerinfo.Solvang
},
{
  lat: 34.010049, 
  lng:  -118.497149,
  label: "Santa Monica",
  draggable: false,
  info: this.markerinfo.SantaMonica
},
{
  lat: 32.743656, 
  lng:  -117.225715,
  label: "San Diego",
  draggable: false,
  info: this.markerinfo.SanDiego
},
  ]


  
  
  ngOnInit() {
    
  }

  onWindowResize() {
    this.myMap.triggerResize();
  }

  recenterMap(lat, lng) {
    this.lat = lat;
    this.lng = lng;
   
  }

  mappedClick(event) {
 
  }

  markerClick(infoWindow, info, label) {
    //this.zoom = 8;
    
    if (this.infoWindowOpen === infoWindow)
    return;

    if(this.infoWindowOpen !== null)
    this.infoWindowOpen.close();

    this.infoWindowOpen = infoWindow;
    this.info = info;
    this.label = label;
    
   
  }

  zoomChange(z) {
    this.zoom = z;
    this.zoom = 4;
  }

 


}

interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
  info: string;
}
