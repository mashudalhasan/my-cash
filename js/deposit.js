document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    
    depositField.value = '';
    
    if(isNaN(newDepositAmount)){
        alert('Please provide a valid number');
        return;
    }

    const depositTotalElement = document.getElementById('deposit-total');
    const previousTotalAmountString = depositTotalElement.innerText;
    const previousTotalAmount = parseFloat(previousTotalAmountString);
    
    const currentDepositTotal = previousTotalAmount + newDepositAmount;
    depositTotalElement.innerText = currentDepositTotal;
    console.log(currentDepositTotal);

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotalElement.innerText = currentBalanceTotal;

})