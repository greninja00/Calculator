//basic defination of operations
function add(a, b)
{
    return Number(a+b);
}
function subtract(a, b)
{
    return a-b;
}
function divide(a, b)
{
    return a/b;
}
function multiply(a, b)
{
    return a*b;
}

//defining the variables use to update the screen of the calculator
let firstnumber;
let secondnumber;
let operator;

// operate function
function operate(first, operator, second)
{
    switch(operator)
    {
        case '+':
            return add(first,second);
        case '-':
            return subtract(first,second);
        case '/':
            return divide(first,second);
        case '*':
            return multiply(first,second);
        default :
            return 0;
    }
}

// wiring the button to the display except equal clear and delete
const numberOperator = document.querySelector('.calculator').querySelectorAll('.num-operator');
const display = document.querySelector('.calculator').querySelector('.screen');
numberOperator.forEach(item => { item.addEventListener('click' , (e) => {  
                                display.textContent += e.target.textContent } )})

// wiring of rest of the button

const clear = document.querySelector('.calculator').querySelector('.clear');
clear.addEventListener('click' , () => { display.textContent = ''});

// making the calculator do the working on pressing the equals to button
const equal = document.querySelector('.equal');

function ans()
{
    let nums = display.textContent.split(/[^0-9\.]/);
    let opr = display.textContent.split(/[^\/\+\-\*]+/); /* using this 
                                                    we'll always get an array of three value and at
                                                    array index [1] we'll get our operator string */
    console.log(nums);
    console.log(opr);
    console.log( typeof nums[1]);
    
    if(nums.length === 1)
    {
        // do nothing
    }
    else{

        display.textContent = operate(Number(nums[0]), opr[1], Number(nums[1]));
    }
 }

equal.addEventListener('click', ans );


/* on clicking the operator button
* first - calculate the expression on display
* Second - calculate the expression on the display*/



let opr = document.querySelectorAll('.operator');
opr.forEach(op => { op.addEventListener('click', e =>{
    ans();
    display.textContent += e.target.textContent; // calculates the expression and appends the operator
    
})}); 

// Delete button to remove the single value from the display
const del = document.querySelector('.delete');
del.addEventListener('click', () => {
    let size = display.textContent.length;
    display.textContent = display.textContent.substring(0,size-1 );
})