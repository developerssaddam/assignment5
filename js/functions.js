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
  });
}

// Get innderText function.
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
