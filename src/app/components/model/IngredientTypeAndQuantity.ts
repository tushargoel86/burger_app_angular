import { IngredientType } from './IngredientType';

export default class IngredientTypeWithQuantity {
    type: IngredientType;
    quantity: number[];
    pricePerPiece: number; 

    constructor(type: IngredientType, no: number, pricePerPiece: number) {
        this.type = type;
        this.quantity = Array(no).fill(1);
        this.pricePerPiece = pricePerPiece;
    }
}

