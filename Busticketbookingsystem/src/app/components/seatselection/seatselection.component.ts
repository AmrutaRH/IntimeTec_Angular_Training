import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


import { AllbusService } from './../../services/allbus.service'
import { Seat } from './../../Modals/seat';
import { Bus } from './../../Modals/bus.model';
import { Journey_Route } from './../../Modals/route';
import { Journey } from './../../Modals/journey'


@Component({
  selector: 'app-seatselection',
  templateUrl: './seatselection.component.html',
  styleUrls: ['./seatselection.component.css']
})
export class SeatselectionComponent implements OnInit {

  showSeatList: Seat[] = [];
  total = 0;
  fillupSeat = [];
  alert = false;
  allseat: string = '';
  setbus: Bus;
  constructor(
    private route: Router,
    private BusService: AllbusService
  ) {
    this.setbus = JSON.parse(localStorage.getItem("bus") || '{}');
  }

  ngOnInit() {

  }

  Seat(e: string) {
    this.allseat = this.allseat + ',' + e;
    let seats = [];
    seats = this.showSeatList.map(iteam => {
      return iteam.seatNo
    })
    let id = <HTMLElement>document.getElementById(e);

    if ((this.showSeatList.length != 4)) {
      id.innerHTML = `   <img src="./../../../assets/IMGs/fseat.png" alt="Booked">`;

      let seat = {
        seatNo: e,
        fare: this.setbus.fare,
        seatClass: 'economy'
      }
      this.totalFare(seat.fare);
      this.showList(seat);
    }
    else {
      this.alert = true;
    }


  }

  showList(seat: Seat) {
    this.showSeatList.push(seat)
  }

  totalFare(fare: number) {
    this.total += fare;
  }

  confirmJourney() {

    let route: any = localStorage.getItem('route');

    let seats = [];
    seats = this.showSeatList.map(iteam => {
      return iteam.seatNo
    });

    let journey: Journey = {
      bus: this.setbus,
      seats: this.allseat,
      fare: Number(this.total),
      journey_route: JSON.parse(route)
    }

    localStorage.setItem("journey", JSON.stringify(journey));
    this.route.navigate(['confirmation']);

  }


}
