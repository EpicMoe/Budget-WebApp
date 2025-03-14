// Element Selector
const transactionEl = document.querySelector(".transactions");
const balanceNumberEl = document.querySelector(".balance-number");
const numberIncomeEl = document.querySelector(".number--income");
const numberExpensesEl = document.querySelector(".number--expenses");
const formEl = document.querySelector(".form");
const inputDescriptionEl = document.querySelector(".input--description");
const inputAmountEl = document.querySelector(".input--amount");

//event delegation
transactionEl.addEventListener("click", function (event) {
	//console.log(event.target);
	//console.log(event.target.parentNode);

    //  remove transaction item visually
    const clickedEl = event.target.parentNode;
    clickedEl.remove()

    //  update income expenses
    const amountEl = clickedEl.querySelector('.transaction__amount');
    // (+) before var => cast the text into number
    const amount = +amountEl.textContent;
    //console.log(typeof amount);

    const currentIncome = numberIncomeEl.textContent;
    const updatedIncome = currentIncome - amount;
    numberIncomeEl.textContent = updatedIncome;
    

});
