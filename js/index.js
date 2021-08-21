// -------------------------Input Detail Option---------------------------//
function inputDetail(inputId, price) {
  const memoryCost = document.querySelector(inputId);
  memoryCost.innerText = price;
}
// ------------------------Button Click Option--------------------------//
function buttonClick(buttonId, inputId, price) {
  document.querySelector(buttonId).addEventListener("click", function () {
    inputDetail(inputId, price);
    inTotal();
  });
}
buttonClick("#smallMemory", "#memoryCost", 0);
buttonClick("#largeMemory", "#memoryCost", 180);
buttonClick("#shortStorage", "#storageCost", 0);
buttonClick("#mediumStorage", "#storageCost", 100);
buttonClick("#largeStorage", "#storageCost", 180);
buttonClick("#freeDelivery", "#deliveryCost", 0);
buttonClick("#deliveryPrice", "#deliveryCost", 20);

//--------------------------Total Acount Option--------------------------//
function inTotal() {
  const computer = document.querySelector("#mainPrice");
  let computerPrice = parseInt(computer.innerText);
  const memory = document.querySelector("#memoryCost");
  let memoryPrice = parseInt(memory.innerText);
  const storage = document.querySelector("#storageCost");
  let storagePrice = parseInt(storage.innerText);
  const delivery = document.querySelector("#deliveryCost");
  let deliveryPrice = parseInt(delivery.innerText);
  let total = (document.querySelector("#totalPrice").innerText =
    computerPrice + memoryPrice + storagePrice + deliveryPrice);
  document.querySelector("#inTotal").innerText = total;
}

//-------------------------Como Code Option---------------------------//
document.querySelector("#applyButton").addEventListener("click", function () {
  let codeInput = document.querySelector("#pomoCodeInput");
  let inTotal = document.querySelector("#inTotal");
  let inTotalNumber = parseInt(inTotal.innerText);

  if (codeInput.value == "stevekaku") {
    inTotal.innerText = inTotalNumber - inTotalNumber * (20 / 100);
    //--------------I have disabled the button here ---------------------//
    document.getElementById("applyButton").disabled = true;
  } else {
    //----------------Error message : When the code does not mathch------//
    alert(
      codeInput.value +
        "  " +
        "Sorry! Pomo code didn't match. Please try again."
    );
  }
  codeInput.value = "";
});
