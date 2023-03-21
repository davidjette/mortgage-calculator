const loanAmountSlider = document.getElementById('loanAmount');
const interestRateSlider = document.getElementById('interestRate');
const loanTermSlider = document.getElementById('loanTerm');
const loanAmountOutput = document.getElementById('loanAmountOutput');
const interestRateOutput = document.getElementById('interestRateOutput');
const loanTermOutput = document.getElementById('loanTermOutput');
const calculateBtn = document.getElementById('calculateBtn');
const payoffAmount = document.getElementById('payoffAmount');

function updateLoanAmount() {
  loanAmountOutput.innerText = `$${loanAmountSlider.value}`;
}

function updateInterestRate() {
  interestRateOutput.innerText = `${interestRateSlider.value}%`;
}

function updateLoanTerm() {
  loanTermOutput.innerText = `${loanTermSlider.value} years`;
}

function calculateMortgage() {
    const principal = parseFloat(loanAmountSlider.value);
    const annualInterestRate = parseFloat(interestRateSlider.value) / 100;
    const loanTermInYears = parseInt(loanTermSlider.value);
  
    const interestPaid = principal * annualInterestRate * loanTermInYears;
    const payoff = principal + interestPaid;
  
    payoffAmount.innerText = `$${payoff.toFixed(2)}`;
  }
  

loanAmountSlider.addEventListener('input', updateLoanAmount);
interestRateSlider.addEventListener('input', updateInterestRate);
loanTermSlider.addEventListener('input', updateLoanTerm);
calculateBtn.addEventListener('click', calculateMortgage);

updateLoanAmount();
updateInterestRate();
updateLoanTerm();
