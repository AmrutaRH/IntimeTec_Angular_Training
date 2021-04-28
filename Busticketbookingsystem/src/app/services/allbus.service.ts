import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AllbusService {
  buses: any[];
  constructor() {
    this.buses = [
      { key: 'KA26',busname:'Gadag-Belagavi', coach_type: 'sleeper', fare: 450, soarce: 'Gadag', destination: 'Belagavi', seat: 45, time: '9:15' },
      { key: 'KA22',busname: 'Belagavi-Banglore', coach_type: 'seater', fare: 550, soarce: 'Belagavi', destination: 'Banglore', seat: 45, time: '9:15' },
      { key: 'KA25' ,busname: 'Dharwad-Mysore', coach_type: 'semiseater', fare: 650, soarce: 'Dharwad', destination: 'Mysore', seat: 45, time: '9:15' },
      { key: 'KA27' ,busname: 'Haveri-Gadag', coach_type: 'sleeper', fare: 500, soarce: 'Haveri', destination: 'Gadag', seat: 45, time: '9:15' },
      { key: 'MH14' ,busname: 'Nasik-Belagavi', coach_type: 'sleeper', fare: 400, soarce: 'Nasik', destination: 'Belagavi', seat: 45, time: '9:15' },
      { key: 'MH12' ,busname: 'Goa-Banglore', coach_type: 'seater', fare: 1050, soarce: 'Goa', destination: 'Banglore', seat: 45, time: '9:15' },
      { key: 'KA26' ,busname: 'Gadag-Banglore', coach_type: 'sleeper', fare: 450, soarce: 'Gadag', destination: 'Banglore', seat: 45, time: '9:15' },
      { key: 'KA18' ,busname:'Haveri-Belagavi', coach_type: 'sleeper', fare: 500, soarce: 'Haveri', destination: 'Belagavi', seat: 45, time: '9:15' },
      { key: 'KA28' ,busname: 'Haveri-Gadag', coach_type: 'sleeper', fare: 500, soarce: 'Haveri', destination: 'Gadag', seat: 45, time: '9:15' },
      { key: 'MH04',busname: 'Nasik-Belagavi', coach_type: 'sleeper', fare: 400, soarce: 'Nasik', destination: 'Belagavi', seat: 45, time: '9:15' },
      { key: 'MH12',busname: 'Goa-Banglore', coach_type: 'seater', fare: 1050, soarce: 'Goa', destination: 'Banglore', seat: 45, time: '9:15' },
      { key: 'KA21',busname: 'Gadag-Belagavi', coach_type: 'sleeper', fare: 450, soarce: 'Gadag', destination: 'Belagavi', seat: 45, time: '9:15' },
    ]
  }
  getBuses() {
    return this.buses;
  }

  searchbuses(_source: String, _destination: String) {
    console.log(_source);
    let filteredsources = _source ? this.buses.filter(bus => {
      return bus.soarce == _source;
    }) : this.buses;
    
    let filteredbuses = _destination ? filteredsources.filter(sourcebus => {
    return sourcebus.destination == _destination;
    }) : filteredsources;
    return filteredbuses;
  }
}
