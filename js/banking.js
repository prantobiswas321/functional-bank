function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);

    // clear the deposit input field
    inputField.value = '';

    return amountValue;
}

function updateTotalField(totalFieldId, amount) {
    // debugger;
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotalAmount = parseFloat(totalText);

    const newTotalAmount = previousTotalAmount + amount;
    totalElement.innerText = newTotalAmount;
}

function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
}

function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);
    const previousBalanceTotal = getCurrentBalance();

    if (isAdd == true) {
        const newTotalBalance = previousBalanceTotal + amount;
        balanceTotal.innerText = newTotalBalance;
    }
    else {
        const newTotalBalance = previousBalanceTotal - amount;
        balanceTotal.innerText = newTotalBalance;
    }
}
// Handle diposit button event
document.getElementById('deposit-btn').addEventListener('click', function () {
    const newDepositAmount = getInputValue('deposit-input');
    if (newDepositAmount > 0) {
        updateTotalField('deposit-total', newDepositAmount);
        updateBalance(newDepositAmount, true);
    }
});
// handle withdraw event handler
document.getElementById('withdraw-btn').addEventListener('click', function () {
    const newWithdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if (newWithdrawAmount > 0 && newWithdrawAmount <= currentBalance) {
        updateTotalField('withdraw-total', newWithdrawAmount);
        updateBalance(newWithdrawAmount, false);
    }
});