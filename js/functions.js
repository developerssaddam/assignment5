const allSeat = document.getElementsByClassName("seat");

for (const seat of allSeat) {
  seat.addEventListener("click", function (e) {
    const targetBtn = e.target;

    // Update total seat.
    const totalSeat = getInnerText("totalSeat");
    setInnerText("totalSeat", totalSeat - 1);

    // Update Sell seat.
    const totalSellSeat = getInnerText("totalSellSeat");
    setInnerText("totalSellSeat", totalSellSeat + 1);

    // Change-Btn-backgroundColor.
    changeBg(targetBtn.innerText);

    // Validation btn again click.
    if (targetBtn.classList.contains("bgGreen")) {
      targetBtn.setAttribute("disabled", true);
    }

    // Show seat name and price in dataTable.
    createTr(targetBtn.innerText, "tbody");

    // Update total price.
    const totalPrice = getInnerText("totalPrice");
    setInnerText("totalPrice", totalPrice + 550);

    // Update Grand totalPrice.
    const grandTotalPrice = getInnerText("grandTotal");
    setInnerText("grandTotal", grandTotalPrice + 550);

    // Validation One can buy 4 tickets.
    if (totalPrice === 1650) {
      for (const seat of allSeat) {
        seat.setAttribute("disabled", true);
      }
    }
  });
}

// Get innerText function.
function getInnerText(elementId) {
  const getElement = document.getElementById(elementId);
  const textValue = getElement.innerText;
  const numberValue = parseInt(textValue);
  return numberValue;
}

// Set innerText function.
function setInnerText(elementId, value) {
  const getElement = document.getElementById(elementId);
  const numberValue = parseInt(value);
  getElement.innerText = numberValue;
}

// Change bg function.
function changeBg(elementId) {
  const targetElement = document.getElementById(elementId);
  targetElement.classList.remove("bgGray");
  targetElement.classList.add("bgGreen");
}

// Create tr function.
function createTr(btnText, elementId) {
  const tr = document.createElement("tr");
  const td1 = document.createElement("td");
  const td2 = document.createElement("td");
  const td3 = document.createElement("td");

  td1.innerText = btnText;
  td2.innerText = "Economoy";
  td3.innerText = "550";
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);

  const tbody = document.getElementById(elementId);
  tbody.appendChild(tr);
}

// applyCoupon function.
function applyCoupon(elementId) {
  const inputValue = document.getElementById(elementId);
  const inputText = inputValue.value;
  const inputTextValue = inputText.split(" ").join("").toUpperCase();

  // Calculation discount.
  if (inputTextValue === "NEW15") {
    const grandTotalPrice = getInnerText("grandTotal");
    const discount = grandTotalPrice * 0.15;
    setInnerText("discountPrice", discount);

    const discountGrandTotal = grandTotalPrice - discount;
    setInnerText("grandTotal", discountGrandTotal);

    hideElement("couponInputField");
    showElement("discountField");
  } else if (inputTextValue === "COUPLE20") {
    const grandTotalPrice = getInnerText("grandTotal");
    const discount = grandTotalPrice * 0.2;
    setInnerText("discountPrice", discount);

    const discountGrandTotal = grandTotalPrice - discount;
    setInnerText("grandTotal", discountGrandTotal);

    hideElement("couponInputField");
    showElement("discountField");
  } else {
    alert("You don't have any discount.");
  }
}

// Hide element function
function hideElement(elementId) {
  const inputField = document.getElementById(elementId);
  inputField.classList.add("hidden");
}

// Show element function
function showElement(elementId) {
  const inputField = document.getElementById(elementId);
  inputField.classList.remove("hidden");
}

// ModalShow and getUserData function
document.getElementById("submitBtn").addEventListener("click", function (e) {
  e.preventDefault();

  const inputField = document.getElementsByClassName("input");
  const totalPrice = getInnerText("totalPrice");
  const modal = document.getElementById("modalPopup");

  const phoneNumber = inputField[1].value;
  if (totalPrice == 0 || phoneNumber == "") {
    alert("You must buy ticket and give phone number!");
  } else {
    modal.showModal();
    for (const input of inputField) {
      input.value = "";
    }
  }
});

// Modal hide function
function hideModal(element) {
  const modal = document.getElementById(element);
  modal.classList.add("hidden");
  location.reload();
}
