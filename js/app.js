(function(){
  "use strict";

  var calculator = document.getElementById('calculator');
  var screen = document.getElementById('screen');
  var clearKey = document.getElementById('clear-key');
  var equals = document.getElementById('equals');
  var changeSign = document.getElementById('change-sign');
  var percent = document.getElementById('percent');

  // gather numbers
  var numbers = document.querySelectorAll('.number');
  // console.log(numbers);

  //gather operators
  var operators = document.querySelectorAll('.operator');
  // console.log(operators);
  var operand1;
  var operand2;
  var currentOperator;



  // handle events on number buttons
  function pushNumberHandler(event){
    var number = this.textContent;
    console.log('You pushed the number ' + number + '!');

    // if 0 is onscreen, replace it
    if(screen.textContent == '0'){
      screen.textContent = '';
    }

    for(i = 0; i < operators.length ; i++){
      operators[i].classList.remove('operating');
    }

    screen.textContent += number;
  }


  // handle events on operator buttons
  function pushOperatorHandler(event){

    currentOperator = this.textContent;
    console.log('You pushed the ' + currentOperator + ' operator!');

    // add styles which operator is being used
    for(i = 0; i < operators.length ; i++){
      operators[i].classList.remove('operating');
    }
    this.classList.add('operating');

    // gather what is on screen and assign it to operand1
    operand1 = screen.textContent;
    // calculation.push(operand1);

    // console.log(calculation);
  }

  function pushPercentHandler(){
    var num = parseInt(screen.textContent);

    var converted = num / 100;
    console.log(converted);
    screen.textContent = converted;
  }

  // function for clearing the calc screen
  function clearScreen(){
    screen.textContent = 0;
  }
  // function to handle the clearing function of calculator
  function clearHandler(event){
    clearScreen();
    // console.clear();
    // calculation = [];
    currentOperator = '';
    for(i = 0; i < operators.length ; i++){
      operators[i].classList.remove('operating');
    }
  }



  // not sure if im going to use this
  function currentVal(){
    var value = screen.textContent;
    console.log(value);
  }


  // calculator functions
  function add(op1, op2){
    op1 = parseInt(op1);
    op2 = parseInt(op2);

    var result = op1 + op2;
    console.log('adding', op1, 'and', op2);
    return result;
  }

  function subtract(op1, op2){
    op1 = parseInt(op1);
    op2 = parseInt(op2);

    var result = op1 - op2;
    console.log('subtracting', op1, 'and', op2);

    return result;
  }

  function multiply(op1, op2){
    op1 = parseInt(op1);
    op2 = parseInt(op2);

    var result = op1 * op2;
    console.log('multiplying', op1, 'and', op2);
    return result;
  }

  function divide(op1, op2){
    op1 = parseInt(op1);
    op2 = parseInt(op2);

    var result = op1 / op2;
    console.log('dividing', op1, 'and', op2);
    return result;
  }

  // var calculation = [];

  function calculate(){
    var result;
    // update operand2 with the number on screen at this point
    operand2 = screen.textContent;

    switch(currentOperator){
      case '+':
        result = add(operand1, operand2);
        screen.textContent = result;
        break;
      case '−':
        result = subtract(operand1, operand2);
        screen.textContent = result;
        break;
      case '×':
        result = multiply(operand1, operand2);
        screen.textContent = result;
        break;
      case '÷':
        result = divide(operand1, operand2);
        screen.textContent = result;
        break;
      default:
        // do nothing
    }

  }

  var i = 0; // start counter at 0
  // add event listner to each number node
  for (i = 0; i < numbers.length ; i++){
    numbers[i].addEventListener('click', pushNumberHandler);
  }
  // add event listner to each operator node
  for (i = 0; i < operators.length ;i++){
    operators[i].addEventListener('click', pushOperatorHandler);
  }

  clearKey.addEventListener('click', clearHandler);
  equals.addEventListener('click', calculate);
  percent.addEventListener('click', pushPercentHandler);

  // calculator.addEventListener('gesturestart', function (e) {
  //   e.preventDefault();
  // });

}());
