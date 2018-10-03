import { Component, OnInit } from '@angular/core';
import { MainMenuService } from '../../../../shared/services/main-menu.service';
import { TranslateService } from '@ngx-translate/core';
import { Message } from 'primeng/components/common/api';
import { MouseEvent } from '@agm/core';
import { mapMarker } from '../../interfaces/google-maps/map-marker';

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.scss']
})
export class GoogleMapsComponent implements OnInit {

  // google maps zoom level
  public zoom: number = 16;
  public markers = [] as mapMarker[];

  // initial center position for the map
  public currentLat = 0 as number;
  public currentLong = 0 as number;
  public isTracking: boolean;

  public msgs: Message[] = []; // i18n 텍스트 변환 변수

  constructor(
    public mainMenu: MainMenuService,
    private translate: TranslateService
  ) { }

  ngOnInit() {
    this.findMe();
  }

  public clickedMarker(label: string, index: number) {
    console.log('clicked the marker: ${label || index}')
  }
  
  public mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,      
      draggable: true
    });
  }
  
  public markerDragEnd(m: mapMarker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }
  
  public findMe() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.showPosition(position);
      });
    } else {
      this.translate.get('shared.message').subscribe(msg => {
        this.msgs = this.mainMenu.showMessage('warn', msg.warn, msg.noGeoSupport);
      });
    }
  }

  public trackMe() {
    if (navigator.geolocation) {
      this.isTracking = true;
      navigator.geolocation.watchPosition((position) => {
        this.showTrackingPosition(position);
      });
    } else {
      this.translate.get('shared.message').subscribe(msg => {
        this.msgs = this.mainMenu.showMessage('warn', msg.warn, msg.noSupportBrowser);
      });      
    }
  }

  public showPosition(position) {
    this.currentLat = position.coords.latitude;
    this.currentLong = position.coords.longitude;

    // this.markers.push({
    //   lat: position.coords.latitude,
    //   lng: position.coords.longitude,    
    //   label: 'You',  
    //   draggable: false
    // });
  }

  public showTrackingPosition(position) {
    console.log('tracking postion:  ${position.coords.latitude} - ${position.coords.longitude}');
    this.currentLat = position.coords.latitude;
    this.currentLong = position.coords.longitude;

    // this.markers.push({
    //   lat: position.coords.latitude,
    //   lng: position.coords.longitude,    
    //   label: 'You',  
    //   draggable: false
    // });
  }

}


