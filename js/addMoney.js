document.getElementById("btn-addMoney").addEventListener("click", function (e) {
  e.preventDefault();
  // console.log("first")

  const addMoney = document.getElementById("input-addMoney").value;
  const addMoneyNumber = parseFloat(addMoney);

  const pinNumber = document.getElementById("input-addPin").value;
  const addPinNumber = parseFloat(pinNumber);
  //   console.log(addMoneyNumber, addPinNumber);
  //wrong way to varify

  if (addPinNumber === 1234) {
    const balance = document.getElementById("account-balance").innerText;
    const balanceNumber = parseFloat(balance);
    const newBalance = balanceNumber + addMoneyNumber;
    document.getElementById("account-balance").innerText = newBalance;
  } else {
    alert("Failed to add money.");
  }
});
