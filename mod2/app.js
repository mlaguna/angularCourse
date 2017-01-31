(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService );

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
    var toBuy = this;
    toBuy.buyList = ShoppingListCheckOffService.getItems();
    toBuy.errorMessage="";
    toBuy.errorMessage2="Nothing bought yet.";
   console.log(toBuy.buyList);


toBuy.buyItem =function(itemIndex) {
    ShoppingListCheckOffService.buyItem(itemIndex);
    toBuy.errorMessage2="";
    if(  toBuy.buyList.length==0){
      toBuy.errorMessage="Everything is bought!";}


    console.log(toBuy.buyList);

};

}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var showList = this;

 showList.bList = ShoppingListCheckOffService.getItemsB();
  console.log(showList.bList.length);
  console.log(showList.bList);




}



function ShoppingListCheckOffService () {
  var service = this;

  // List of shopping items
  var items =  [{ name: "cookies", quantity: 10 }, { name: "other cookies", quantity: 5 },
    { name: "cheap cookies", quantity: 100 }, { name: "sweet cookies", quantity: 8 },
    { name: "expensive cookies", quantity: 1 }];
  var itemsB=[];

  service.addItem = function (item) {

    itemsB.push(item);
  };

  service.buyItem = function (itemIndex) {
    var i=items[itemIndex];
    items.splice(itemIndex, 1);
    itemsB.push(i);
  };

  service.getItems = function () {
    return items;
  };
  service.getItemsB = function () {
    return itemsB;
  };

  service.getErrorB=function(){

    if(  itemsB.length==0){
     return "Nothing bought yet.";
    }
    else {
      return "";
    }

  }
}



})();
