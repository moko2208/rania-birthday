function checkBirthday() {
  const input = document.getElementById("birthdayInput").value;
  if (input === "17899") {
    document.getElementById("gate").style.display = "none";
    document.getElementById("mainContent").style.display = "block";
  } else {
    alert("Incorrect date. Try again.");
  }
}
