const allSeat = document.getElementsByClassName("seat");
for (const seat of allSeat) {
  seat.addEventListener("click", function (e) {
    const btnText = e.target.innerText;
  });
}


