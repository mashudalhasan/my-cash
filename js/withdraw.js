document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    withdrawField.value = '';

    if(isNaN(newWithdrawAmount)){
        alert('Please provide a valid number');
        return;
    }

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalAmountlString = withdrawTotalElement.innerText;
    const previousTotalAmount = parseFloat(previousWithdrawTotalAmountlString);

    
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    
    if(newWithdrawAmount > previousBalanceTotal){
        alert('Jantush er account e eto patti nai !!!')
        return;
    }

    const currentWithdrawTotal = previousTotalAmount + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;
    
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;
    
})