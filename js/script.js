var hats = [
  {
    "name": "Reversible Plaid",
    "price": 26.99,
    "description": "Two classic patterns in one great look: This supersoft and cozy reversible scarf instantly doubles your street-style cred. 100% acrylic.",
    "imageName": "reversible-plaid"
  },
  {
    "name": "Wool Cable Knit",
    "price": 49.99,
    "description": "Warm yourself with this women's natural cable knit scarf, crafted from 100% Merino wool. Imported.",
    "imageName": "wool-cable"
  },
  {
    "name": "Northern Lights",
    "price": 29.99,
    "description": "Handmade by women in Agra, sales provide medical and educational support in this remote area of India. Crinkly 100% cotton.",
    "imageName": "northern-lights"
  },
  {
    "name": "Ombre Infinity",
    "price": 11.99,
    "description": "A dip-dye effect adds color and dimension to a cozy infinity scarf featuring a soft, chunky knit. 100% acrylic.",
    "imageName": "ombre-infinity"
  },
  {
    "name": "Fringed Plaid",
    "price": 18.99,
    "description": "Generously sized, extra soft and featuring a dazzling fringe, this scarf is rendered in a versatile gray, black and white plaid. Expertly beat the cold with style. 100% acrylic.",
    "imageName": "fringed-plaid"
  },
  {
    "name": "Multi Color",
    "price": 22.99,
    "description": "The Who What Wear Oversize Color-Block Square Scarf is big, bold, and designed to twist and wrap any way you wish. All the colors of the season are harmonized in this oversize accent, so you can adjust to contrast or match your outfit; soft and lush, it’s your stylish standoff against cold AC and unexpected fall breezes. 100% acrylic",
    "imageName": "multi-color"
  },
  {
    "name": "Etro Paisley-Print Silk",
    "price": 249.99,
    "description": "Luxurious silk scarf with subtle paisley pattern. 100% silk",
    "imageName": "etro"
  },
  {
    "name": "Ashby Twill",
    "price": 70.99,
    "description": "Faribault brings you the Ashby Twill Scarf in Natural. Woven with a 'broken' twill technique, the Ashby Twill Scarf has a slight zigzag texture. Made in USA, this timeless scarf is crafted with luxurious merino wool and finished with heather gray fringe. 100% Merino wool",
    "imageName": "twill"
  }
]

//This generates the content on the page depending on the hash location

//https://docs.angularjs.org/api/ng/service/$location
//https://www.w3schools.com/angular/angular_services.asp
//https://stackoverflow.com/questions/32756490/how-to-make-use-of-ng-if-ng-else-in-angularjs
//https://stackoverflow.com/questions/15810278/if-else-statement-in-angularjs-templates

// $routeProvider.when('#scarves', {
  // controller: scarvesCtrl,
  // templateUrl: 'index.html#scarves'
// })
// .otherwise({ redirectTo: '#scarves' });

var shoppingApp = angular.module('shoppingApp', []);

shoppingApp.controller('productsCtrl', function($scope, $location){
	
	  $scope.hashLocation = $location.url();
	
		$scope.scarves = [
		{name: 'Reversible Plaid',
		price: 26.99,
		description: 'Two classic patterns in one great look: This supersoft and cozy reversible scarf instantly doubles your street-style cred. 100% acrylic.',
		imageName: "reversible-plaid"},
		{name: 'Wool Cable Knit',
		price: 49.99,
		description: 'Warm yourself with this women&#39;s natural cable knit scarf, crafted from 100% Merino wool. Imported.',
		imageName: 'wool-cable'},
		{name: 'Northern Lights',
		price: 29.99,
		description: 'Handmade by women in Agra, sales provide medical and educational support in this remote area of India. Crinkly 100% cotton.',
		imageName: 'northern-lights'},
		{name: 'Ombre Infinity',
		price: 11.99,
		description: 'A dip-dye effect adds color and dimension to a cozy infinity scarf featuring a soft, chunky knit. 100% acrylic.',
		imageName: 'ombre-infinity'},
		{name: 'Fringed Plaid',
		price: 18.99,
		description: 'Generously sized, extra soft and featuring a dazzling fringe, this scarf is rendered in a versatile gray, black and white plaid. Expertly beat the cold with style. 100% acrylic.',
		imageName: 'fringed-plaid'},
		{name: 'Multi Color',
		price: 22.99,
		description: 'The Who What Wear Oversize Color-Block Square Scarf is big, bold, and designed to twist and wrap any way you wish. All the colors of the season are harmonized in this oversize accent, so you can adjust to contrast or match your outfit; soft and lush, it’s your stylish standoff against cold AC and unexpected fall breezes. 100% acrylic',
		imageName: 'multi-color'},
		{name: 'Etro Paisley-Print Silk',
		price: 249.99,
		description: 'Luxurious silk scarf with subtle paisley pattern. 100% silk',
		imageName: 'etro'},
		{name: 'Ashby Twill',
		price: 70.99,
		description: 'Faribault brings you the Ashby Twill Scarf in Natural. Woven with a &#39;broken&#39; twill technique, the Ashby Twill Scarf has a slight zigzag texture. Made in USA, this timeless scarf is crafted with luxurious merino wool and finished with heather gray fringe. 100% Merino wool',
		imageName: 'twill'}];
});

//This is the empty cart

var cart = [];

//This is the function to push and pop items to the cart array

function cartBasket(value) {
  var item = hats[value].name;
  var i = cart.indexOf(item);
    console.log(i);
    if(i<0){
      cart.push(item);
    } else {
      cart.splice(item,1);
    }
  var itemCount = document.getElementById('cart-count');
  
  itemCount.innerHTML = '<p class="cart-count-size">(' + cart.length + ')</p> <i class="fa fa-shopping-cart" aria-hidden="true"></i>';
  console.log(cart);
  console.log(cart.length);
}


// Begin function for the form

// This function compares names
function compareName(a,b) {
    
    if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;   
    if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
  return 0;
}

//this function compares prices
function comparePrice(a,b){
      return a.price - b.price; console.log(hats.sort(comparePrice));
    }

//This function is to call sort form values
function sortProduct(){ 

    var compare = document.product.filter.value;
    
    var container = document.getElementById('item-container');
//    if(compare == 'price') {
//      console.log(hats.sort(comparePrice));
//    } else if(compare == 'name') {
//      console.log(hats.sort(compareName));
//    }else {
//      console.log('Nothing selected!');
//    }

// THE ABOVE IF/ELSE statment works as well, but I prefer to use switch statements for they are easier to read.
  
    switch(compare){
      case 'price':
        console.log(hats.sort(compareName));
        break;
        
      case 'name':
        console.log(hats.sort(comparePrice));
        break;
        
      default:
        console.log('ERROR: Code is broken somewhere');
        break;
        
    }
  
  event.preventDefault();
}
