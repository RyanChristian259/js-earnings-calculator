//creates a subtotal comprised of the meal price + tax
function subTotal(mealPrice, tax){
   return (tax * mealPrice) + mealPrice;
}

//creates a total of the mealprice + tax + tip
function tipTotal(newSub, tip){
  return tip * newSub;
}

//creates a grand total = tip + tax + meal amount
function finalTotal(newTip, newSub){
   return newTip + newSub;
}

