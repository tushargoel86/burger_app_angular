import { Component, OnInit, Input } from '@angular/core';
import { IngredientType } from '../model/IngredientType';
import IngredientTypeWithQuantity from '../model/IngredientTypeAndQuantity';
import { isBoolean } from 'util';

@Component({
  selector: 'app-burger-ingredients',
  templateUrl: './burger-ingredients.component.html',
  styles: [],
})
export class BurgerIngredientsComponent implements OnInit {
  @Input() ingredients: IngredientTypeWithQuantity[];

  constructor() {}

  ngOnInit(): void {}

  hasIngredient(ingredient: string, requiredIngredient: string): boolean {
    return ingredient === requiredIngredient;
  }

  hasOnlyBread(ingredient: string): boolean {
    let cheese = this.ingredients.find(
      (item) => item.type === IngredientType.CHEESE
    );
    let meat = this.ingredients.find(
      (item) => item.type === IngredientType.MEAT
    );
    let salad = this.ingredients.find(
      (item) => item.type === IngredientType.SALAD
    );

    return (
      !(
        cheese.quantity.length !== 0 ||
        meat.quantity.length !== 0 ||
        salad.quantity.length !== 0
      ) && ingredient === 'bread_top'
    );
  }
}
