import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AllbusService } from './../../services/allbus.service';
import { Journey_Route } from './../../Modals/route'
import { Bus} from './../../Modals/bus.model'
import { from } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  searchBus: FormGroup = this.formBuilder.group({
    source: [''],
    destination: [''],
    date: [''],
  });

  buses: any[];
  constructor(private _allbusService: AllbusService, private formBuilder: FormBuilder,private router:Router) {
    this.buses = [];
  }

  ngOnInit(): void {

    this.buses = this._allbusService.getBuses();

  }
  get f() { return this.searchBus.controls; }
  onFormSubmit() {
    let route:Journey_Route = {
      leaving_form: this.searchBus.value['source'],
      going_to: this.searchBus.value['destination'],
      date:this.searchBus.value['date']
    }
    localStorage.setItem("route", JSON.stringify(route));
    this.buses = this._allbusService.searchbuses(this.searchBus.value['source'], this.searchBus.value['destination']);
  }

  catchBus(bus_detail:any){
    let bus:Bus = {
      key:bus_detail.key,
      busname:bus_detail.busname,
      coach_type:bus_detail.coach_type,
      fare:bus_detail.fare,
      soarce:bus_detail.soarce,
      destination:bus_detail.destination,
      seat:bus_detail.seat,
      time:bus_detail.time
    }
  localStorage.setItem("bus", JSON.stringify(bus));
  this.router.navigate(['/seat-selection',bus.key]);
  }
}
