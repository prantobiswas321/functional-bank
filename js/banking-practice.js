
function getInputValue(inputId) {
    const inputAmount = document.getElementById(inputId);
    const inputAmountText = inputAmount.value;
    const newInputAmount = parseFloat(inputAmountText);
    // clear input value
    inputAmount.value = '';
    return newInputAmount;
}
// get updated total deposit/withdraw amount
function updatedAmount(totalFieldId, amount) {
    const amountTotal = document.getElementById(totalFieldId);
    const prevAmountText = amountTotal.innerText;
    const prevAmount = parseFloat(prevAmountText);
    const newAmountTotal = prevAmount + amount;
    amountTotal.innerText = newAmountTotal;
}
/////////for getting current total balance//////////
function currentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const prevBalanceText = balanceTotal.innerText;
    const prevBalanceAmount = parseFloat(prevBalanceText);
    return prevBalanceAmount;
}
////////for getting update total balance////////
function updateBalanceTotal(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    const prevBalanceAmount = currentBalance();
    if (isAdd == true) {
        const newTotalBalance = prevBalanceAmount + amount;
        balanceTotal.innerText = newTotalBalance;
    }
    else {
        const newTotalBalance = prevBalanceAmount - amount;
        balanceTotal.innerText = newTotalBalance;
    }
}
///////////for deposit//////////////
document.getElementById('deposit-btn').addEventListener('click', function () {
    const newDepositAmount = getInputValue('deposit-input');
    if (newDepositAmount > 0) {
        updatedAmount('deposit-total', newDepositAmount);
        updateBalanceTotal(newDepositAmount, true);
    }
    else {
        alert("You cannot deposit less or equal to zero amount!!!!");
    }
});
//////////////for withdraw//////////////
document.getElementById('withdraw-btn').addEventListener('click', function () {
    const newWithdrawAmount = getInputValue('withdraw-input');
    const currentTotalBalance = currentBalance();
    if (newWithdrawAmount > 0 && newWithdrawAmount <= currentTotalBalance) {
        updatedAmount('withdraw-total', newWithdrawAmount);
        updateBalanceTotal(newWithdrawAmount, false);
    }
    else {
        alert("You cannot input negative amount and also cannot withdraw more than your existence amount!!!!");
    }
})