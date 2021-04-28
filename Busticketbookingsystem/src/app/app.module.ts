import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BusSearchComponent } from './components/bus-search/bus-search.component';
import { HomeComponent } from './components/home/home.component';
import { SeatselectionComponent } from './components/seatselection/seatselection.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { AllbusService } from './services/allbus.service';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BusSearchComponent,
    HomeComponent,
    SeatselectionComponent,
    ConfirmationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AllbusService],
  bootstrap: [AppComponent]
})
export class AppModule { }
