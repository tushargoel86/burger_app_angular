import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IngredientType } from '../model/IngredientType';

@Component({
  selector: 'app-burger-controller',
  templateUrl: './burger-controller.component.html',
  styles: [
  ]
})
export class BurgerControllerComponent implements OnInit {

  @Output() ingredientAdded: EventEmitter<IngredientType> = new EventEmitter();
  @Output() ingredientRemoved: EventEmitter<IngredientType> = new EventEmitter();
//  @Output() hasOrderSubmitted: EventEmitter<Boolean> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  removeIngredient(ingredient: string) {   
    this.ingredientRemoved.emit(ingredient as IngredientType);
  }

  addIngredient(ingredient: string) {
    this.ingredientAdded.emit(ingredient as IngredientType);
  }

  // submitOrder(event) {
  //   event.preventDefault();
  //   this.hasOrderSubmitted.emit(true);
  // }
}
