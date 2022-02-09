let shoeArray = [];

let shoeObject = function (aShoeName, aYear, aPrice, aURL ) {
   this.ID = Math.random().toString(16).slice(5)
   this.shoeName = aShoeName,
   this.year = aYear,
   this.price = aPrice;
   this.url = aURL;
}



document.addEventListener("DOMContentLoaded", function () {
   
   
   document.getElementById("addButton").addEventListener("click", function () {
      shoeArray.push(new shoeObject(document.getElementById("shoeName").value, document.getElementById("year").value,
         document.getElementById("price").value, document.getElementById("URL").value));
     
      console.log(shoeArray);
      
  });


  



});