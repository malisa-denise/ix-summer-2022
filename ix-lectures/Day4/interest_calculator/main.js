
const amountInput = document.getElementById('amount-input');
const interestInput = document.getElementById('interest-input');
const yearsInput = document.getElementById('years-input');
const buttonInput = document.getElementById('button');
const cardBody = document.getElementById('card-body');

buttonInput.addEventListener('click', (event) => {
  const amount = amountInput.value;
  const interest = interestInput.value;
  const years = yearsInput.value;

  let total = amount * Math.pow((1 + (interest / 100)), years);
  // console.log(total);

  const resultDiv = document.createElement('div');
  resultDiv.innerHTML = '$' + total.toFixed(2);

  resultDiv.classList.add('alert');
  resultDiv.classList.add('alert-primary');
  resultDiv.classList.add('mt-4');

  cardBody.append(resultDiv);
});