var Student = /** @class */ (function () {
    function Student(groceryItemsArray, quanityItemsArray, barcodeItemsArray) {
        this.groceryItemsArray = groceryItemsArray;
        this.quanityItemsArray = quanityItemsArray;
        this.barcodeItemsArray = barcodeItemsArray;
        this.groceryItemsArray = groceryItemsArray;
        this.quantityProgramArray = quanityItemsArray;
        this.barcodeProgramArray = barcodeItemsArray;
    }
    return Student;
}());
function sendGrocery(grocery) {
    return "Grocery Items: " + grocery.groceryList + "  /  " + "Quantity: " + grocery.quantityList + "  /  " + "Barcode: " + grocery.barcodeList;
}
var user = { groceryList: ["Milk", "Bread", "Eggs", "Cereal"], quantityList: [1, 2, 3, 4], barcodeList: [134, 213, 454, 353] };
document.body.innerHTML = sendGrocery(user);
