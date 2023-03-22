function calculateMortgage() {
    const principal = parseFloat(loanAmountSlider.value);
    const annualInterestRate = parseFloat(interestRateSlider.value) / 100;
    const loanTermInYears = parseInt(loanTermSlider.value);
  
    // Calculate monthly payment
    const monthlyInterestRate = annualInterestRate / 12;
    const numberOfPayments = loanTermInYears * 12;
    const monthlyPayment = principal * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) / (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
  
    // Calculate compound interest and generate amortization table
    let balance = principal;
    const amortizationTable = document.getElementById('amortizationTable').getElementsByTagName('tbody')[0];
    amortizationTable.innerHTML = '';
  
    for (let i = 1; i <= numberOfPayments; i++) {
      const interestPayment = balance * monthlyInterestRate;
      const principalPayment = monthlyPayment - interestPayment;
      balance -= principalPayment;
  
      const newRow = amortizationTable.insertRow();
      newRow.insertCell().innerText = i;
      newRow.insertCell().innerText = `$${principalPayment.toFixed(2)}`;
      newRow.insertCell().innerText = `$${interestPayment.toFixed(2)}`;
      newRow.insertCell().innerText = `$${balance.toFixed(2)}`;
    }
  
    const payoff = principal + (monthlyPayment * numberOfPayments);
    payoffAmount.innerText = `$${payoff.toFixed(2)}`;
  }
  
  loanAmountSlider.addEventListener('input', updateLoanAmount);
  interestRateSlider.addEventListener('input', updateInterestRate);
  loanTermSlider.addEventListener('input', updateLoanTerm);
  calculateBtn.addEventListener('click', calculateMortgage);
  
  updateLoanAmount();
  updateInterestRate();
  updateLoanTerm();
  