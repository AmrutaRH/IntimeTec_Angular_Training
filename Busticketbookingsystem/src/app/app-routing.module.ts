import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BusSearchComponent } from './components/bus-search/bus-search.component';
import { HomeComponent } from './components/home/home.component';
import { SeatselectionComponent } from './components/seatselection/seatselection.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';

const routes: Routes = [
 {path:"header",component:HeaderComponent},
 {path:"footer",component: FooterComponent},
 {path:"veiw-ticket",component:BusSearchComponent},
 {path:"home",component:HomeComponent},
 {path:"seat-selection/:key",component:SeatselectionComponent},
 {path:"confirmation",component:ConfirmationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
