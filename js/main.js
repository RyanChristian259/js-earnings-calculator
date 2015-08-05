$(document).on('ready', function() {

  //arrays that will hold total tips and total prices,
  var priceArray = [];
  var totalTipArray = [];

  //get values from 'meal details' form on click
  $('form').on('submit', function(event){
    event.preventDefault();

    $('.form-input').each(function(){
      priceArray.unshift($(this).val());
      $(this).val('');
    });

 // tipTotal(newSub, tip);
 //  console.log(totalTipArray + ' totalTip outside');
   $('#subTotal').html('');
   $('#tip').html('');
   $('#resetButton').on('click', function(){
   $('#total').html('');
   $('#totalTips').html('');
   $('#mealCount').html('');
   $('#averageTip').html('');
    priceArray = [];
    totalTipArray = [];
    newTip = 0;
    newTotal = 0;
    newSub = 0;
    totalTipAnswer = 0;
    averageTip = 0;
 });


    var mealPrice = priceArray[2];
    mealPrice = parseFloat(mealPrice);
    var tax = priceArray[1];
    tax = parseFloat(tax);
    var tip = priceArray[0];
    tip = parseFloat(tip);

    var newSub = subTotal(mealPrice, tax);
    // console.log(newSub + " newSub");

    var newTip = tipTotal(newSub, tip);
    // console.log(newTip + " newTip");
    totalTipArray.push(newTip);

    var newTotal = finalTotal(newTip, newSub);
    // console.log(newTotal+ " newTotal");

    var totalTipsString = totalTipArray.join('+');
    parseInt(totalTipsString);
    var totalTipAnswer = eval(totalTipsString);

    var averageTip = totalTipAnswer / totalTipArray.length;

    //Total Charges
    $('#subTotal').html('  $' + newSub.toFixed(2));
    $('#tip').html('  $' + newTip.toFixed(2));
    $('#total').html('  $' + newTotal.toFixed(2));
    //Total Earnings
    $('#totalTips').html('  $' + totalTipAnswer.toFixed(2));
    $('#mealCount').html(' ' + totalTipArray.length);
    $('#averageTip').html(' $' + averageTip.toFixed(2));



  });

});










