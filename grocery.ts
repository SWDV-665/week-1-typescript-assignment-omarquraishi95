class Student {
    groceryProgramArray: string[];
    quantityProgramArray: number[];
    barcodeProgramArray: number[];

    constructor(public groceryItemsArray: string[], public quanityItemsArray: number[], public barcodeItemsArray: number[]) {
        this.groceryItemsArray = groceryItemsArray;
        this.quantityProgramArray = quanityItemsArray;
        this.barcodeProgramArray = barcodeItemsArray;

    }
}

interface Grocery {
    groceryList: string[];
    quantityList: number[];
    barcodeList: number[];
}


function sendGrocery(grocery: Grocery){
  return "Grocery Items: " + grocery.groceryList + "  /  "+ "Quantity: " + grocery.quantityList+ "  /  "+ "Barcode: "+grocery.barcodeList;

}


let user = { groceryList: ["Milk","Bread","Eggs","Cereal"], quantityList: [1,2,3,4], barcodeList: [134,213,454,353]}


document.body.innerHTML = sendGrocery(user);
