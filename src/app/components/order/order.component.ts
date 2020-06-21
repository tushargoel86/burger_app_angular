import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import IngredientTypeWithQuantity from '../model/IngredientTypeAndQuantity';
import Bill from '../model/Bill';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styles: [
  ]
})
export class OrderComponent implements OnInit {

  @Input() ingredients: IngredientTypeWithQuantity[];
  @Output() clearIngredients: EventEmitter<Boolean> = new EventEmitter();
  
  charges: Bill[] = [];
  totalBill: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  handleOrder() {
    this.charges = [];
    this.totalBill = 0;

    for (const item of this.ingredients) {
      let type = item.type;
      let charges = item.quantity.length * item.pricePerPiece;
      if (charges === 0) continue;
      this.totalBill += charges;

      let itemName = type.slice(0, 1).toUpperCase() + type.slice(1);
      if (type === 'bread_bottom' || type === 'bread_top')
          this.charges.push({'item': 'Bread', 'amount': charges});
      else this.charges.push({'item': itemName, 'amount': charges});
    }
  }

  cancelOrder() {
     this.clearIngredients.emit(true);
  }

  placeOrder() {
    alert("Order placed succesfully. Enjoy your yummy burger !!!");
    this.clearIngredients.emit(true);    
  }
}

