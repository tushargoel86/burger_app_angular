import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BurgerComponent } from './components/burger/burger.component';
import { BurgerIngredientsComponent } from './components/burger-ingredients/burger-ingredients.component';
import { BurgerControllerComponent } from './components/burger-controller/burger-controller.component';
import { OrderComponent } from './components/order/order.component';

@NgModule({
  declarations: [
    AppComponent,
    BurgerComponent,
    BurgerIngredientsComponent,
    BurgerControllerComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
