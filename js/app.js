(function(){
  "use strict";


  var screen = document.getElementById('screen');
  var clearKey = document.getElementById('clear-key');

  // gather numbers
  var numbers = document.querySelectorAll('.number');
  // console.log(numbers);

  //gather operators
  var operators = document.querySelectorAll('.operator');
  // console.log(operators);

  function clearScreenHandler(event){
    screen.textContent = 0;
  };

  function pushNumberHandler(event){
    var number = this.textContent;
    console.log('You pushed the number ' + number + '!');
    screen.textContent += number;
  }

  function pushOperatorHandler(event){
    console.log('You pushed the ' + this.textContent + ' operator!');
  }

  // add event listner to each number node
  for (var i = 0; i < numbers.length ; i++){
    numbers[i].addEventListener('click', pushNumberHandler);
  };
  // add event listner to each operator node
  for (var i = 0; i < operators.length ;i++){
    operators[i].addEventListener('click', pushOperatorHandler);
  }

  clearKey.addEventListener('click', clearScreenHandler)



}());
