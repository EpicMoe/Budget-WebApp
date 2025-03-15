//  Element Selector
const transactionEl = document.querySelector(".transactions");
const balanceNumberEl = document.querySelector(".balance-number");
const numberIncomeEl = document.querySelector(".number--income");
const numberExpensesEl = document.querySelector(".number--expenses");
const formEl = document.querySelector(".form");
const inputDescriptionEl = document.querySelector(".input--description");
const inputAmountEl = document.querySelector(".input--amount");

function submitHandler(event) {
	//  prevent a default behaver
	event.preventDefault();

	//  get input values
	const description = inputDescriptionEl.value;
	const amount = +inputAmountEl.value;

	//  create li with the new input
	const transactionItemHtml = `
    					<li class="transaction transaction--${amount > 0 ? "income" : "expense"}">
						<span class="transaction__text">${description}</span>
						<span class="transaction__amount">${amount > 0 ? "+" : ""}${amount}</span>
						<button class="transaction__btn">X</button>
					</li>
    `;

	//  insert new HTML
	transactionEl.insertAdjacentHTML("beforeend", transactionItemHtml);

	//  clear form input
	inputDescriptionEl.value = "";
	inputAmountEl.value = "";

	//  unfocus (blur) from input
	inputDescriptionEl.blur();
	inputAmountEl.blur();

	if (amount > 0) {
		const currentIncome = +numberIncomeEl.textContent;
		const updatedIncome = currentIncome + amount;
		numberIncomeEl.textContent = updatedIncome;
	} else {
		const currentExpenses = +numberExpensesEl.textContent;
		const updatedExpenses = currentExpenses + amount * -1;
		numberExpensesEl.textContent = updatedExpenses;
	}
	//  update balance
	const income = +numberIncomeEl.textContent;
	const expenses = +numberExpensesEl.textContent;
	balanceNumberEl.textContent = income - expenses;

	//  make red if balance negative
	income - expenses < 0 ? (balanceNumberEl.style.color = "red") : "";
}

function clickHandler(event) {
	//event delegation
	//console.log(event.target);
	//console.log(event.target.parentNode);

	//  remove transaction item visually
	const clickedEl = event.target.parentNode;
	clickedEl.remove();

	//  update income - expenses
	const amountEl = clickedEl.querySelector(".transaction__amount");
	// (+) before var => cast the text into number
	const amount = +amountEl.textContent;
	//console.log(typeof amount);

	if (amount > 0) {
		const currentIncome = +numberIncomeEl.textContent;
		const updatedIncome = currentIncome - amount;
		numberIncomeEl.textContent = updatedIncome;
	} else {
		const currentExpenses = +numberExpensesEl.textContent;
		const updatedExpenses = currentExpenses - amount * -1;
		numberExpensesEl.textContent = updatedExpenses;
	}

	//  update balance
	const income = +numberIncomeEl.textContent;
	const expenses = +numberExpensesEl.textContent;
	balanceNumberEl.textContent = income - expenses;

	//  make red if balance negative
	income - expenses < 0 ? (balanceNumberEl.style.color = "red") : "";
}

transactionEl.addEventListener("click", clickHandler);
formEl.addEventListener("submit", submitHandler);
