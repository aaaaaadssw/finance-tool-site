// js/calculator.js - 完整版本

// 1. Loan Calculator
function loanCalc() {
    let amount = parseFloat(document.getElementById("amount").value);
    let rate = parseFloat(document.getElementById("rate").value)/100/12;
    let months = parseInt(document.getElementById("months").value);
    let emi = amount * rate * Math.pow(1+rate, months) / (Math.pow(1+rate, months)-1);
    document.getElementById("result").innerText = "Monthly Payment: " + emi.toFixed(2);
}

// 2. Mortgage Calculator
function mortgageCalc() {
    loanCalc();
}

// 3. Deposit Calculator (原 deposit.html)
function depositCalc() {
    let principal = parseFloat(document.getElementById("depositAmount").value);
    let rate = parseFloat(document.getElementById("depositRate").value)/100;
    let years = parseInt(document.getElementById("depositYears").value);
    let times = parseInt(document.getElementById("depositTimes").value);
    let amount = principal * Math.pow(1 + rate/times, times*years);
    document.getElementById("result").innerText = "Total Amount: " + amount.toFixed(2);
}

// 4. Compound Interest Calculator
function compoundInterestCalc() {
    let principal = parseFloat(document.getElementById("principal").value);
    let rate = parseFloat(document.getElementById("rate").value)/100;
    let times = parseInt(document.getElementById("times").value);
    let years = parseInt(document.getElementById("years").value);
    let amount = principal * Math.pow(1 + rate/times, times*years);
    document.getElementById("result").innerText = "Future Value: " + amount.toFixed(2);
}

// 5. Retirement Calculator
function retirementCalc() {
    let current = parseFloat(document.getElementById("current").value);
    let contribution = parseFloat(document.getElementById("contribution").value);
    let rate = parseFloat(document.getElementById("rate").value)/100;
    let years = parseInt(document.getElementById("years").value);
    let future = current;
    for(let i=0;i<years;i++){
        future = future*(1+rate) + contribution*12;
    }
    document.getElementById("result").innerText = "Future Retirement Savings: " + future.toFixed(2);
}

// 6. Investment Calculator
function investmentCalc() {
    let principal = parseFloat(document.getElementById("principal").value);
    let rate = parseFloat(document.getElementById("rate").value)/100;
    let years = parseInt(document.getElementById("years").value);
    let amount = principal * Math.pow(1 + rate, years);
    document.getElementById("result").innerText = "Investment Value: " + amount.toFixed(2);
}

// 7. ROI Calculator
function roiCalc() {
    let gain = parseFloat(document.getElementById("gain").value);
    let cost = parseFloat(document.getElementById("cost").value);
    let roi = (gain - cost)/cost*100;
    document.getElementById("result").innerText = "ROI: " + roi.toFixed(2) + "%";
}

// 8. Tax Calculator
function taxCalc() {
    let income = parseFloat(document.getElementById("income").value);
    let rate = parseFloat(document.getElementById("rate").value)/100;
    let tax = income*rate;
    document.getElementById("result").innerText = "Tax: " + tax.toFixed(2);
}

// 9. Savings Calculator
function savingsCalc() {
    let principal = parseFloat(document.getElementById("principal").value);
    let contribution = parseFloat(document.getElementById("contribution").value);
    let rate = parseFloat(document.getElementById("rate").value)/100;
    let years = parseInt(document.getElementById("years").value);
    let total = principal;
    for(let i=0;i<years;i++){
        total = total*(1+rate) + contribution;
    }
    document.getElementById("result").innerText = "Total Savings: " + total.toFixed(2);
}

// 10. Inflation Calculator
function inflationCalc() {
    let amount = parseFloat(document.getElementById("amount").value);
    let rate = parseFloat(document.getElementById("rate").value)/100;
    let years = parseInt(document.getElementById("years").value);
    let future = amount*Math.pow(1+rate, years);
    document.getElementById("result").innerText = "Future Value: " + future.toFixed(2);
}

// 11. Simple Interest Calculator
function calculator11() {
    let P = parseFloat(document.getElementById("principal11").value);
    let R = parseFloat(document.getElementById("rate11").value)/100;
    let T = parseFloat(document.getElementById("time11").value);
    let interest = P * R * T;
    document.getElementById("result").innerText = "Simple Interest: " + interest.toFixed(2);
}

// 12. Compound Interest Calculator
function calculator12() {
    let P = parseFloat(document.getElementById("principal12").value);
    let R = parseFloat(document.getElementById("rate12").value)/100;
    let T = parseFloat(document.getElementById("time12").value);
    let n = parseInt(document.getElementById("times12").value);
    let amount = P * Math.pow(1 + R/n, n*T);
    document.getElementById("result").innerText = "Compound Interest Amount: " + amount.toFixed(2);
}

// 13. Loan EMI Calculator
function calculator13() {
    let P = parseFloat(document.getElementById("loanAmount13").value);
    let R = parseFloat(document.getElementById("loanRate13").value)/100/12;
    let N = parseInt(document.getElementById("loanMonths13").value);
    let EMI = P * R * Math.pow(1+R, N) / (Math.pow(1+R, N)-1);
    document.getElementById("result").innerText = "EMI: " + EMI.toFixed(2);
}

// 14. Mortgage Calculator
function calculator14() {
    let P = parseFloat(document.getElementById("mortgageAmount14").value);
    let R = parseFloat(document.getElementById("mortgageRate14").value)/100/12;
    let N = parseInt(document.getElementById("mortgageYears14").value)*12;
    let EMI = P * R * Math.pow(1+R, N) / (Math.pow(1+R, N)-1);
    document.getElementById("result").innerText = "Monthly Mortgage EMI: " + EMI.toFixed(2);
}

// 15. Simple Interest Calculator (重复可按需删除)
function simpleInterestCalc() { calculator11(); }

// 16. Mortgage Extra Payment Calculator
function mortgageExtraCalc() {
    let amount = parseFloat(document.getElementById("amount").value);
    let rate = parseFloat(document.getElementById("rate").value)/100/12;
    let years = parseInt(document.getElementById("years").value);
    let extra = parseFloat(document.getElementById("extra").value);
    let months = years*12;
    let emi = amount * rate * Math.pow(1+rate, months) / (Math.pow(1+rate, months)-1);
    let newEMI = emi + extra;
    document.getElementById("result").innerText = "New Monthly Payment: " + newEMI.toFixed(2);
}

// 17. Future Value Calculator
function futureValueCalc() {
    let principal = parseFloat(document.getElementById("principal").value);
    let contribution = parseFloat(document.getElementById("contribution").value);
    let rate = parseFloat(document.getElementById("rate").value)/100;
    let years = parseInt(document.getElementById("years").value);
    let total = principal;
    for(let i=0;i<years;i++){
        total = total*(1+rate) + contribution*12;
    }
    document.getElementById("result").innerText = "Future Value: " + total.toFixed(2);
}

// 18. EMI Calculator
function emiCalc() {
    calculator13();
}

// 19. Debt Payoff Calculator
function debtPayoffCalc() {
    let debt = parseFloat(document.getElementById("debt").value);
    let payment = parseFloat(document.getElementById("payment").value);
    let rate = parseFloat(document.getElementById("rate").value)/100/12;
    let months = Math.log(payment/(payment-debt*rate))/Math.log(1+rate);
    document.getElementById("result").innerText = "Months to Payoff: " + Math.ceil(months);
}

// 20. Budget Calculator
function budgetCalc() {
    let income = parseFloat(document.getElementById("income").value);
    let expenses = parseFloat(document.getElementById("expenses").value);
    document.getElementById("result").innerText = "Remaining Budget: " + (income-expenses).toFixed(2);
}

// 21. Emergency Fund Calculator
function emergencyFundCalc() {
    let expenses = parseFloat(document.getElementById("expenses").value);
    let months = parseInt(document.getElementById("months").value);
    let fund = expenses*months;
    document.getElementById("result").innerText = "Emergency Fund Needed: " + fund.toFixed(2);
}

// 22. College Savings Calculator
function collegeSavingsCalc() {
    let current = parseFloat(document.getElementById("current").value);
    let contribution = parseFloat(document.getElementById("contribution").value);
    let years = parseInt(document.getElementById("years").value);
    let rate = parseFloat(document.getElementById("rate").value)/100;
    let total = current;
    for(let i=0;i<years;i++){
        total = total*(1+rate) + contribution*12;
    }
    document.getElementById("result").innerText = "Total Savings: " + total.toFixed(2);
}

// 23. 401k Calculator
function k401Calc() {
    let balance = parseFloat(document.getElementById("balance").value);
    let contribution = parseFloat(document.getElementById("contribution").value);
    let rate = parseFloat(document.getElementById("rate").value)/100;
    let years = parseInt(document.getElementById("years").value);
    let total = balance;
    for(let i=0;i<years;i++){
        total = total*(1+rate) + contribution*12;
    }
    document.getElementById("result").innerText = "401k Value: " + total.toFixed(2);
}

// 24~30. 个人贷款、汽车贷款、房贷、退休、投资增长、净资产
function personalLoanCalc() { emiCalc(); }
function carLoanCalc() { personalLoanCalc(); }
function homeLoanEMICalc() { emiCalc(); }
function loanEligibilityCalc() {
    let income = parseFloat(document.getElementById("income").value);
    let expenses = parseFloat(document.getElementById("expenses").value);
    let score = parseFloat(document.getElementById("score").value);
    let eligible = income*0.5 - expenses;
    if(score<600) eligible *=0.5;
    document.getElementById("result").innerText = "Estimated Eligible Amount: " + eligible.toFixed(2);
}
function investmentGrowthCalc() {
    let initial = parseFloat(document.getElementById("initial").value);
    let contribution = parseFloat(document.getElementById("contribution").value);
    let rate = parseFloat(document.getElementById("rate").value)/100;
    let years = parseInt(document.getElementById("years").value);
    let total = initial;
    for(let i=0;i<years;i++){
        total = total*(1+rate) + contribution*12;
    }
    document.getElementById("result").innerText = "Investment Value: " + total.toFixed(2);
}
function netWorthCalc() {
    let assets = parseFloat(document.getElementById("assets").value);
    let liabilities = parseFloat(document.getElementById("liabilities").value);
    document.getElementById("result").innerText = "Net Worth: " + (assets-liabilities).toFixed(2);
}