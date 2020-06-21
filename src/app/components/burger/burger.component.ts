import { Component, OnInit, Input } from '@angular/core';
import IngredientTypeWithQuantity from '../model/IngredientTypeAndQuantity';
import { IngredientType } from '../model/IngredientType';

@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.css'],
})
export class BurgerComponent implements OnInit {
  ingredients: IngredientTypeWithQuantity[];
  isOrderSubmitted: boolean = false;
  default: IngredientTypeWithQuantity[];
  @Input() isClearIngredients: boolean;

  constructor() {}

  ngOnInit(): void {
    this.ingredients = [
      new IngredientTypeWithQuantity(IngredientType.BREAD_TOP, 1, 1),
      new IngredientTypeWithQuantity(IngredientType.CHEESE, 0, 2),
      new IngredientTypeWithQuantity(IngredientType.MEAT, 0, 2),
      new IngredientTypeWithQuantity(IngredientType.SALAD, 0, 1),
      new IngredientTypeWithQuantity(IngredientType.BREAD_BOTTOM, 0, 1),
    ];

    this.default = [
      new IngredientTypeWithQuantity(IngredientType.BREAD_TOP, 1, 1),
      new IngredientTypeWithQuantity(IngredientType.CHEESE, 0, 2),
      new IngredientTypeWithQuantity(IngredientType.MEAT, 0, 2),
      new IngredientTypeWithQuantity(IngredientType.SALAD, 0, 1),
      new IngredientTypeWithQuantity(IngredientType.BREAD_BOTTOM, 0, 1),
    ];
  }

  onIngredientAdded(ingredient: string) {
    let index = this.ingredients.findIndex((item) => item.type === ingredient);
    this.ingredients[index].quantity.push(1);
  }

  onIngredientRemoved(ingredient: string) {
    let index = this.ingredients.findIndex((item) => item.type === ingredient);
    this.ingredients[index].quantity.pop();
  }

  onOrderSubmit(hasOrderSubmitted: boolean) {
    this.isOrderSubmitted = hasOrderSubmitted;
    this.isClearIngredients = false;
  }

  clearIngredients(hasClearIngredients: boolean) {
    this.isClearIngredients = hasClearIngredients;
    this.ingredients = [
      new IngredientTypeWithQuantity(IngredientType.BREAD_TOP, 1, 1),
      new IngredientTypeWithQuantity(IngredientType.CHEESE, 0, 2),
      new IngredientTypeWithQuantity(IngredientType.MEAT, 0, 2),
      new IngredientTypeWithQuantity(IngredientType.SALAD, 0, 1),
      new IngredientTypeWithQuantity(IngredientType.BREAD_BOTTOM, 0, 1),
    ];
  }
}
